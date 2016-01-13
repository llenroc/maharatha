﻿using System.Web.Mvc;
using Abp.Auditing;
using Abp.Web.Mvc.Authorization;

namespace CAPS.CORPACCOUNTING.Web.Controllers
{
    [AbpMvcAuthorize]
    public class ApplicationController : CORPACCOUNTINGControllerBase
    {
        [DisableAuditing]
        public ActionResult Index()
        {
            return View("~/App/common/views/layout/layout.cshtml"); //Layout of the angular application.
        }
    }
}