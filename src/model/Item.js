class Item {
  /**
   *
   * @param props
   * @param props.sku
   * @param props.name
   * @param props.price
   */
  constructor(props) {
    const {
      sku,
      name,
      price,
    } = props;

    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getPrettyPrice() {
    return `$${this.price}`;
  }

  getName() {
    return this.name;
  }

  getSku() {
    return this.sku;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }
}
module.exports = Item;
