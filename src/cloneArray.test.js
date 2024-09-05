const cloneArray = require("./cloneArray");

test("return a copy of the given array", () => {
  const array = ["A", "B", "C"];
  expect(cloneArray(array)).toEqual(array);
});
