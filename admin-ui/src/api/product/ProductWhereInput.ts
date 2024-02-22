import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colorr?: JsonFilter;
  discountPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  orders?: OrderListRelationFilter;
  review?: ReviewWhereUniqueInput;
  salePrice?: FloatFilter;
  title?: JsonFilter;
  variants?: JsonFilter;
};
