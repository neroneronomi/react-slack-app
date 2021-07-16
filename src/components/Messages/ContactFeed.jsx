import { useEffect, useState, useRef } from "react";

const ContactFeed = ({ headers, id }) => {
  const [messages, setMessages] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null)
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
  // }
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    fetch(
      `http://206.189.91.54//api/v1/messages?receiver_id=${id}&receiver_class=User`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });
      // scrollToBottom()
    // eslint-disable-next-line
  }, [messages]);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        messages.data.map((message, index) => (
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
        <div ref={messagesEndRef} />
    </>
  );
};

export default ContactFeed;
