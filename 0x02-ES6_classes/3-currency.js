export default class Currency {
  constructor(code, name) {
    if (code.constructor !== String) {
      throw new TypeError('Code must be a string');
    }
    this._code = code;

    if (name.constructor !== String) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (code.constructor !== String) {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}