import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Renders signin message', () => {

  const {getByTestId} = render(<App/>);
  const headerEl = getByTestId("signin");
  expect(headerEl.textContent).toBe("Sign in to your workspace")
})

    test('from chatbox to channelfeed', async () => {
        const {getByTestId} = render(<App/>);
        const user= getByTestId("email");
        const pass = getByTestId("password");
        const btn = getByTestId("loginBtn")
        fireEvent.change(user, {
            target: {value: "johnparreno@gmail.com"}
        })

        fireEvent.change(pass, {
          target: {value: "p!x!3dust"}
      })
        fireEvent.click(btn)

        await screen.findByText('johnparreno@gmail.com')
    })