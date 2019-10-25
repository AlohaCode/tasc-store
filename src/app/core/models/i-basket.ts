import { IItem } from './i-item';

export interface IBasket {
  id: number;
  description: string;
  items: IItem[];
}

export function compareBaskets(b1: IBasket, b2: IBasket) {
  const compare = b1.id - b2.id;
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
