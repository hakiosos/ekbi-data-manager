import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialAccountResolverBase } from "./base/financialAccount.resolver.base";
import { FinancialAccount } from "./base/FinancialAccount";
import { FinancialAccountService } from "./financialAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialAccount)
export class FinancialAccountResolver extends FinancialAccountResolverBase {
  constructor(
    protected readonly service: FinancialAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
