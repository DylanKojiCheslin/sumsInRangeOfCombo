import {removeTooBig} from '../src/removeTooBig';
import sinon from 'sinon';

describe('onlyInRange', () => {
  it('returns only entries inside the range', () => {
    const expectedValue = [2,4,6,8,10];
    const actual = removeTooBig([2,4,6,8, 10, 12, 14], 10, 6);
    expect(actual).toEqual(expectedValue);
  });
});