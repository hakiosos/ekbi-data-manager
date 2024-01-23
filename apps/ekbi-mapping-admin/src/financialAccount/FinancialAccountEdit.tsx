import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FinancialAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account Number" source="accountNumber" />
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
