import {removeTooBig} from '../src/removeTooBig';
import sinon from 'sinon';

describe('removeTooBig', () => {
  it('returns only entries less than or equal to upperLimit', () => {
    const expectedValue = [2,4,6,8,10];
    const actual = removeTooBig([2,4,6,8, 10, 12, 14], 10);
    expect(actual).toEqual(expectedValue);
  });
});