export interface Item {
  id: number;
  taxable: boolean;
  imported: boolean;
  description: string;
  shelfPrice: number;
}

export function compareItems(i1: Item, i2: Item) {
  const compare = i1.id - i2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
