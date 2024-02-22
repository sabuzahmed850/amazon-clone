import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colorr: JsonValue;
  createdAt: Date;
  discountPrice: number;
  id: string;
  images: JsonValue;
  orders?: Array<Order>;
  review?: Review | null;
  salePrice: number;
  title: JsonValue;
  updatedAt: Date;
  variants: JsonValue;
};
