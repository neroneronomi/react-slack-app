import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import useFetchGet from "../../API/useFetchGet";

const FindUser = ({ close }) => {
  const { headers, getContacts } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const history = useHistory();
  const [users, setUsers] = useState(null);
  const { data, isPending } = useFetchGet(
    "http://206.189.91.54//api/v1/users",
    headers
  );
  if (data === null) {
    console.log(isPending);
  } else if (users === null) {
    setUsers(data.data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = users.find((user) => user.uid.includes(values.email));
    if (found === undefined) {
      alert("Email is not yet registered");
    } else {
      getContacts(found);
      setValues({ email: "" });
      history.push(`/client/messages/${found.id}`);
    }
    close();
  };
  return (
    <div className="find-user-container">
      <form className="find-user-form" onSubmit={handleSubmit}>
        <div className="find-user-content">
          <label htmlFor="find-user-input">
            <strong>Email Address</strong>
          </label>
          <input
            className="find-user-input"
            type="email"
            name="email"
            // autoComplete="off"
            placeholder="e.g. janedoe@workspace.com"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <button className="find-user-btn" type="submit">
            Message Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindUser;
