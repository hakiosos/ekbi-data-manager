/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAccountWhereUniqueInput } from "./FinancialAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FinancialAccountUpdateInput } from "./FinancialAccountUpdateInput";

@ArgsType()
class UpdateFinancialAccountArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialAccountWhereUniqueInput)
  @Field(() => FinancialAccountWhereUniqueInput, { nullable: false })
  where!: FinancialAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FinancialAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => FinancialAccountUpdateInput)
  @Field(() => FinancialAccountUpdateInput, { nullable: false })
  data!: FinancialAccountUpdateInput;
}

export { UpdateFinancialAccountArgs as UpdateFinancialAccountArgs };
