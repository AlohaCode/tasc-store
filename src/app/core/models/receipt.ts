import { Item } from './item';

export interface Receipt {
  id: number;
  description: string;
  items: Item[];
  total: number;
}

export function compareReceipts(r1: Receipt, r2: Receipt) {
  const compare = r1.id - r2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
