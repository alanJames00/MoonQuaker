// Import necessary packages and components
import React from 'react';
import { render } from '@testing-library/react';
import QuakeWave from '../QuakeWave';

test('renders QuakeWave', () => {
  const { container } = render(<QuakeWave />);
  // Assert that the component is present in the rendered output
  expect(container.firstChild).toBeInTheDocument();
});
