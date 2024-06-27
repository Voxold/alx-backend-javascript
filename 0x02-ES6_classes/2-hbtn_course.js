export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = Array.isArray(students) ? students : [];
  
      // Verifying tyoes
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      if (!Array.isArray(students)) {
        throw new TypeError('Students must be an array');
      }
    }
  
    // Getter and setter methods for name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    // Getter and Setter methods for length
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }
  
    // Getter and Setter methods for students
    get studenst() {
      return this._students;
    }
  
    set students(newStudents) {
      if (!Array.isArray(newStudents)) {
        throw new TypeError('Students must be an array');
      }
      this._students = newStudents;
    }
  }