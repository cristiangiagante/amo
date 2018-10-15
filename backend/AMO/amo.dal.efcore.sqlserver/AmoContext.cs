using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace amo.dal.efcore.sqlserver
{
    class AmoContext :DbContext
    {
        public AmoContext(DbContextOptions<AmoContext> options) : base(options) { }
    }
}
