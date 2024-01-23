import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialAccountModuleBase } from "./base/financialAccount.module.base";
import { FinancialAccountService } from "./financialAccount.service";
import { FinancialAccountController } from "./financialAccount.controller";
import { FinancialAccountResolver } from "./financialAccount.resolver";

@Module({
  imports: [FinancialAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialAccountController],
  providers: [FinancialAccountService, FinancialAccountResolver],
  exports: [FinancialAccountService],
})
export class FinancialAccountModule {}
