import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders Navbar correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
