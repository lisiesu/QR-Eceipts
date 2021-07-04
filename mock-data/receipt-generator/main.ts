export {};

const products: string[] = [
  'bread',
  'milk',
  'cheese',
  'cookies',
  'tooth brush',
  'chips',
  'crips',
  'orange juice',
  'coca cola',
  'coca cola zero',
  'pepsi',
  'quinoa',
  'brown rice',
  'wild rice',
  'buckwheat',
  'sorghum',
  'tapioca',
  'millet',
  'amaranth',
  'teff',
  'arrowroot',
  'Chocolate Chip Cookies',
  'Shortbread Cookies',
  'Macaron Cookies',
  'Macaroon Cookies',
  'Biscotti Cookies',
  'Sugar Cookies',
  'Oatmeal Raisin Cookies',
  'Gingerbread Cookies',
  'lettuce',
  'salad',
  'rocket salad',
  'cucumber',
  'tomatoes',
  'chicken breast 450g',
  'rump steak',
  'pork chops',
  'pork belly slices',
  'sausages',
  'chorizo',
  'salami',
  'oreos',
  'white wine',
  'red wine',
  'heineken',
  'stella',
  'sprite',
  'fanta',
  'sweetcorn',
  'frozen peas',
  'mustard',
  'ketchup',
  'sweet chili sauce',
  'oat milk',
  'brie',
  'avocados',
];

import * as fs from 'fs';
import * as path from 'path';
import Hashids = require('hashids');
const hashids = new Hashids();

class Receipt {
  constructor(
    public timeOfPurchase: Date,
    public products: {
      prodcut: string;
      price: number;
      vat: number;
      isRefunded: boolean;
    }[],
    public total: number,
    public currency: string,
    public paymentMethod: string,
    public cardNumber: number | string,
    public misc: string,
    public store: string,
    public category: string
  ) {}
}

function generateData(): object[] {
  const cardNumbers: number[] = [
    5768, 2229, 3846, 1254, 3852, 7777, 9998, 7531, 4443, 2221, 1114, 1133,
    5533,
  ];
  const stores: string[] = ["Sainbury's", 'Tesco', "Waitrose's"];
  const receipts: Receipt[] = [];
  for (let i: number = 0; i < 100; i += 1) {
    const randomId: number = Math.floor(Math.random() * 13);
    const randomstore: number = Math.floor(Math.random() * 3);
    const id = i + '';
    const user = 'user' + randomId;
    const store = hashids.encode(1);
    const randomPlusMinus = Math.random();
    const randomTime = Math.floor(Math.random() * 3.154e9);
    let timeOfPurchase: Date;
    if (randomPlusMinus < 0.5) {
      timeOfPurchase = new Date(Date.now() + randomTime);
    } else {
      timeOfPurchase = new Date(Date.now() - randomTime);
    }
    const vat: number = 0.2;
    const isRefunded: boolean = false;
    const totalProductsPurchased: number = Math.floor(Math.random() * 12 + 1);
    const boughtItems: {
      prodcut: string;
      price: number;
      vat: number;
      isRefunded: boolean;
    }[] = [];
    let total: number = 0;
    for (let i = 0; i < totalProductsPurchased; i += 1) {
      const randomItem: number = Math.floor(Math.random() * 56);
      const randomPrice: number = Number((Math.random() * 8 + 1).toFixed(2));
      const item: any = {
        product: products[randomItem],
        price: randomPrice,
        vat,
        isRefunded,
      };
      total += randomPrice;
      boughtItems.push(item);
    }
    total = Number(total.toFixed(2));
    const currency = '£';
    const paymentMethod = 'card';
    const cardNumber = cardNumbers[randomId];
    const misc: string = '';
    const category = hashids.encode(1);
    const receipt: Receipt = new Receipt(
      timeOfPurchase,
      boughtItems,
      total,
      currency,
      paymentMethod,
      cardNumber,
      misc,
      store,
      category
    );
    receipts.push(receipt);
  }
  return receipts;
}

const arrayOfThings = JSON.stringify(generateData(), null, 4);

fs.writeFile('./receipt.json', arrayOfThings, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});
