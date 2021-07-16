import React from "react"
import App from "../../../App";
import {render, fireEvent, screen} from "@testing-library/react";

describe("Login Form", () =>{
    test("rendered user input",()=>{
    const{getByTestId} = render(<App/>);
    const inputUser= getByTestId("email");
    expect(inputUser).toBeTruthy()
    })

    test('Able to change input', () => {

    const {getByTestId} = render(<App/>);
    const inputEl = getByTestId("password");
    fireEvent.change(inputEl, {
        target: { value: "test"}
   })
   expect(inputEl.value).toBe("test");
    })

    test("clicking login button", () =>{
    const {getByTestId} = render(<App/>)
    const loginBtn = getByTestId("loginBtn")
    expect(loginBtn).toBeTruthy()
    })

})