export interface IItem {
  id: number;
  taxable: boolean;
  imported: boolean;
  description: string;
  shelfPrice: number;
  taxes?: number;
  total?: number;
}

export function compareItems(i1: IItem, i2: IItem) {
  const compare = i1.id - i2.id;
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else { return 0; }
}
