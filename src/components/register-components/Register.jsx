import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    isLogin: false,
  });
  const [isTouched, setIsTouched] = useState({
    full_name: false,
    email: false,
    password: false,
    phone: false,
  });
  const [isSubmitFail, setIsSubmitFail] = useState(false);

  const isFullNameValid = formData.full_name !== "";
  const isEmailValid = formData.email.includes("@");
  const isPasswordValid = formData.password.length > 7;
  const isPhoneValid = formData.phone.length > 9;
  const hasErrors =
    !isFullNameValid && !isEmailValid && !isPasswordValid && !isPhoneValid;

  const changeFullNameHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, full_name: e.target.value }));
  };

  const blurFullNameHandler = (e) => {
    setIsTouched((prevState) => ({ ...prevState, full_name: true }));
  };

  const changeEmailHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, email: e.target.value }));
  };

  const blurEmailHandler = (e) => {
    setIsTouched((prevState) => ({ ...prevState, email: true }));
  };

  const changePasswordHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, password: e.target.value }));
  };

  const blurPasswordHandler = (e) => {
    setIsTouched((prevState) => ({ ...prevState, password: true }));
  };

  const changePhoneHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, phone: e.target.value }));
  };

  const blurPhoneHandler = (e) => {
    setIsTouched((prevState) => ({ ...prevState, phone: true }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (hasErrors) {
      setIsSubmitFail(true);
      return;
    }

    if (localStorage.getItem("user_accounts")) {
      const data = JSON.parse(localStorage.getItem("user_accounts"));
      const result = data.find((item) => item.email === formData.email);
      if (result) return;
      const userList = [...data, formData];
      localStorage.setItem("user_accounts", JSON.stringify(userList));
    } else {
      localStorage.setItem("user_accounts", JSON.stringify([formData]));
    }
    window.alert("Register successful!");
    navigate("/login");
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrap_form}>
        <h1 className={classes.heading}>Sign Up</h1>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {isSubmitFail && <p className={classes.red}>Something invalid!</p>}
          <div>
            {isTouched.full_name && !isFullNameValid && (
              <p className={classes.red}>Full Name is invalid</p>
            )}
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.full_name}
              onChange={changeFullNameHandler}
              onBlur={blurFullNameHandler}
            />
          </div>
          <div>
            {isTouched.email && !isEmailValid && (
              <p className={classes.red}>Email is invalid</p>
            )}
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={changeEmailHandler}
              onBlur={blurEmailHandler}
            />
          </div>
          <div>
            {isTouched.password && !isPasswordValid && (
              <p className={classes.red}>Password is invalid</p>
            )}
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={changePasswordHandler}
              onBlur={blurPasswordHandler}
            />
          </div>
          <div>
            {isTouched.phone && !isPhoneValid && (
              <p className={classes.red}>Phone is invalid</p>
            )}
            <input
              type="text"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={changePhoneHandler}
              onBlur={blurPhoneHandler}
            />
          </div>
          <button className={classes.btn}>SIGN UP</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
