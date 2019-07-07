import {generatePowerSetWithoutEmptySet} from "../src/generatePowerSetWithoutEmptySet";
import sinon from 'sinon';

describe('generatePowerSetWithoutEmptySet', () => {
  it('returns expected valutes in any order', () => {
    const expectedOutput = [ [1],[2],[3],[1,2],[1,3],[2,3],[1,2,3] ];
    const actualOutput = generatePowerSetWithoutEmptySet([1,2,3]);
    expect(actualOutput).toContain([1]);
    expect(actualOutput).toContain([2]);
    expect(actualOutput).toContain([3]);
    expect(actualOutput).toContain([1,2]);
    expect(actualOutput).toContain([1,3]);
    expect(actualOutput).toContain([2,3]);
    expect(actualOutput).toContain([1,2,3]);
  }),
  it('return in smallest to largest order', () => {
    const expectedOutput = [ [1],[2],[3],[1,2],[1,3],[2,3],[1,2,3] ];
    const actualOutput = generatePowerSetWithoutEmptySet([1,2,3]);
    expect(actualOutput).toEqual(expectedOutput);
  });
});