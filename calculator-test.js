
it('should calculate the monthly rate correctly', function () {
   const userInput  = { amount: 5000, years: 4, rate: 5};
expect(calculateMonthlyPayment(userInput)).toEqual('115.15')
});


it("should return a result with 2 decimal places", function() {
  const userInput  = { amount: 50000, years: 4, rate: 5};
  expect(calculateMonthlyPayment(userInput)).toEqual('1151.46')
});

/// etc
