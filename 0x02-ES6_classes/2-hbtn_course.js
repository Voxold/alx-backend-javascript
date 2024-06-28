export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (length.constructor !== Number) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (students.constructor !== Array || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
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

  get length() {
    return this._length;
  }

  set length(length) {
    if (length.constructor !== Number) {
      throw new TypeError('TypeError: Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students.constructor !== Array || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}