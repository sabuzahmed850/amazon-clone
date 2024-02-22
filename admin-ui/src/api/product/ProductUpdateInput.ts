import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colorr?: InputJsonValue;
  discountPrice?: number;
  images?: InputJsonValue;
  orders?: OrderUpdateManyWithoutProductsInput;
  review?: ReviewWhereUniqueInput | null;
  salePrice?: number;
  title?: InputJsonValue;
  variants?: InputJsonValue;
};
