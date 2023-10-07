// Import necessary packages and components
import React from 'react';
import { render } from '@testing-library/react';
import ControlPanel from '../ControlPanel';

test('renders ControlPanel', () => {
  const { container } = render(<ControlPanel />);
  // Assert that the component is present in the rendered output
  expect(container.firstChild).toBeInTheDocument();
});
