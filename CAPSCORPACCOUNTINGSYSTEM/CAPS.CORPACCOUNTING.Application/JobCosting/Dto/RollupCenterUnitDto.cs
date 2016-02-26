﻿using Abp.Application.Services.Dto;
using System.ComponentModel.DataAnnotations;
using System;
using Abp.AutoMapper;

namespace CAPS.CORPACCOUNTING.JobCosting.Dto
{
    [AutoMapFrom(typeof(RollupCenterUnit))]
    public class RollupCenterUnitDto : IInputDto
    {
        /// <summary>Gets or sets the RollupCenterId field. </summary>
        [Range(1, Int32.MaxValue)]
        public int RollupCenterId { get; set; }

        /// <summary>Gets or sets the Caption field. </summary>
        [StringLength(RollupCenterUnit.MaxCaptionLength)]
        [Required]
        public string Caption { get; set; }

        /// <summary>Gets or sets the AccountId field. </summary>
        public long? AccountId { get; set; }

        /// <summary>Gets or sets the JobId field. </summary>
        public int? JobId { get; set; }

        /// <summary>Gets or sets the IsActive field. </summary>
        public bool IsActive { get; set; }

        /// <summary>Gets or sets the IsApproved field. </summary>
        public bool IsApproved { get; set; }

        /// <summary>Gets or sets the CompanyId field. </summary>
        public long? OrganizationUnitId { get; set; }

        /// <summary>Gets or sets the RollupTypeId field. </summary>
        public RollupType RollupTypeID { get; set; }
       
    }
}
