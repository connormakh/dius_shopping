const { expect } = require('chai');
const Checkout = require('../../src/model/Checkout');
const { pricingRules } = require('../../data');
const { SKU } = require('../../src/codeMappings');
describe('A valid checkout', function () {
  it('Should yield 0 for an empty checkout', function () {
    const checkout = new Checkout();
    expect(checkout.total()).to.equal(0);
  });
  it('Should yield a correct total for items with no pricing rule', function () {
    const checkout = new Checkout();
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.MACBOOK);
    checkout.scan(SKU.TV);
    expect(checkout.total()).to.equal(549.99+1399.99+109.50);
  });
  it('Should yield a correct total for items with pricing rules in place - atv, atv, atv, vga', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.VGA);
    expect(checkout.total()).to.equal(249);
  })
  it('Should yield a correct total for items with pricing rules in place - atv, atv, atv, vga - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.VGA);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    expect(checkout.total()).to.equal(249);
  });
  it('Should yield a correct total for items with pricing rules in place - atv, atv, atv, vga - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.VGA);
    checkout.scan(SKU.TV);
    expect(checkout.total()).to.equal(249);
  });
  it('Should yield a correct total for items with pricing rules in place - atv, ipd, ipd, atv, ipd, ipd, ipd', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    expect(checkout.total()).to.equal(2718.95);
  });
  it('Should yield a correct total for items with pricing rules in place - atv, ipd, ipd, atv, ipd, ipd, ipd - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    expect(checkout.total()).to.equal(2718.95);
  });
  it('Should yield a correct total for items with pricing rules in place - atv, ipd, ipd, atv, ipd, ipd, ipd - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.TV);
    checkout.scan(SKU.TV);
    expect(checkout.total()).to.equal(2718.95);
  });
  it('Should yield a correct total for items with pricing rules in place - mbp, vga, ipd', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.MACBOOK);
    checkout.scan(SKU.VGA);
    checkout.scan(SKU.IPAD);
    expect(checkout.total()).to.equal(1949.98);
  });
  it('Should yield a correct total for items with pricing rules in place - mbp, vga, ipd - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.VGA);
    checkout.scan(SKU.MACBOOK);
    checkout.scan(SKU.IPAD);
    expect(checkout.total()).to.equal(1949.98);
  });
  it('Should yield a correct total for items with pricing rules in place - mbp, vga, ipd - Considering no specific order', function () {
    const checkout = new Checkout(pricingRules);
    checkout.scan(SKU.VGA);
    checkout.scan(SKU.IPAD);
    checkout.scan(SKU.MACBOOK);
    expect(checkout.total()).to.equal(1949.98);
  });
});
