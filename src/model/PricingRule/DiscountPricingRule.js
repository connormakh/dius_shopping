const Catalog = require('../Catalog');

class DiscountPricingRule {
  constructor(props) {
    const {
      beneficiaryCondition,
      prize,
    } = props;
    this.beneficiaryCondition = {
      amount: beneficiaryCondition.amount,
      item: Catalog.getItem(beneficiaryCondition.sku),
    };
    this.prize = {
      amount: prize.amount,
      bulk: prize.bulk,
      fraction: prize.fraction,
    };
    this.prize.amount = this.prize.amount || this.prize.fraction * this.beneficiaryCondition.item.price;
  }

  apply(items) {
    const amountConditionNumber = items
      .filter(item => item.sku === this.beneficiaryCondition.item.getSku())
      .length;
    let modifiedPrice = 0;
    const hasPrize = amountConditionNumber >= this.beneficiaryCondition.amount;
    if (hasPrize && this.prize.bulk) {
      modifiedPrice = this.prize.amount * amountConditionNumber;
    } else if (hasPrize) {
      modifiedPrice = this.prize.amount;
    }
    return -1 * modifiedPrice;
  }
}

module.exports = DiscountPricingRule;
