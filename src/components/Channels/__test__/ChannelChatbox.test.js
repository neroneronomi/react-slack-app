import React from "react"
import ChannelChatbox from "../ChannelChatbox";
import {render, fireEvent} from "@testing-library/react";
import ChannelDetails from "../ChannelDetails";

describe("Input component", () =>{
    test("rendered input",()=>{
    const{getByTestId} = render(<ChannelChatbox/>);
    const inputEl= getByTestId("chatBox");
    expect(inputEl).toBeTruthy()
    })

    test('Renders channelchatbox', () => {

    const {getByTestId} = render(<ChannelChatbox/>);
    const inputEl = getByTestId("chatBox");
    fireEvent.change(inputEl, {
        target: { value: "test"}
   })
   expect(inputEl.value).toBe("test");
    })

    // test('from chatbox to channelfeed', () => {
    //     const {getByTestId} = render(<ChannelDetails/>);
    //     const messageSent = getByTestId("message");
    //     const inputEl= getByTestId("chatBox");
    //     const btnEl = getByTestId("btn")
    //     fireEvent.change(inputEl, {
    //         target: {value: "test"}
    //     })
    //     fireEvent.click(btnEl)
    //     expect(messageSent).toHaveTextContent("test");
    // })

})