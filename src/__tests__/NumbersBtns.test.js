import { render } from '@testing-library/react';
import NumbersBtns from '../components/NumbersBtns';

test('renders numbers buttons correctly', () => {
  const handleButtonClick = jest.fn();
  const { container } = render(
    <NumbersBtns handleButtonClick={handleButtonClick} />,
  );

  expect(container).toMatchSnapshot();
});
