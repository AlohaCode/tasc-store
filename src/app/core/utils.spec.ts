import { computeTaxes, roundUptoNickel } from './utils';
import { IItem } from './models';

describe('Utils Functions', () => {
  const taxableItem = {
    id: 2,
    taxable: true,
    imported: false,
    description: 'Walkman',
    shelfPrice: 99.99
  } as IItem;
  const nonTaxableItem = {
    id: 1,
    taxable: false,
    imported: false,
    description: '16lb bag of Skittles',
    shelfPrice: 16
  } as IItem;
  const importTaxableItem = {
    id: 4,
    taxable: false,
    imported: true,
    description: 'imported bag of Vanilla-Hazelnut Coffee',
    shelfPrice: 11
  } as IItem;
  const importAndSalesTaxableItem = {
    id: 8,
    taxable: true,
    imported: true,
    description: 'imported Bottle of Wine',
    shelfPrice: 10
  } as IItem;

  it('should compute sales taxes', () => {
    computeTaxes(taxableItem);
    expect(taxableItem.taxes).toEqual(10);
    expect(taxableItem.total).toEqual(109.99);
  });

  it('should compute import taxes', () => {
    computeTaxes(importTaxableItem);
    expect(importTaxableItem.taxes).toEqual(0.55);
    expect(importTaxableItem.total).toEqual(11.55);
  });

  it('should compute sales and import taxes', () => {
    computeTaxes(importAndSalesTaxableItem);
    expect(importAndSalesTaxableItem.taxes).toEqual(1.5);
    expect(importAndSalesTaxableItem.total).toEqual(11.5);
  });

  it('should compute no taxes', () => {
    computeTaxes(nonTaxableItem);
    expect(nonTaxableItem.taxes).toEqual(0);
    expect(nonTaxableItem.total).toEqual(16);
  });

  it('should round up to nearest nickel', () => {
    const roundedVal = roundUptoNickel(0.17);
    expect(roundedVal).toEqual(0.2);
  });

});
