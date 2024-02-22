import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colorr?: SortOrder;
  createdAt?: SortOrder;
  discountPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  reviewId?: SortOrder;
  salePrice?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
