export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Getter and Setter for name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    // Getter and Setter for Code
    get code() {
      return this._code;
    }
  
    set code(newCode) {
      if (typeof newCode !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = newCode;
    }
  
    get [Symbol.toStringTag]() {
      return `${this._code}`;
    }
  }