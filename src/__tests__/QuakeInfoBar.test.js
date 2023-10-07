// Import necessary packages and components
import React from 'react';
import { render } from '@testing-library/react';
import QuakeInfoBar from '../QuakeInfoBar';

test('renders QuakeInfoBar', () => {
  const { container } = render(<QuakeInfoBar />);
  // Assert that the component is present in the rendered output
  expect(container.firstChild).toBeInTheDocument();
});
