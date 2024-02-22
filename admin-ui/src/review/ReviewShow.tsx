import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { REVIEW_TITLE_FIELD } from "./ReviewTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="reviewId"
          label="products"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="colorr" source="colorr" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="discountPrice " source="discountPrice" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <ReferenceField
              label="reviews"
              source="review.id"
              reference="Review"
            >
              <TextField source={REVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="salePrice" source="salePrice" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="variants" source="variants" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
