const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ( (hourOfDay === 00) && (minuteOfDay === 00)) {
    const taxAsDecimal =  parseFloat(tax) /100
    const startingAfterTax = salary - (salary * taxAsDecimal)
    const  Balance = startingAfterTax - transport - food - rent
    console.log('R', Balance.toFixed(2))
   } 

// .toFixed() --> fix the number of decimal digit to the number written inside the brakets.
// ParseFloat() -->It parses a string and returns a number.
// parseInt() -->It  parses a string an returns a whole number.