import { render } from '@testing-library/react';
import OperatorBtns from '../components/OperatorBtns';

test('renders operator buttons correctly', () => {
  const handleButtonClick = jest.fn();
  const { container } = render(
    <OperatorBtns handleButtonClick={handleButtonClick} />,
  );
  expect(container).toMatchSnapshot();
});
