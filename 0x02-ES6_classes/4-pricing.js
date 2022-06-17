import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._curency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._curency = newCurrency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof (amount) === 'number') && (typeof (conversionRate) === 'number')) {
      return amount * conversionRate;
    }
    throw new TypeError('Arguments must be numbers');
  }
}
