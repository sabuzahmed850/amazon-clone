import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colorr: InputJsonValue;
  discountPrice: number;
  images: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  review?: ReviewWhereUniqueInput | null;
  salePrice: number;
  title: InputJsonValue;
  variants: InputJsonValue;
};
