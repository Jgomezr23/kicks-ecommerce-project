import { ShoesCart } from './ShoesCart.model';

export interface CartJSON {
  id: string;
  userId: string;
  items: ShoesCart[];
  totalPrice: number;
}
