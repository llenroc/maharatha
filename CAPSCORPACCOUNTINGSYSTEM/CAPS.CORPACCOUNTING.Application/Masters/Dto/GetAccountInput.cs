﻿using System;
using System.ComponentModel.DataAnnotations;
using Abp.Extensions;
using Abp.Runtime.Validation;
using CAPS.CORPACCOUNTING.Dto;

namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    public class GetAccountInput : PagedAndSortedInputDto, IShouldNormalize
    {
        /// <summary> Gets or Sets the LastName to Search the Accounts with  OrganizationUnitId </summary>
        public long? OrganizationUnitId { get; set; }

        /// <summary> Gets or Sets the LastName to Search the Accounts with Description </summary>
        public string Description { get; set; }
        /// <summary> Gets or Sets the Caption to Search the Accounts with Caption </summary>
        public string Caption { get; set; }
        /// <summary> Gets or Sets the AccountNumber to Search the Accounts with AccountNumber </summary>
        public string AccountNumber { get; set; }

        /// <summary> Gets or Sets the ChartOfAccountId to Search the Accounts with ChartOfAccountId </summary>
        [Range(1, int.MaxValue, ErrorMessage = "Please enter valid ChartOfAccount")]
        public int CoaId { get; set; }

        public void Normalize()
        {
            if (Sorting.IsNullOrWhiteSpace())
            {
                Sorting = "AccountNumber ASC";
            }
            if (Sorting.IndexOf("AccountNumber", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Account." + Sorting;
            }
            else if (Sorting.IndexOf("Caption", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Account." + Sorting;
            }
            else if (Sorting.IndexOf("Description", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Account." + Sorting;
            }
            else
            {
                Sorting = "Account." + Sorting;
            }
        }
    }
}