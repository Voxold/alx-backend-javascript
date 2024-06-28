export default class Currency {
    constructor(code, name) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = code;
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = name;
    }
  
    // Getter and setter for code
    get code() {
      return this._code;
    }
  
    set code(newCode) {
      if (typeof newCode !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = newCode;
    }
  
    // Getter and setter for name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name msut be a string');
      }
      this._name = newName;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }