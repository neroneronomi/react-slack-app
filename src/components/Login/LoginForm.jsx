import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { loginUser } from "../../API/useFetchPost";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./LoginForm.scss";

const LoginForm = () => {
  const { getHeaders } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values)
      .then((data) => {
        getHeaders(data);
        history.push("/client");
        // alert("You are logged in.");
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login-container">
      <header className="login-header">
        <div className="left-col"></div>
        <div className="center-col">
          <img src={logo} alt="Slack Logo" title="Slack Logo" height="34"></img>
        </div>
        <div className="right-col"></div>
      </header>
      <h1 className="login-heading">Sign in to your workspace</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-content">
          <input
            className="login-input"
            type="email"
            name="email"
            // autoComplete="off"
            placeholder="Enter Email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="login-content">
          <input
            className="login-input"
            type="password"
            name="password"
            // autoComplete="off"
            placeholder="Enter Password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-btn" type="submit">
          Continue
        </button>
        <div className="signup-caption">
          No account yet?{" "}
          <div onClick={() => history.push("/register")}>Sign up here</div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
