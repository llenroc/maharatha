﻿using Abp.Domain.Entities.Auditing;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CAPS.CORPACCOUNTING.Common
{

    /// <summary>
    ///  TypeOfModificationRequest is the table name in Lajit
    /// </summary>
    [Table("CAPS_TypeOfModificationRequest")]
   public class TypeOfModificationRequestUnit : CreationAuditedEntity<short>
    {

        public const int MaxDescriptionLength = 50;
        public const int MaxCaptionLength = 20;

        /// <summary> Overriding the ID column with TypeOfModificationRequestID field. </summary>
        [Column("TypeOfModificationRequestId")]
        public override short Id { get; set; }

        /// <summary>Gets or sets the Description field. </summary>
        [StringLength(MaxDescriptionLength)]
        public virtual string Description { get; set; }

        /// <summary>Gets or sets the Caption field. </summary>
        [StringLength(MaxCaptionLength)]
        public virtual string Caption { get; set; }

        /// <summary>Gets or sets the DisplaySequence field. </summary>
        public virtual short? DisplaySequence { get; set; }

        /// <summary>Gets or sets the Notes field. </summary>
        public virtual string Notes { get; set; }
    }
}   