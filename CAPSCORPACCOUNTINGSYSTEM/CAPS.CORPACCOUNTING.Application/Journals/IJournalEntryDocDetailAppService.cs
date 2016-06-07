﻿using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Uow;
using System.Threading.Tasks;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Masters.Dto;
using System.Collections.Generic;
using CAPS.CORPACCOUNTING.Journals.dto;
using CAPS.CORPACCOUNTING.Journals.Dto;

namespace CAPS.CORPACCOUNTING.Journals
{
    /// <summary>
    ///  Provide all CRUD operations for JournalEntryDocument.
    /// </summary>
    public interface IJournalEntryDocDetailAppService : IApplicationService
    {
      
        /// <summary>
        ///Add or Update or delete Journal Entry Document.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task JournalEntryDocumentTransactionUnit(List<JournalEntryDocDetailInputUnit> input);

        /// <summary>
        /// Delete Journal Entry Document.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task DeleteJournalEntryDocDetailUnit(IdInput<long> input);


        /// <summary>
        /// Get Journal Entry Document List.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<PagedResultOutput<JournalEntryDocDetailUnitDto>> GetJournalEntryDocDetailsByAccountingDocId(GetTransactionList input);

   
    }
}
