﻿using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using Abp.Organizations;
using CAPS.CORPACCOUNTING.Authorization;
using CAPS.CORPACCOUNTING.Organizations.Dto;
using CAPS.CORPACCOUNTING.Authorization.Users;
using Abp.Domain.Uow;
using CAPS.CORPACCOUNTING.Masters;
using CAPS.CORPACCOUNTING.Masters.Dto;
using Abp.Configuration;
using CAPS.CORPACCOUNTING.Configuration.Host.Dto;
using CAPS.CORPACCOUNTING.Configuration;
using System;
using System.Configuration;
using CAPS.CORPACCOUNTING.Authorization.Users.Profile.Dto;
using System.IO;
using System.Drawing;
using Abp.UI;
using Abp.IO;
using CAPS.CORPACCOUNTING.Organization;

namespace CAPS.CORPACCOUNTING.Organizations
{
    [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits)]
    public class OrganizationUnitAppService : CORPACCOUNTINGAppServiceBase, IOrganizationUnitAppService
    {
        private readonly OrganizationExtendedUnitManager _organizationExtendedUnitManager;
        private readonly IRepository<OrganizationUnit, long> _organizationUnitRepository;
        private readonly IRepository<OrganizationExtended, long> _organizationExtendedUnitRepository;
        private readonly IRepository<UserOrganizationUnit, long> _userOrganizationUnitRepository;
        private readonly IRepository<AddressUnit, long> _addressRepository;
        private readonly ISettingDefinitionManager _settingDefinitionManager;
        private readonly IAppFolders _appFolders;
        public OrganizationUnitAppService(
            OrganizationExtendedUnitManager organizationExtendedUnitManager,
            IRepository<OrganizationUnit, long> organizationUnitRepository,
            IRepository<UserOrganizationUnit, long> userOrganizationUnitRepository,
            IRepository<AddressUnit, long> addressRepository,
            ISettingDefinitionManager settingDefinitionManager,
            IAppFolders appFolders,
            IRepository<OrganizationExtended, long> organizationExtendedUnitRepository
            )
        {
            _organizationExtendedUnitManager = organizationExtendedUnitManager;
            _organizationUnitRepository = organizationUnitRepository;
            _userOrganizationUnitRepository = userOrganizationUnitRepository;
            _addressRepository = addressRepository;
            _settingDefinitionManager = settingDefinitionManager;
            _appFolders = appFolders;
            _organizationExtendedUnitRepository = organizationExtendedUnitRepository;
        }

        public async Task<ListResultOutput<OrganizationUnitDto>> GetOrganizationUnits()
        {
            var query =
                from ou in _organizationExtendedUnitRepository.GetAll()
                join address in _addressRepository.GetAll().Where(u => u.TypeofObjectId == TypeofObject.Org) on ou.Id equals address.ObjectId
                join uou in _userOrganizationUnitRepository.GetAll() on ou.Id equals uou.OrganizationUnitId into g
                select new { ou, address, memberCount = g.Count() };

            var items = await query.ToListAsync();
            return new ListResultOutput<OrganizationUnitDto>(
                items.Select(item =>
                {
                    var dto = item.ou.MapTo<OrganizationUnitDto>();
                    dto.MemberCount = item.memberCount;
                    dto.Address = item.address.MapTo<AddressUnitDto>();
                    return dto;
                }).ToList());
        }

        public async Task<PagedResultOutput<OrganizationUnitUserListDto>> GetOrganizationUnitUsers(GetOrganizationUnitUsersInput input)
        {
            var query = from uou in _userOrganizationUnitRepository.GetAll()
                        join ou in _organizationUnitRepository.GetAll() on uou.OrganizationUnitId equals ou.Id
                        join user in UserManager.Users on uou.UserId equals user.Id
                        where uou.OrganizationUnitId == input.Id
                        orderby input.Sorting
                        select new { uou, user };

            var totalCount = await query.CountAsync();
            var items = await query.PageBy(input).ToListAsync();

            return new PagedResultOutput<OrganizationUnitUserListDto>(
                totalCount,
                items.Select(item =>
                {
                    var dto = item.user.MapTo<OrganizationUnitUserListDto>();
                    dto.AddedTime = item.uou.CreationTime;
                    return dto;
                }).ToList());
        }

        [UnitOfWork]
        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageOrganizationTree)]
        public async Task<OrganizationUnitDto> CreateOrganizationUnit(CreateOrganizationUnitInput input)
        {
         
            byte[] logo = null;
            if (!ReferenceEquals(input.Logo, null))
                logo = await UpdateProfilePicture(input.Logo);

            var organizationUnit = new OrganizationExtended(AbpSession.TenantId, input.DisplayName, input.ParentId, input.TransmitterContactName,
                input.TransmitterEmailAddress, input.TransmitterCode, input.TransmitterControlCode, input.FederalTaxId, logo);

            await _organizationExtendedUnitManager.CreateAsync(organizationUnit);
            await CurrentUnitOfWork.SaveChangesAsync();


            // Set DefaultOrganizationId to the User if DefaultOrganizationId is null
            var user = await UserManager.GetUserByIdAsync(organizationUnit.CreatorUserId.Value);
            if (!user.DefaultOrganizationId.HasValue)
            {
                user.DefaultOrganizationId = organizationUnit.Id;
                await UserManager.UpdateAsync(user);
                await CurrentUnitOfWork.SaveChangesAsync();
            }

            //address Information
            if (!ReferenceEquals(input.Address, null))
            {
                if (input.Address.Line1 != null || input.Address.Line2 != null ||
                    input.Address.Line4 != null || input.Address.Line4 != null ||
                    input.Address.State != null || input.Address.Country != null ||
                    input.Address.Email != null || input.Address.Phone1 != null ||
                    input.Address.ContactNumber != null)
                {
                    input.Address.TypeofObjectId = TypeofObject.Org;
                    input.Address.ObjectId = organizationUnit.Id;
                    var addressUnit = input.Address.MapTo<AddressUnit>();
                    await _addressRepository.InsertAsync(addressUnit);
                }
                await CurrentUnitOfWork.SaveChangesAsync();
            }

            //Organization Settings

            return organizationUnit.MapTo<OrganizationUnitDto>();
        }

        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageOrganizationTree)]
        public async Task<OrganizationUnitDto> UpdateOrganizationUnit(UpdateOrganizationUnitInput input)
        {

            byte[] logo = null;
            if (!ReferenceEquals(input.Logo, null))
                logo = await UpdateProfilePicture(input.Logo);

            var organizationUnit = await _organizationExtendedUnitRepository.GetAsync(input.Id);

            organizationUnit.DisplayName = input.DisplayName;
            organizationUnit.TransmitterContactName = input.TransmitterContactName;
            organizationUnit.TransmitterControlCode = input.TransmitterControlCode;
            organizationUnit.TransmitterEmailAddress = input.TransmitterEmailAddress;
            organizationUnit.TransmitterCode = input.TransmitterCode;
            organizationUnit.FederalTaxId = input.FederalTaxId;
            await _organizationExtendedUnitManager.UpdateAsync(organizationUnit);


            // update address Information

            if (!ReferenceEquals(input.Address, null))
            {
                if (input.Address.AddressId != 0)
                {
                    var addressUnit = input.Address.MapTo<AddressUnit>();
                    await _addressRepository.UpdateAsync(addressUnit);
                }
                else
                {
                    if (input.Address.Line1 != null || input.Address.Line2 != null ||
                        input.Address.Line4 != null || input.Address.Line4 != null ||
                        input.Address.State != null || input.Address.Country != null ||
                        input.Address.Email != null || input.Address.Phone1 != null || input.Address.Website != null)
                    {
                        input.Address.TypeofObjectId = TypeofObject.Org;
                        input.Address.ObjectId = input.Id;
                        var addressUnit = input.Address.MapTo<AddressUnit>();
                        await _addressRepository.InsertAsync(addressUnit);
                    }
                }
            }
            await CurrentUnitOfWork.SaveChangesAsync();
            return await CreateOrganizationUnitDto(organizationUnit);
        }


        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageOrganizationTree)]
        public async Task<OrganizationUnitDto> MoveOrganizationUnit(MoveOrganizationUnitInput input)
        {
            await _organizationExtendedUnitManager.MoveAsync(input.Id, input.NewParentId);

            return await CreateOrganizationUnitDto(
                await _organizationUnitRepository.GetAsync(input.Id)
                );
        }

        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageOrganizationTree)]
        public async Task DeleteOrganizationUnit(IdInput<long> input)
        {
            await _addressRepository.DeleteAsync(p => p.ObjectId == input.Id && p.TypeofObjectId == TypeofObject.Org);
            await _organizationExtendedUnitManager.DeleteAsync(input.Id);
        }

        [UnitOfWork]
        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageMembers)]
        public async Task AddUserToOrganizationUnit(UserToOrganizationUnitInput input)
        {
            await UserManager.AddToOrganizationUnitAsync(input.UserId, input.OrganizationUnitId);

            /// Set DefaultOrganizationId to the User
            var user = await UserManager.GetUserByIdAsync(input.UserId);
            if (!user.DefaultOrganizationId.HasValue)
            {
                user.DefaultOrganizationId = input.OrganizationUnitId;
                await UserManager.UpdateAsync(user);
                await CurrentUnitOfWork.SaveChangesAsync();
            }
        }

        [UnitOfWork]
        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageMembers)]
        public async Task RemoveUserFromOrganizationUnit(UserToOrganizationUnitInput input)
        {
            await UserManager.RemoveFromOrganizationUnitAsync(input.UserId, input.OrganizationUnitId);

            // set DefaultOrganizationId to null if the user has to remove organizationid is default organizationId
            var user = await UserManager.GetUserByIdAsync(input.UserId);
            if (user.DefaultOrganizationId.HasValue && user.DefaultOrganizationId.Value.CompareTo(input.OrganizationUnitId) == 0)
            {
                user.DefaultOrganizationId = null;
                await UserManager.UpdateAsync(user);
                await CurrentUnitOfWork.SaveChangesAsync();
            }
        }

        [AbpAuthorize(AppPermissions.Pages_Administration_OrganizationUnits_ManageMembers)]
        public async Task<bool> IsInOrganizationUnit(UserToOrganizationUnitInput input)
        {
            return await UserManager.IsInOrganizationUnitAsync(input.UserId, input.OrganizationUnitId);
        }

        private async Task<OrganizationUnitDto> CreateOrganizationUnitDto(OrganizationUnit organizationUnit)
        {
            var dto = organizationUnit.MapTo<OrganizationUnitDto>();
            dto.MemberCount = await _userOrganizationUnitRepository.CountAsync(uou => uou.OrganizationUnitId == organizationUnit.Id);
            return dto;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        private async Task<byte[]> UpdateProfilePicture(UpdateProfilePictureInput input)
        {
            var tempProfilePicturePath = Path.Combine(_appFolders.TempFileDownloadFolder, input.FileName);

            byte[] byteArray;

            using (var fsTempProfilePicture = new FileStream(tempProfilePicturePath, FileMode.Open))
            {
                using (var bmpImage = new Bitmap(fsTempProfilePicture))
                {
                    var width = input.Width == 0 ? bmpImage.Width : input.Width;
                    var height = input.Height == 0 ? bmpImage.Height : input.Height;
                    var bmCrop = bmpImage.Clone(new Rectangle(input.X, input.Y, width, height), bmpImage.PixelFormat);

                    using (var stream = new MemoryStream())
                    {
                        bmCrop.Save(stream, bmpImage.RawFormat);
                        stream.Close();
                        byteArray = stream.ToArray();
                    }
                }
            }

            if (byteArray.LongLength > 102400) //100 KB
            {
                throw new UserFriendlyException(L("ResizedProfilePicture_Warn_SizeLimit"));
            }

            FileHelper.DeleteIfExists(tempProfilePicturePath);
            return byteArray;
        }



    }
}