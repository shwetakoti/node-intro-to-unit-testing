const expect = require('chai').expect ;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer',function(){

  it('should check if number is divisible by 5 or 3 or both',function(){
    const normalCases = [
      {a: 5, expected: 'buzz'},
      {a: 15,  expected: 'fizz-buzz'},
      {a: -5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: -3, expected: 'fizz'},
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    })
  })

  it('should throw an error if input is not of type number',function()
  {
    const badInputs = ['a','thinkful']
    badInputs.forEach(function(input)
    {
      expect(function()
      {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
 });

/*  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });

  });*/

});
