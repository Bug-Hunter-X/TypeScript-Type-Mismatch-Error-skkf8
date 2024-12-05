function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct usage

let num1: any = 1;
let num2: any = "2";

//Solution 1: Using Type Guard
if (isNumber(num2)) {
  let result2 = add(num1, num2);
} else {
  console.log('Error: Second argument is not a number');
}

//Solution 2: Using Type Assertion (Less Safe)
let result3 = add(num1, num2 as number); //Use with caution as it can lead to runtime errors if num2 is not a number
console.log(result1, result3); //Outputs 3, NaN if num2 is not a number