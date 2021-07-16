import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders signin message', () => {

  const {getByTestId} = render(<App/>);
  const headerEl = getByTestId("signin");
  expect(headerEl.textContent).toBe("Sign in to your workspace")
})