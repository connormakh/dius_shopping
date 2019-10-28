const { pricingRules } = require('../data');
const Checkout = require('./model/Checkout');

const checkout = new Checkout(pricingRules);
// checkout.scan('vga');
// checkout.scan('atv');
// checkout.scan('atv');
// checkout.scan('atv');

// checkout.scan('atv');
// checkout.scan('atv');
// checkout.scan('ipd');
// checkout.scan('ipd');
// checkout.scan('ipd');
// checkout.scan('ipd');
// checkout.scan('ipd');

checkout.scan('vga');
checkout.scan('mbp');
checkout.scan('ipd');

console.log(checkout.total());

