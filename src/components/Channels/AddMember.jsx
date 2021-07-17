import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { addMember } from "../../API/useFetchPost";
import useFetchGet from "../../API/useFetchGet";

const AddMember = () => {
  const { id } = useParams();
  const { headers } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
  });
  const [users, setUsers] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
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
      addMember(headers, parseInt(id), found.id).then((result) => {
        if (!result.data) {
          alert(result.errors);
        } else {
          alert("User is added to this channel!");
        }
      });
    }
  };
  return (
    <div className="add-member-container">
      <form className="add-member-form" onSubmit={handleSubmit}>
        <div className="add-member-content">
          <input
            className="add-member-input"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Add more members"
            required
            value={values.email}
            onChange={handleChange}
          />
          <button type="submit">
            <i className="fas fa-plus" title="Add member"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
