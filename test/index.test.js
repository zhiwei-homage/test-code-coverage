const assert = require('assert');
const { getPrintNumber } = require('../index');

describe('Test index.js', function () {
    it('Test getPrintNumber', function () {
        const printNumber = getPrintNumber(1);
        assert.equal(printNumber, 'One');
    });
});
