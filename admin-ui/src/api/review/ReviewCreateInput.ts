import { ProductCreateNestedManyWithoutReviewsInput } from "./ProductCreateNestedManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  description: string;
  products?: ProductCreateNestedManyWithoutReviewsInput;
  rating: number;
  title: string;
  user: UserWhereUniqueInput;
};
