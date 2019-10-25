import { IItem } from './i-item';

export interface IReceipt {
  id: number;
  description: string;
  items: IItem[];
  taxes?: number;
  total?: number;
}

export function compareReceipts(r1: IReceipt, r2: IReceipt) {
  const compare = r1.id - r2.id;
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
