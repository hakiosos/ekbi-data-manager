import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialAccountService } from "./financialAccount.service";
import { FinancialAccountControllerBase } from "./base/financialAccount.controller.base";

@swagger.ApiTags("financialAccounts")
@common.Controller("financialAccounts")
export class FinancialAccountController extends FinancialAccountControllerBase {
  constructor(
    protected readonly service: FinancialAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
