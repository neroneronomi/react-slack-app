import React, { useState } from "react";
import { registerUser } from "../../API/useFetchPost";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password_confirmation: "",
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

    registerUser(values)
      .then((result) => {
        if (result.status === "error") {
          alert(result.errors.full_messages);
        } else {
          alert("Account created.");
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="register-container">
      <header className="register-header">
        <div className="left-col"></div>
        <div className="center-col">
          <img src={logo} alt="Slack Logo" title="Slack Logo" height="34"></img>
        </div>
        <div className="right-col"></div>
      </header>
      <h1 className="register-heading">Create your workspace</h1>
      <div className="register-subheading">
        We suggest using the <b>email address you use at work.</b>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-content">
          <input
            className="register-input"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-content">
          <input
            className="register-input"
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="register-content">
          <input
            className="register-input"
            type="password"
            name="password_confirmation"
            autoComplete="off"
            placeholder="Confirm Password"
            required
            value={values.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
