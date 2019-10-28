const { SKU } = require('../codeMappings');
const Item = require('./Item');
class Catalog {
  static getItems() {
    return {
    [SKU.IPAD]: { sku: SKU.IPAD, name: "Super iPad", price: 549.99 },
    [SKU.MACBOOK]: { sku: SKU.MACBOOK, name: "MacBook Pro", price: 1399.99 },
    [SKU.TV]: { sku: SKU.TV, name: "Apple TV", price: 109.50 },
    [SKU.VGA]: { sku: SKU.VGA, name: "VGA adapter", price: 30.00 }
    }
  }
  static getItem(sku) {
    const item = Catalog.getItems()[sku];
    if (!item) throw new Error('item_not_found')
    return new Item(item);
  }
}
module.exports = Catalog;
