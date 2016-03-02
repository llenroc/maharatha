﻿using System;
using Abp.Extensions;
using Abp.Runtime.Validation;
using CAPS.CORPACCOUNTING.Dto;

namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    public class GetVendorInput :  PagedAndSortedInputDto, IShouldNormalize
    {
        /// <summary> Gets or Sets the LastName to Search the Vendors based on LastName. </summary>
        public string LastName { get; set; } = null;

        /// <summary> Gets or Sets the FirstName to Search the Vendors based on FirstName. </summary>
        public string FirstName { get; set; } = null;

        /// <summary> Gets or Sets the PayToName to Search the Vendors based on PayToName. </summary>
        public string PayToName { get; set; } = null;

        /// <summary> Gets or Sets the OrganizationUnitId to Search the Vendors based on CompanyId. </summary>
        public long? OrganizationUnitId { get; set; }

        /// <summary>Gets or sets the VendorNumber  to Search the Vendors based on VendorNumber. </summary>
        public string VendorNumber { get; set; } = null;

        /// <summary>Gets or sets the VendorAccountInfo  to Search the Vendors based on VendorAccountInfo. </summary>
        public string VendorAccountInfo { get; set; } = null;

        /// <summary>Gets or sets the FedralTaxId to Search the Vendors based on FedralTaxId. </summary>
        public string FedralTaxId { get; set; } = null;

        /// <summary>Gets or sets the SSNTaxId to Search the Vendors based on SSNTaxId. </summary>
        public string SSNTaxId { get; set; } = null;

        /// <summary>Gets or sets the PhoneorEmail to Search the Vendors based on Phone1 or phone2 or Email. </summary>
        public string PhoneorEmail { get; set; } = null;

        /// <summary>Gets or sets the Typeof1099Box to Search the Vendors based on Typeof1099Box. </summary>
        public Typeof1099T4? Typeof1099Box { get; set; } = null;

        /// <summary>Gets or sets the TypeofVendorId to Search the Vendors based on TypeofVendorId. </summary>
        public TypeofVendor? TypeofVendorId { get; set; } = null;

        public void Normalize()
        {
            if (Sorting.IsNullOrWhiteSpace())
            {
                Sorting = "LastName ASC";
            }

            if (Sorting.IndexOf("FirstName", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("LastName", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("PayToName", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("VendorNumber", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("VendorAccountInfo", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("FedralTaxId", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else if (Sorting.IndexOf("SSNTaxId", StringComparison.InvariantCultureIgnoreCase) >= 0)
            {
                Sorting = "Vendor." + Sorting;
            }
            else
            {
                Sorting = "Vendor." + Sorting;
            }
        }
    }
}