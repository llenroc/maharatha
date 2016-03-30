﻿using EntityFramework.DynamicFilters;
using CAPS.CORPACCOUNTING.EntityFramework;

namespace CAPS.CORPACCOUNTING.Migrations.Seed
{
    public class InitialDbBuilder
    {
        private readonly CORPACCOUNTINGDbContext _context;

        public InitialDbBuilder(CORPACCOUNTINGDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            _context.DisableAllFilters();

            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new DefaultTenantRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();
            new EnumGenerator(_context).Create();
            new DefaultGridListCreator(_context).Create();

            _context.SaveChanges();
        }
    }
}
