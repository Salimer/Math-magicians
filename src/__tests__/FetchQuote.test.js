import { render } from '@testing-library/react';
import FetchQuote from '../components/FetchQuote';

test('renders FetchQuote correctly', () => {
  const { conqatiner } = render(
    <FetchQuote />,
  );
  expect(conqatiner).toMatchSnapshot();
});
