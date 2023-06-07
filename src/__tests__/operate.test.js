import operate from '../logic/operate';

describe('operate function', () => {
  test('performs addition correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toMatchSnapshot();
  });

  test('performs subtraction correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toMatchSnapshot();
  });

  test('performs multiplication correctly', () => {
    const result = operate('4', '6', 'x');
    expect(result).toMatchSnapshot();
  });

  test('performs division correctly', () => {
    const result = operate('10', '2', '÷');
    expect(result).toMatchSnapshot();
  });
});
