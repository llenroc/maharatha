﻿using CAPS.CORPACCOUNTING.DataExporting.Excel.EpPlus;
using Abp.Runtime.Session;
using Abp.Timing.Timezone;
using CAPS.CORPACCOUNTING.Dto;
using CAPS.CORPACCOUNTING.Masters;
using CAPS.CORPACCOUNTING.Helpers;
using CAPS.CORPACCOUNTING.Accounting;
using CAPS.CORPACCOUNTING.Accounts;
using System.Threading.Tasks;
using CAPS.CORPACCOUNTING.JobCosting;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Masters.Dto;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using System.Collections.Generic;
using OfficeOpenXml.DataValidation;
namespace CAPS.CORPACCOUNTING.ExcelTemplates
{
   public class DivisionTemplate : EpPlusExcelExporterBase, ITemplate
    {

        private readonly IJobUnitAppService _jobUnitAppService;
        private readonly IAccountUnitAppService _accountUnitAppService;

        private readonly int startRowIndex = 2;
        private readonly int endRowIndex = 3000;


        /// <summary>
        /// 
        /// </summary>
        /// <param name="jobUnitAppService"></param>
        /// <param name="accountUnitAppService"></param>
        public DivisionTemplate(IJobUnitAppService jobUnitAppService, IAccountUnitAppService accountUnitAppService)
        {
            _jobUnitAppService = jobUnitAppService;
            _accountUnitAppService = accountUnitAppService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<FileDto> DownLoadTemplate(int coaId)
        {
            var currencylist = await _accountUnitAppService.GetTypeOfCurrencyList();
            var jobNumberIsNumeric = false;
            var booleanList = ExcelHelper.GetBooleanList();

            return CreateExcelPackage(
                "DivisionTemplate.xlsx",
                excelPackage =>
                {
                    var sheet = excelPackage.Workbook.Worksheets.Add(L("DivisionTemplate"));
                    var listDataSheet = excelPackage.Workbook.Worksheets.Add(L("DropDownListInformation"));
                    listDataSheet.Hidden = OfficeOpenXml.eWorkSheetHidden.Hidden;

                    ExcelHelper.AddListDataIntoWorkSheet(listDataSheet, currencylist, L("Currency"), "C");
                    ExcelHelper.AddListDataIntoWorkSheet(listDataSheet, booleanList, L("Flags"), "D");
                    
                    AddHeader(
                        sheet,
                    L("Number"),
                    L("Description"),
                    L("Currency"),
                    L("Active")
                    );


                    //reference list columns to Excel Sheet
                    ExcelHelper.AddValidationtoSheet(sheet,
                        new ExcelProperites
                        {
                            ExcelFormula = ExcelHelper.GetMultiValidationString(
                                new List<string>() {
                                    ExcelHelper.GetMaxLengthFormula("A2", AccountUnit.MaxAccountSize),
                                    ExcelHelper.GetAllowNumberFormula("A2",jobNumberIsNumeric) ,
                                     ExcelHelper.GetDuplicateCellFormula("A",startRowIndex,endRowIndex)
                                    }
                                       ),
                            ShowErrorMessage = true,
                            Error = ExcelHelper.ApplyPlaceHolderValues(L("AllowDuplicateVaues") + ", " + (jobNumberIsNumeric ? L("AllowNumbers") + ", " : "") + L("AllowMaxLength"),
                            new Dictionary<string, string>() { { "{length}", JobUnit.MaxJobNumberLength.ToString() },
                            { "{type}", "Charcters" }}),
                            ErrorTitle = L("ValidationMessage"),
                            ErrorStyle = ExcelDataValidationWarningStyle.stop
                        }
                            , startRowIndex, endRowIndex, 1);

                    ExcelHelper.AddValidationtoSheet(sheet,
                      new ExcelProperites
                      {
                          ExcelFormula = ExcelHelper.GetMultiValidationString(
                              new List<string>() {
                                    ExcelHelper.GetMaxLengthFormula("B2", AccountUnit.MaxAccountSize),
                               ExcelHelper.GetDuplicateCellFormula("B",startRowIndex,endRowIndex)}),
                          ShowErrorMessage = true,
                          Error = ExcelHelper.ApplyPlaceHolderValues(L("AllowDuplicateVaues") + ", " + L("AllowMaxLength"), new Dictionary<string, string>() { { "{length}", JobUnit.MaxCaptionLength.ToString() },
                            { "{type}", "Charcters" }}),
                          ErrorTitle = L("ValidationMessage"),
                          ErrorStyle = ExcelDataValidationWarningStyle.stop
                      }
                      , startRowIndex, endRowIndex, 2);

                    var excelDdlErrorMsgSettings = new ExcelProperites
                    {
                        ShowErrorMessage = true,
                        Error = L("AllowMaxLength"),
                        ErrorTitle = L("ValidationMessage"),
                        ErrorStyle = ExcelDataValidationWarningStyle.stop
                    };

                    ExcelHelper.AddDropDownValidationToSheet(sheet, excelDdlErrorMsgSettings, ExcelHelper.GetDropDownListFormula(L("DropDownListInformation"), "C", 2, currencylist.Count + 1), startRowIndex, endRowIndex, 3);
                    ExcelHelper.AddDropDownValidationToSheet(sheet, excelDdlErrorMsgSettings, ExcelHelper.GetDropDownListFormula(L("DropDownListInformation"), "D", 2, booleanList.Count + 1), startRowIndex, endRowIndex, 4);
                });
        }
    }
}