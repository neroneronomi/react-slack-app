import { useEffect, useState, useRef } from "react";

const ChannelFeed = ({ headers, id }) => {
  const [messages, setMessages] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        // console.log("Enter key was pressed. Run your function.");
        // event.preventDefault();
        scrollToBottom();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    fetch(
      `http://206.189.91.54//api/v1/messages?receiver_id=${id}&receiver_class=Channel`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data.data.reverse());
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });         
    // eslint-disable-next-line
  }, [messages]);
  return (
    <>
         <div ref={messagesEndRef} />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        messages.map((message, index) => (
          <div className="message-preview" key={index}>
            <div className="mymessages">
              <div className="message-details">
                <i className="fas fa-user"></i>
                <h5>{message.sender.uid}</h5>
                <h6>{message.created_at.substr(11, 5)}</h6>
              </div>
              <span>{message.body}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default ChannelFeed;
