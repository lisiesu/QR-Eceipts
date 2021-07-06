"use strict";
exports.__esModule = true;
var products = [
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
var fs = require("fs");
var Hashids = require("hashids");
var hashids = new Hashids();
var Receipt = /** @class */ (function () {
    function Receipt(timeOfPurchase, products, total, currency, paymentMethod, cardNumber, misc, store, category) {
        this.timeOfPurchase = timeOfPurchase;
        this.products = products;
        this.total = total;
        this.currency = currency;
        this.paymentMethod = paymentMethod;
        this.cardNumber = cardNumber;
        this.misc = misc;
        this.store = store;
        this.category = category;
    }
    return Receipt;
}());
function generateData() {
    var cardNumbers = [
        5768, 2229, 3846, 1254, 3852, 7777, 9998, 7531, 4443, 2221, 1114, 1133,
        5533,
    ];
    var stores = ["Sainbury's", 'Tesco', "Waitrose's"];
    var receipts = [];
    for (var i = 0; i < 100; i += 1) {
        var randomId = Math.floor(Math.random() * 13);
        var randomstore = Math.floor(Math.random() * 3);
        var id = i + '';
        var user = 'user' + randomId;
        var store = { id: hashids.encode(2) };
        var randomPlusMinus = Math.random();
        var randomTime = Math.floor(Math.random() * 3.154e9);
        var timeOfPurchase = void 0;
        if (randomPlusMinus < 0.5) {
            timeOfPurchase = new Date(Date.now() + randomTime);
        }
        else {
            timeOfPurchase = new Date(Date.now() - randomTime);
        }
        var vat = 0.2;
        var isRefunded = false;
        var totalProductsPurchased = Math.floor(Math.random() * 12 + 1);
        var boughtItems = [];
        var total = 0;
        for (var i_1 = 0; i_1 < totalProductsPurchased; i_1 += 1) {
            var randomItem = Math.floor(Math.random() * 56);
            var randomPrice = Number((Math.random() * 8 + 1).toFixed(2));
            var item = {
                product: products[randomItem],
                price: randomPrice,
                vat: vat,
                isRefunded: isRefunded
            };
            total += randomPrice;
            boughtItems.push(item);
        }
        total = Number(total.toFixed(2));
        var currency = '£';
        var paymentMethod = 'card';
        var cardNumber = cardNumbers[randomId].toString();
        var misc = '';
        var category = { id: hashids.encode(1) };
        var receipt = new Receipt(timeOfPurchase, boughtItems, total, currency, paymentMethod, cardNumber, misc, store, category);
        receipts.push(receipt);
    }
    return receipts;
}
var arrayOfThings = JSON.stringify(generateData(), null, 4);
fs.writeFile('./receipts2.json', arrayOfThings, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved!');
});
// console.log(hashids.encode(219));
// console.log(hashids.encode(220));
