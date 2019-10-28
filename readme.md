# DiUS coding challenge - javascript

## Requirements
You need to have both npm(>=5.6) and node.js(>=9.11.1) installed on your machine to run this project

## Setup

After cloning the repository,
- Run `npm install` to install dependencies
- Run `npm run test` to run mocha-based tests

## Structure
- Checkout.js handles all logic to do with scanning, and checking out items to be added to the cart
- Catalog.js acts as a dummy database to facilitate retrieving catalog items
- Item.js denotes a specific item structure, mainly used for parsing data retrieved from database
- PricingRule denotes different types of pricing rules that can be added in order to set up conditions for discounts

## Sample input
Sample input fields are provided in `data.json`. These can be edited at will

## More on pricing rules
To make pricing rules as flexible as possible, a set of rules was made available for creating a pricing rule.
- Pricing rules can either be `Free-item` based i.e: an item in the list is made free, or:
- Pricing rules can be `Discount` based, an item/set of items in the list are discounted

#### Setting up a pricing rule

##### Free Item
```JSON
    {
      "type": "freeItem",
      "beneficiaryCondition": {
        "amount": 1,
        "sku": "mbp"
      },
      "prize": {
        "amount": 1,
        "sku": "vga"
      }
    }
```
The above denotes a free item pricing rule, with a `beneficiaryCondition`, and a `prize`
This pricing rule translates to: For every macbook pro that is purchased, the bundled vga cable will be made free.

Any of the contained fields can be changed, making the free item pricing rule as flexible as possible

| Beneficiary condition  | Object | Details |
| ------------- | ------------- |------- |
| amount  | Integer | Denotes the number of beneficiary items needed to have in order to satisfy the pricing rule condition
| sku  | String  | Denotes the sku of the beneficiary item

| Prize  | Object | Details |
| ------------- | ------------- |------- |
| amount  | Integer | Denotes the number of items to be rewarded when the beneficiary condition is met
| sku  | String  | Denotes the sku of the item to be rewarded


##### Discount item

The main difference between a discount item pricing rule and a free item pricing rule is that the discount pricing rule sets a prize for the same item that it sets up a condition for, whereas the free item pricing rule rewards the buyer with an item of different type, than the one the condition is set up on.

```JSON
    {
      "type": "discount",
      "beneficiaryCondition": {
        "amount": 3,
        "sku": "atv"
      },
      "prize": {
        "fraction": 1.0
      }
    }
```
The above denotes a discount pricing rule, with a `beneficiaryCondition`, and a `prize`
This specific pricing rule translates to: we're going to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only

Any of the contained fields can be changed, making the discount item pricing rule as flexible as possible

| Beneficiary condition  | Object | Details |
| ------------- | ------------- |------- |
| amount  | Integer | Denotes the number of beneficiary items needed to have in order to satisfy the pricing rule condition
| sku  | String  | Denotes the sku of the beneficiary item

| Prize  | Object | Details |
| ------------- | ------------- |------- |
| amount(optional)  | Integer | Denotes the price to be discounted from the beneficiary item, either this, or fraction could be used, to denote a perentage discount
| fraction(optional)  | Float (between 0 and 1) |
| bulk(optional)  | boolean | Denotes whether the discount should be applied to all items of given type, or only a single one




Naturally, each and every pricing rule would implement a `Pricing Rule` interface, however as interfaces aren't native to javascript, ensuring the classes have similar structure would do the job for now.

