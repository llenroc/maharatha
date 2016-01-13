﻿using System.Collections.Generic;
using Abp.Application.Navigation;
using Abp.Localization;
using CAPS.CORPACCOUNTING.Sessions.Dto;

namespace CAPS.CORPACCOUNTING.Web.Models.Layout
{
    public class HeaderViewModel
    {
        public GetCurrentLoginInformationsOutput LoginInformations { get; set; }
        
        public IReadOnlyList<LanguageInfo> Languages { get; set; }

        public LanguageInfo CurrentLanguage { get; set; }
        
        public UserMenu Menu { get; set; }
        
        public string CurrentPageName { get; set; }

        public bool IsMultiTenancyEnabled { get; set; }

        public string GetShownLoginName()
        {
            if (!IsMultiTenancyEnabled)
            {
                return LoginInformations.User.UserName;
            }

            return LoginInformations.Tenant == null
                ? ".\\" + LoginInformations.User.UserName
                : LoginInformations.Tenant.TenancyName + "\\" + LoginInformations.User.UserName;
        }
    }
}