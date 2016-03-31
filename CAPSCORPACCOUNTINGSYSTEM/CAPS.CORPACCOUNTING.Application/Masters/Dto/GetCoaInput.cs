﻿
namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    public class GetCoaInput 
    {
        /// <summary> Gets or Sets the CompanyId. </summary>
        public long? OrganizationUnitId { get; set; }

        /// <summary> Gets or Sets the CoaId. </summary>
        public int? CoaId { get; set; }
    }
}