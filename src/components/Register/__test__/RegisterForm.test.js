import React from "react"
import RegisterForm from "../RegisterForm";
import {render, fireEvent, screen} from "@testing-library/react";

describe("Login Form", () =>{
    test("rendered user input",()=>{
    const{getByTestId} = render(<RegisterForm/>);
    const inputUser= getByTestId("regEmail");
    expect(inputUser).toBeTruthy()
    })

    test('Able to change input', () => {

    const {getByTestId} = render(<RegisterForm/>);
    const input1 = getByTestId("regPass");
    fireEvent.change(input1, {
        target: { value: "test"}
   })
   expect(input1.value).toBe("test");
    })

    test("clicking login button", () =>{
    const {getByTestId} = render(<RegisterForm/>)
    const input3 = getByTestId("passConfirm")
    expect(input3).toBeTruthy()
    })

})