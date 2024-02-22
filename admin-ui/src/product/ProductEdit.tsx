import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <div />
        <NumberInput label="discountPrice " source="discountPrice" />
        <div />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="review.id" reference="Review" label="reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <NumberInput label="salePrice" source="salePrice" />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
