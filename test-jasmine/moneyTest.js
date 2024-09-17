import { formatCurrency } from '../';

describe('test suite: formatCurrency', () => {
  it('Convert cents into dollars', () => {
    expect(formatCurrency(2095).toEqual('20.95'))
  });
});