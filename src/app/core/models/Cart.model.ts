import { ShoesCart } from './ShoesCart.model';

export interface Cart {
  userId: string;
  items: ShoesCart[];
  totalPrice: number;
}
