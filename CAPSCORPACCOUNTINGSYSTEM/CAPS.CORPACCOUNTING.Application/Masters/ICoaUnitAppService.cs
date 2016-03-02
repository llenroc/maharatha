﻿using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Masters.Dto;

namespace CAPS.CORPACCOUNTING.Masters
{
    /// <summary>
    /// This service will provide all CRUD operations on COA.
    /// </summary>
    public interface ICoaUnitAppService : IApplicationService
    {
        /// <summary>
        /// Create the ChartOfAccoout.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<CoaUnitDto> CreateCoaUnit(CreateCoaUnitInput input);

        /// <summary>
        /// Get the list of all ChartOfAccoouts and also provided with Sorting,Paging and Searching functionality.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<PagedResultOutput<CoaUnitDto>> GetCoaUnits(GetCoaInput input);

        /// <summary>
        /// Update the ChartOfAccoout based on CoaId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<CoaUnitDto> UpdateCoaUnit(UpdateCoaUnitInput input);

        /// <summary>
        /// Delete the ChartOfAccoout based on CoaId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task DeleteCoaUnit(IdInput input);

        /// <summary>
        /// Get the ChartOfAccoout based on CoaId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<CoaUnitDto> GetCoaUnitById(IdInput input);

    }
}