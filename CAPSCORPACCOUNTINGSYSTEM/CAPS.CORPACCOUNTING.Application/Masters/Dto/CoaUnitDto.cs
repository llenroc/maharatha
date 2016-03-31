﻿using Abp.Application.Services.Dto;
using  Abp.AutoMapper;

namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    [AutoMapFrom(typeof(CoaUnit))]  
    public class CoaUnitDto : IOutputDto
    {
        /// <summary>Gets or sets the CoaId field. </summary>
        public int CoaId { get; set; }

        /// <summary>Gets or sets the Caption field. </summary>
        public string Caption { get; set; }

        /// <summary>Gets or sets the Description field. </summary>
        public string Description { get; set; }       

        /// <summary>Gets or sets the Display Sequence field. </summary>
        public int? DisplaySequence { get; set; }

        /// <summary>Gets or sets the IsApproved field. </summary>
        public bool IsApproved { get; set; }

        /// <summary>Gets or sets the IsPrivate field. </summary>
        public bool IsPrivate { get; set; }

        /// <summary>Gets or sets the TenantId field. </summary>
        public int TenantId { get; set; }

        /// <summary>Gets or sets the CompanyId field. </summary>
        public long? OrganizationUnitId { get; set; }

        /// <summary>Gets or sets the IsActive field. </summary>
        public bool IsActive { get; set; }       

        /// <summary>Gets or sets the IsCorporate field. </summary>
        public bool IsCorporate { get; set; }

        /// <summary>Gets or sets the IsNumeric field. </summary>
        public bool IsNumeric { get; set; }

        /// <summary>Gets or sets the LinkChartOfAccountID field. </summary>
        public int? LinkChartOfAccountID { get; set; }

        /// <summary>Gets or sets the StandardGroupTotalId field. </summary>      
        public StandardGroupTotal? StandardGroupTotalId { get; set; }
    }
}
