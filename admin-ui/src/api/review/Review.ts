import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  description: string;
  id: string;
  products?: Array<Product>;
  rating: number;
  title: string;
  updatedAt: Date;
  user?: User;
};
