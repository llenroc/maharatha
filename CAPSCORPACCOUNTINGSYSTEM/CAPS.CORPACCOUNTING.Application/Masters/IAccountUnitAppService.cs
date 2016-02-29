﻿using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Masters.Dto;

namespace CAPS.CORPACCOUNTING.Masters
{
    /// <summary>
    /// This service will provide all CRUD operations on Account.
    /// </summary>
    public interface IAccountUnitAppService:IApplicationService
    {
        /// <summary>
        /// Get the list of all Accounts based on CompanyId.
        /// </summary>
        /// <param name="organizationUnitId"></param>
        /// <returns></returns>
        Task<ListResultOutput<AccountUnitDto>> GetAccountUnits(long? organizationUnitId);

        /// <summary>
        /// Create the Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<AccountUnitDto> CreateAccountUnit(CreateAccountUnitInput input);

        /// <summary>
        /// Update the Account based on AccountId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<AccountUnitDto> UpdateAccountUnit(UpdateAccountUnitInput input);

        /// <summary>
        /// Get the list of all Accounts based on CoaId and also provided with Sorting,Paging and Searching functionality.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<PagedResultOutput<AccountUnitDto>> GetAccountUnitsByCoaId(GetAccountInput input);

        /// <summary>
        /// Delete the Account based on AccountId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task DeleteAccountUnit(IdInput<long> input);

        /// <summary>
        /// Get the Account based on AccountId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<AccountUnitDto> GetAccountUnitsById(IdInput input);
    }
}
