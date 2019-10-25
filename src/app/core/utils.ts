import { IItem } from './models/i-item';

export function computeTaxes(item: IItem): void {
  item.taxes = 0;
  if (item.imported) {
    item.taxes = roundUptoNickel(item.shelfPrice * 0.05);
  }
  if (item.taxable) {
    item.taxes += roundUptoNickel(item.shelfPrice * 0.1);
  }
  item.total = item.shelfPrice + item.taxes;
}

export function roundUptoNickel(tax: number): number {
  const ret = Number((Math.ceil(tax / 0.05) * 0.05).toFixed(2));
  console.log('Figureing tax, tax/taxable:', tax, ret);
  return ret;
}
