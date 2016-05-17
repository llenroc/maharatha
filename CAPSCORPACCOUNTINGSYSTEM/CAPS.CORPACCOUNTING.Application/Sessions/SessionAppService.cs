﻿using System;
using System.Threading.Tasks;
using Abp.Auditing;
using Abp.Authorization;
using Abp.AutoMapper;
using CAPS.CORPACCOUNTING.Sessions.Dto;

namespace CAPS.CORPACCOUNTING.Sessions
{
    [AbpAuthorize]
    public class SessionAppService : CORPACCOUNTINGAppServiceBase, ISessionAppService
    {
        private readonly CustomAppSession _customAppSessionSession;

        public SessionAppService(CustomAppSession customAppSessionSession)
        {
            _customAppSessionSession = customAppSessionSession;
        }
        [DisableAuditing]
        public async Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations()
        {
            var output = new GetCurrentLoginInformationsOutput
            {
                User = (await GetCurrentUserAsync()).MapTo<UserLoginInfoDto>()


            };

            if (AbpSession.TenantId.HasValue)
            {
                output.Tenant = (await GetCurrentTenantAsync()).MapTo<TenantLoginInfoDto>();

            }

            if (_customAppSessionSession.OrganizationId != null)
            {
                output.UserOrganizationId = Convert.ToInt64(_customAppSessionSession.OrganizationId);
            }

            return output;
        }
    }
}