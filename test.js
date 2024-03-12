
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Import the function sum from the app.js file
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14,9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("one dollar should equal 146.26 yen", function() {

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected); 
})

test("one yen should equal to 0.0056 pounds", function() {

    const pound = fromYenToPound(1);
    const expected = (1 / oneEuroIs.JPY) * oneEuroIs.GBP;
    
    expect(pound).toBe(expected);
})