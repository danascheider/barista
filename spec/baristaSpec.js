var Barista = require(process.cwd() + '/lib/barista.js');

describe('Barista', function() {
  it('has a Model property', function() {
    expect(typeof Barista.Model).not.toBe('undefined');
  });
});