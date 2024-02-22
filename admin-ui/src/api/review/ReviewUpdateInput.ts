import { ProductUpdateManyWithoutReviewsInput } from "./ProductUpdateManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  description?: string;
  products?: ProductUpdateManyWithoutReviewsInput;
  rating?: number;
  title?: string;
  user?: UserWhereUniqueInput;
};
