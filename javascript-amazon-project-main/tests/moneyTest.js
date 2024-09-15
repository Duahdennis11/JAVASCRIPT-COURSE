import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('Convert Cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
}
else {
  console.log('Failed');
}

console.log("Works with 0");

if (formatCurrency(0) === '0.00') {
  console.log('Passed');
}
else {
  console.log('Failed');
}

console.log('Round up to the nearest cents');

if (formatCurrency(2000.5) === '20.01') {
  console.log('Passed');
}
else {
  console.log('Failed');
}