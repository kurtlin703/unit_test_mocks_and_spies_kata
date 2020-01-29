let Calculator = require("../src/unit_test_mocks_and_spies_kata");
let calculator = new Calculator();

describe("mock test calculator", function() {
  it("checks if the the subtract() function has been called", () => {
    spyOn(calculator, "subtract");

    calculator.subtract();

    expect(calculator.subtract).toHaveBeenCalled();
  });
  it("checks if the subtract() function has been called twice", () => {
    spyOn(calculator, "subtract");
    calculator.subtract();
    calculator.subtract();

    expect(calculator.subtract).toHaveBeenCalledTimes(2);
  });
  it("checks if the subtract() function has been called with arguements", () => {
    spyOn(calculator, "subtract");
    calculator.subtract(10, 5);
    expect(calculator.subtract).toHaveBeenCalledWith(10, 5);
  });
});
