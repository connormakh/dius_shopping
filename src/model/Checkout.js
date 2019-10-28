const catalog = require('./Catalog');
const FreeItemPricingRule = require('./PricingRule/FreeItemPricingRule');
const DiscountPricingRule = require('./PricingRule/DiscountPricingRule');

class Checkout {
  constructor(pricingRules = []) {
    this.items = [];
    this.pricingRules = pricingRules.map(
      (pr => (pr.type === 'freeItem' && new FreeItemPricingRule(pr)) || (pr.type === 'discount' &&
        new DiscountPricingRule(pr)) || null))
      .filter(item => item);
  }

  /**
   * Runtime: O(1)
   * @param sku
   */
  scan(sku) {
    const item = catalog.getItem(sku);
    if (!item) throw new Error('item_not_found');
    this.items.push(item);
  }

  total() {
    let finalPrice = this.items.reduce((a, b) => a + b.price, 0);
    for (const pricingRule of this.pricingRules) {
      finalPrice += pricingRule.apply(this.items);
    }
    return finalPrice;
  }
}

module.exports = Checkout;
