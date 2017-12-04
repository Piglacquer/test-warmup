var assert = require('assert');
var app = require('../app');

describe('#addTwoNumbers', ()=>{
  it('returns the sum of two numbers', ()=>{
    assert.Equal(app.addTwoNumbers((3, 5), 8)
    );
  });
  it('returns a sum when negative numbers are passed in', ()=>{
    assert.Equal(app.addTwoNumbers((-3, 6), 3)
    );
  });
  it('returns undefined when a string is passed in', ()=>{
    assert.Equal(app.addTwoNumbers(('strawberries', 6), undefined)
    );
  });
});
