import calculate from '../logic/calculate';

describe('calculate function', () => {
  test("returns initial state when 'AC' button is clicked", () => {
    const result = calculate({ total: '5', next: '10', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('handles decimal point correctly when "." button is clicked', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  test('performs addition when "+" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+');
    expect(result).toEqual({ total: '15', next: null, operation: '+' });
  });

  test('performs subtraction when "-" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '-' }, '-');
    expect(result).toEqual({ total: '5', next: null, operation: '-' });
  });

  test('performs modulo when "%" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '%' }, '%');
    expect(result).toEqual({ total: '0', next: null, operation: '%' });
  });

  test('changes sign when "+/-" button is clicked', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });
});
