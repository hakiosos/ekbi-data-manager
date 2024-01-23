import { SortOrder } from "../../util/SortOrder";

export type FinancialAccountOrderByInput = {
  accountNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
