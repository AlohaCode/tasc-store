import { Item } from './item';

export interface Basket {
  id: number;
  description: string;
  items: Item[];
}

export function compareBaskets(b1: Basket, b2: Basket) {
  const compare = b1.id - b2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
