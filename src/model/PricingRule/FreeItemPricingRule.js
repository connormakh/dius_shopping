const Catalog = require('../Catalog');

class FreeItemPricingRule {
  constructor(props) {
    const {
      beneficiaryCondition,
      prize,
    } = props;
    this.beneficiaryCondition = {
      amount: beneficiaryCondition.amount,
        sku: beneficiaryCondition.sku,
    };
    this.prize = {
      amount: prize.amount,
        item: Catalog.getItem(prize.sku),
    };
  }

  apply(items) {
    const amountConditionNumber = items
      .filter(item => item.getSku() === this.beneficiaryCondition.sku)
      .length;
    let priceReduction = 0;
    let numberOfPrizes = Math.floor(amountConditionNumber / this.beneficiaryCondition.amount);
    while (numberOfPrizes > 0) {
      numberOfPrizes--;
      priceReduction += this.prize.item.getPrice();
    }
    return -1 * priceReduction;
  }
}
module.exports = FreeItemPricingRule;
