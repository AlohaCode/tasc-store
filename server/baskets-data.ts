export const BASKETS: any = {
  1: {
    id: 1,
    description: 'basket 1',
    items: [
      {
        id: 1,
        taxable: false,
        imported: false,
        description: '16lb bag of Skittles',
        shelfPrice: 16
      },
      {
        id: 2,
        taxable: true,
        imported: false,
        description: 'Walkman',
        shelfPrice: 99.99
      },
      {
        id: 3,
        taxable: false,
        imported: false,
        description: 'bag of microwave Popcorn',
        shelfPrice: 0.99
      }
    ]
  },
  2: {
    id: 2,
    description: 'basket 2',
    items: [
      {
        id: 4,
        taxable: false,
        imported: true,
        description: 'imported bag of Vanilla-Hazelnut Coffee',
        shelfPrice: 11
      },
      {
        id: 5,
        taxable: true,
        imported: true,
        description: 'imported Vespa',
        shelfPrice: 15001.25
      }
    ]
  },
  3: {
    id: 3,
    description: 'basket 3',
    items: [
      {
        id: 6,
        taxable: false,
        imported: true,
        description: 'imported crate of Almond Snickers',
        shelfPrice: 75.99
      },
      {
        id: 7,
        taxable: true,
        imported: false,
        description: 'Discman',
        shelfPrice: 55
      },
      {
        id: 8,
        taxable: true,
        imported: true,
        description: 'imported Bottle of Wine',
        shelfPrice: 10
      },
      {
        id: 9,
        taxable: false,
        imported: false,
        description: '300# bag of Fair-Trade Coffee',
        shelfPrice: 997.99
      }
    ]
  }
};
