import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FinancialAccountWhereInput = {
  accountNumber?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
