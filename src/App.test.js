import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('first test', () => {
  const { getByText } = render(<App />);
  const text = getByText('Welcome To Quiz App');
  expect(text).toBeInTheDocument();
});
