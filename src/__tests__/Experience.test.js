// Import necessary packages and components
import React from 'react';
import { render } from '@testing-library/react';
import Experience from '../Experience';

test('renders ControlPanel', () => {
  const { container } = render(<Experience />);
  // Assert that the component is present in the rendered output
  expect(container.firstChild).toBeInTheDocument();
});
