// Import necessary packages and components
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App', () => {
  const { container } = render(<App />);
  // Assert that the component is present in the rendered output
  expect(container.firstChild).toBeInTheDocument();
});
