import { useState } from "react";
import { sendMessage } from "../../API/useFetchPost";
import "./ContactDetails.scss";

const ContactChatbox = ({ recipient, headers }) => {
  const placeholder = `Message ${recipient.uid}`;
  const [values, setValues] = useState({
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(headers, recipient.id, "User", values.body);
    setValues({ body: "" });
  };
  return (
    <>
      <form className="send-message-form" onSubmit={handleSubmit}>
        <div className="send-message-content">
          <input
            className="send-message-input"
            type="text"
            name="body"
            autoComplete="off"
            placeholder={placeholder}
            required
            value={values.body}
            onChange={handleChange}
          />
        </div>
        <button className="send-message-btn" type="submit">
          <i className="fas fa-paper-plane" title="Send"></i>
        </button>
      </form>
    </>
  );
};

export default ContactChatbox;
