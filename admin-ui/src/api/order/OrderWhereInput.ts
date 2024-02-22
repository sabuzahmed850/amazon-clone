import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  paymentStatus?: "Option1";
  prices?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
