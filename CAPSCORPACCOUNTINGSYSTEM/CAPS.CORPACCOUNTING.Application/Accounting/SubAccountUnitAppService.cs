﻿using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Accounting.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.AutoMapper;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Helpers;
using System.Data.Entity;
using System.Linq.Dynamic;
using Abp.Linq.Extensions;
using AutoMapper;
using System.Collections.Generic;

namespace CAPS.CORPACCOUNTING.Accounting
{
    public class SubAccountUnitAppService : CORPACCOUNTINGServiceBase, ISubAccountUnitAppService
    {

        private readonly SubAccountUnitManager _subAccountUnitManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<SubAccountUnit, long> _subAccountUnitRepository;
        public SubAccountUnitAppService(SubAccountUnitManager subAccountUnitManager, IRepository<SubAccountUnit, long> subAccountUnitRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            _subAccountUnitManager = subAccountUnitManager;
            _unitOfWorkManager = unitOfWorkManager;
            _subAccountUnitRepository = subAccountUnitRepository;
        }


        /// <summary>
        /// Create the Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        public async Task<SubAccountUnitDto> CreateSubAccountUnit(CreateSubAccountUnitInput input)
        {
            var subAccountUnit = input.MapTo<SubAccountUnit>();
            await _subAccountUnitManager.CreateAsync(subAccountUnit);
            await CurrentUnitOfWork.SaveChangesAsync();


            return subAccountUnit.MapTo<SubAccountUnitDto>();
        }

        /// <summary>
        ///  Update Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<SubAccountUnitDto> UpdateSubAccountUnit(UpdateSubAccountUnitInput input)
        {
            var subAccountUnit = await _subAccountUnitRepository.GetAsync(input.SubAccountId);
            Mapper.CreateMap<UpdateSubAccountUnitInput, SubAccountUnit>()
                          .ForMember(u => u.Id, ap => ap.MapFrom(src => src.SubAccountId));
            Mapper.Map(input, subAccountUnit);
            await _subAccountUnitManager.UpdateAsync(subAccountUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
            return subAccountUnit.MapTo<SubAccountUnitDto>();
        }

        /// <summary>
        ///  delete Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task DeleteBankAccountUnit(IdInput input)
        {
            await _subAccountUnitManager.DeleteAsync(input);
        }


        /// <summary>
        /// Get the list of all Sub Accounts
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultOutput<SubAccountUnitDto>> GetSubAccountUnits(SearchInputDto input)
        {
            var subAccountUnitQuery = CreateSubAccountQuery(input);
            subAccountUnitQuery = subAccountUnitQuery.Where(item => item.OrganizationUnitId == input.OrganizationUnitId || item.OrganizationUnitId == null);
            var resultCount = await subAccountUnitQuery.CountAsync();
            var results = await subAccountUnitQuery
                .AsNoTracking()
                .OrderBy(Helper.GetSort(SubAccountUnit.DefaultSortColumn + " "+"ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();


            var mapEnumResults = (from value in results
                                  select new SubAccountUnitDto
                                  {

                                      AccountingLayoutItemId = value.AccountingLayoutItemId,
                                      Caption = value.Caption,
                                      Description = value.Description,
                                      DisplaySequence = value.DisplaySequence,
                                      EntityId = value.EntityId,
                                      GroupCopyLabel = value.GroupCopyLabel,
                                      IsAccountSpecific = value.IsAccountSpecific,
                                      IsActive = value.IsActive,
                                      IsApproved = value.IsApproved,
                                      IsBudgetInclusive = value.IsBudgetInclusive,
                                      IsCorporateSubAccount = value.IsCorporateSubAccount,
                                      IsEnterable = value.IsEnterable,
                                      IsMandatory = value.IsMandatory,
                                      IsProjectSubAccount = value.IsProjectSubAccount,
                                      OrganizationUnitId = value.OrganizationUnitId,
                                      SearchNo = value.SearchNo,
                                      SearchOrder = value.SearchOrder,
                                      SubAccountId = value.SubAccountId,
                                      SubAccountNumber = value.SubAccountNumber,
                                      TypeOfInactiveStatusId = value.TypeOfInactiveStatusId,
                                      TypeOfInactiveStatus = value.TypeOfInactiveStatusId != null ? value.TypeOfInactiveStatusId.ToDisplayName() : "",
                                      TypeofSubAccount = value.TypeofSubAccountId.ToDisplayName(),
                                      TypeofSubAccountId=value.TypeofSubAccountId
                                  }).ToList();
            return new PagedResultOutput<SubAccountUnitDto>(resultCount, mapEnumResults);
        }

        /// <summary>
        /// Get Sub Account based on Id
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<SubAccountUnitDto> GetSubAccountUnitsById(IdInput input)
        {
            var SubAccountUnitItem = await _subAccountUnitRepository.GetAsync(input.Id);
            return SubAccountUnitItem.MapTo<SubAccountUnitDto>();
        }

        private IQueryable<SubAccountUnitDto> CreateSubAccountQuery(SearchInputDto input)
        {

            var subAccountUnitQuery = from subAccount in _subAccountUnitRepository.GetAll()
                                      select new SubAccountUnitDto
                                      {
                                          AccountingLayoutItemId = subAccount.AccountingLayoutItemId,
                                          Caption = subAccount.Caption,
                                          Description = subAccount.Description,
                                          DisplaySequence = subAccount.DisplaySequence,
                                          EntityId = subAccount.EntityId,
                                          GroupCopyLabel = subAccount.GroupCopyLabel,
                                          IsAccountSpecific = subAccount.IsAccountSpecific,
                                          IsActive = subAccount.IsActive,
                                          IsApproved = subAccount.IsApproved,
                                          IsBudgetInclusive = subAccount.IsBudgetInclusive,
                                          IsCorporateSubAccount = subAccount.IsCorporateSubAccount,
                                          IsEnterable = subAccount.IsEnterable,
                                          IsMandatory = subAccount.IsMandatory,
                                          IsProjectSubAccount = subAccount.IsProjectSubAccount,
                                          OrganizationUnitId = subAccount.OrganizationUnitId,
                                          SearchNo = subAccount.SearchNo,
                                          SearchOrder = subAccount.SearchOrder,
                                          SubAccountId = subAccount.Id,
                                          SubAccountNumber = subAccount.SubAccountNumber,
                                          TypeOfInactiveStatusId = subAccount.TypeOfInactiveStatusId.Value,
                                          TypeofSubAccountId = subAccount.TypeofSubAccountId
                                      };

            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                if (!ReferenceEquals(mapSearchFilters, null))
                    subAccountUnitQuery = Helper.CreateFilters(subAccountUnitQuery, mapSearchFilters);
            }
            return subAccountUnitQuery;
        }

        /// <summary>
        /// Get SubAccountTypes
        /// </summary>
        /// <returns></returns>
        public List<NameValueDto> GetTypeofSubAccountList()
        {
            return EnumList.GetTypeofSubAccountList();
        }
    }
}
