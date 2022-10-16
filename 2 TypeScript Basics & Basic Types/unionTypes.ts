type Combinable = number | string;
type conversionDescriptor = "as-number" | "as-text";
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: conversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}
const combineAges = combine(30, 26, "as-number");
const combinedStringAges = combine("20", "30", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Sushant", " Aryal", "as-text");
console.log(combineAges);
console.log(combinedNames);
