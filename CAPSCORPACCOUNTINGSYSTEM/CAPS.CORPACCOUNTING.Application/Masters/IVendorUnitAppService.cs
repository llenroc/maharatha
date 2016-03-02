﻿using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Masters.Dto;

namespace CAPS.CORPACCOUNTING.Masters
{
    /// <summary>
    /// This service will provide all CRUD operations on Vendor.
    /// </summary>
    public interface IVendorUnitAppService : IApplicationService
    {
        /// <summary>
        /// Create the Vendor.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<VendorUnitDto> CreateVendorUnit(CreateVendorUnitInput input);

        /// <summary>
        /// Update the Vendor based on VendorId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<VendorUnitDto> UpdateVendorUnit(UpdateVendorUnitInput input);

        /// <summary>
        /// Delete the Vendor based on VendorId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task DeleteVendorUnit(IdInput input);

        /// <summary>
        /// Get the Vendor based on VendorId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<VendorUnitDto> GetVendorUnitsById(IdInput input);

        /// <summary>
        /// Get the list of all vendors and also provided with Sorting,Paging and Searching functionality.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<PagedResultOutput<VendorUnitDto>> GetVendorUnits(GetVendorInput input);
    }
}