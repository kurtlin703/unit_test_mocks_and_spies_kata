class Calculator {
  constructor() {}
  subtract() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      result -= arguments[i];
    }
    return result;
  }
}
let calculator = new Calculator();

module.exports = Calculator;
