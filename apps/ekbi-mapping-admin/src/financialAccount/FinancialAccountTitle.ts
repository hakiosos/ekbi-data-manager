import { FinancialAccount as TFinancialAccount } from "../api/financialAccount/FinancialAccount";

export const FINANCIALACCOUNT_TITLE_FIELD = "accountNumber";

export const FinancialAccountTitle = (record: TFinancialAccount): string => {
  return record.accountNumber?.toString() || String(record.id);
};
