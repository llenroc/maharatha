﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Organizations;

namespace CAPS.CORPACCOUNTING.Masters
{
    /// <summary>
    /// TypeOfAddress Enum
    /// </summary>
    public enum TypeofAddress
    {
        [Display(Name = "Business")]
        Business = 1,
        [Display(Name = "Alternate Business")]
        AlternateBusiness = 2,
        [Display(Name = "Credit Card")]
        CreditCard = 3,
        [Display(Name = "Home")]
        Home = 4,
        [Display(Name = "Primary Contact")]
        PrimaryContact = 5,
        [Display(Name = "Secondary Contact")]
        SecondaryContact = 6,
        [Display(Name = "Other Contact")]
        OtherContact = 7,
        [Display(Name = "Billing Address")]
        BillingAddress = 8,
        [Display(Name = "1099 Address Override")]
        AddressOverride1099 = 9,
        [Display(Name = "Caption Address")]
        CaptionAddress = 10,
    }
    /// <summary>
    /// Enum for Type of Object
    /// </summary>
    public enum TypeofObject
    {
        [Display(Name = "Vendor")]
        Vendor = 1,
        [Display(Name = "Customer")]
        Customer = 2,
        [Display(Name = "Bank")]
        Bank = 3,
        [Display(Name = "Credit Card Bank")]
        CreditCardBank = 4,
        [Display(Name = "Payroll Company")]
        PayrollCompany = 5,
        [Display(Name = "Employee")]
        Emp = 6,
        [Display(Name = "Organization ")]
        Org = 7,
        [Display(Name = "User")]
        User = 8,
    }

    [Table("Caps_Address")]
    public  class AddressUnit : FullAuditedEntity<long>, IMustHaveTenant, IMayHaveOrganizationUnit
    {
        /// <summary>
        ///     Maximum size of Description.
        /// </summary>
        public const int MaxStringNameLength = 1000;
        public const int MaxLength = 100;
        public const int MaxPhoneLength = 100;

        /// <summary>
        ///     Maximum size of RegionLength.
        /// </summary>
        public const int MaxwebsiteLength = 200;
        

        /// <summary>
        ///     Initializes a new instance of the <see cref="AddressUnit" /> class  with no parameter.
        /// </summary>
        public AddressUnit()
        {
        }

        /// <summary>
        ///     Initializes a new instance of the <see cref="AddressUnit" /> class.
        /// </summary>
        public AddressUnit(int objectid, TypeofObject typeofobjectid, TypeofAddress addresstypeid,
            string contactnumber = null, string line1 = null, string line2 = null, string line3 = null,
            string line4 = null, string city = null, string state = null,
            string country = null, string postalcode = null, string email = null, string phone1 = null,
            string phone2 = null, string phone1Extension = null, string phone2Extension = null, string website = null,
            bool isprimary = true, long? organizationunitid = null)
        {
            EmployeeId = objectid;
            TypeofObjectId = typeofobjectid;
            AddressTypeId = addresstypeid;
            ContactNumber = contactnumber;
            Line1 = line1;
            Line2 = line2;
            Line3 = line3;
            Line4 = line4;
            City = city;
            Country = country;
            PostalCode = postalcode;
            Email = email;
            Phone1 = phone1;
            Phone2 = phone2;
            Phone1Extension = phone1Extension;
            Phone2Extension = phone2Extension;
            Website = website;
            IsPrimary = isprimary;
            OrganizationUnitId = organizationunitid;

        }

        #region Class Property Declarations

        /// <summary>Overriding the ID column with AddressId</summary>
        [Column("AddressId")]
        public override long Id { get; set; }
        /// <summary>Gets or sets the ObjectId field. </summary>


        [ForeignKey("EmployeeId")]
        public EmployeeUnit Employee { get; set; }


        [Required]
        public virtual int EmployeeId { get; set; }

       

        /// <summary>Gets or sets the TypeofObjectId field. </summary>
        [Range(1, Int32.MaxValue)]
        public virtual TypeofObject TypeofObjectId { get; set; }

        /// <summary>Gets or sets the AddressTypeId field. </summary>
        [Range(1, Int32.MaxValue)]
        public virtual TypeofAddress AddressTypeId { get; set; }

        /// <summary>Gets or sets the ContactNumber field. </summary>
        [StringLength(MaxStringNameLength)]
        public virtual string ContactNumber { get; set; }

        /// <summary>Gets or sets the Line1 field. </summary>
        [StringLength(MaxStringNameLength)]
        public virtual string Line1 { get; set; }

        /// <summary>Gets or sets the Line2 field. </summary>
        [StringLength(MaxStringNameLength)]
        public virtual string Line2 { get; set; }

        /// <summary>Gets or sets the Line3 field. </summary>
        [StringLength(MaxStringNameLength)]
        public virtual string Line3 { get; set; }

        /// <summary>Gets or sets the Line4 field. </summary>
        [StringLength(MaxStringNameLength)]
        public virtual string Line4 { get; set; }

        /// <summary>Gets or sets the City field. </summary>
        [StringLength(MaxLength)]
        public virtual string City { get; set; }

        /// <summary>Gets or sets the State field. </summary>
        [StringLength(MaxLength)]
        public virtual string State { get; set; }

        /// <summary>Gets or sets the Country field. </summary>
        [StringLength(MaxLength)]
        public virtual string Country { get; set; }

        /// <summary>Gets or sets the PostalCode field. </summary>
        [StringLength(MaxLength)]
        public virtual string PostalCode { get; set; }

        /// <summary>Gets or sets the Fax field. </summary>
        [StringLength(MaxLength)]
        public virtual string Fax { get; set; }

        /// <summary>Gets or sets the Email field. </summary>
        [StringLength(MaxLength)]
        public virtual string Email { get; set; }

        /// <summary>Gets or sets the Phone1 field. </summary>
        [StringLength(MaxPhoneLength)]
        public virtual string Phone1 { get; set; }

        /// <summary>Gets or sets the Phone1Extension field. </summary>
        [StringLength(MaxPhoneLength)]
        public virtual string Phone1Extension { get; set; }

        /// <summary>Gets or sets the Phone2 field. </summary>
        [StringLength(MaxPhoneLength)]
        public virtual string Phone2 { get; set; }

        /// <summary>Gets or sets the Phone2Extension field. </summary>
        [StringLength(MaxPhoneLength)]
        public virtual string Phone2Extension { get; set; }

        /// <summary>Gets or sets the Website field. </summary>
        [StringLength(MaxLength)]
        public virtual string Website { get; set; }

        /// <summary>Gets or sets the IsPrimary field. </summary>
        public virtual bool IsPrimary { get; set; } 

        public int TenantId { get; set; }
        /// <summary>Gets or sets the CompanyId field. </summary>
        public long? OrganizationUnitId { get; set; }
        #endregion
    }
}