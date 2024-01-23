import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FinancialAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account Number" source="accountNumber" />
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
