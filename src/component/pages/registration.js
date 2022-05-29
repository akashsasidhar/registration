import React, { useState } from "react";
import {
  isEmailValid,
  isMobileNumberValid,
  isNameValid,
} from "../../helpers/validate";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const customCentered = {
    alignItems: "center",
    minHeight: "100vh",
    margin: "0 auto",
    maxWidth: "50%",
  };
  const checkFirstName = async () => {
    const nameValid = isNameValid(firstName);
    if (!nameValid) {
      setFirstNameErr("Please enter a valid first name");
    } else {
      setFirstNameErr("");
    }
  };
  const checkLastName = async () => {
    const nameValid = isNameValid(lastName);
    if (!nameValid) {
      setLastNameErr("Please enter a valid last name");
    } else {
      setLastNameErr("");
    }
  };
  const checkEmail = async () => {
    const emailValid = isEmailValid(email);
    if (!emailValid) {
      setEmailErr("Please enter a valid email");
    } else {
      setEmailErr("");
    }
  };
  const checkMobile = async () => {
    const mobileValid = isMobileNumberValid(mobile);
    if (!mobileValid) {
      setMobileErr("Please enter a valid mobile number");
    } else {
      setMobileErr("");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      fistName: firstName,
      lastName: lastName,
      emailId: email,
      mobileNo: mobile,
      countryName: country,
      cityName: city,
      stateName: state,
      userMessage: message,
    };
    if (!firstNameErr && !lastNameErr && !emailErr && !mobileErr)
      console.log(data);
  };
  return (
    <>
      <div className="container ">
        <div className=" row d-flex" style={customCentered}>
          <div className="col-auto">
            <h3>Registration Form</h3>
            <form className="" onSubmit={onSubmit}>
              <div className="row mb-3">
                <div className="row g-1">
                  <div className="col">
                    <input
                      type="text"
                      className={`form-control ${
                        firstNameErr ? "is-invalid" : ""
                      }`}
                      placeholder="First Name"
                      aria-label="First Name"
                      name="firstName"
                      onBlur={checkFirstName}
                      autoComplete="off"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    {firstNameErr ? (
                      <span className="input-error-message" key={firstNameErr}>
                        {firstNameErr}
                      </span>
                    ) : null}
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className={`form-control ${
                        lastNameErr ? "is-invalid" : ""
                      }`}
                      placeholder="Last Name"
                      aria-label="Last Name"
                      name="lastName"
                      onBlur={checkLastName}
                      autoComplete="off"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    {lastNameErr ? (
                      <span className="input-error-message" key={lastNameErr}>
                        {lastNameErr}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className=" form-group g-2">
                  <input
                    type="text"
                    className={`form-control ${emailErr ? "is-invalid" : ""}`}
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={checkEmail}
                    required
                  />
                  {emailErr ? (
                    <span className="input-error-message" key={emailErr}>
                      {emailErr}
                    </span>
                  ) : null}
                </div>

                <div className="form-group g-2">
                  <input
                    type="text"
                    className={`form-control ${mobileErr ? "is-invalid" : ""}`}
                    placeholder="Mobile Number"
                    aria-label="mobile"
                    name="mobile"
                    autoComplete="off"
                    onChange={(e) => setMobile(e.target.value)}
                    onBlur={checkMobile}
                  />
                  {mobileErr ? (
                    <span className="input-error-message" key={mobileErr}>
                      {mobileErr}
                    </span>
                  ) : null}
                </div>
                <div className="row g-1">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      aria-label="Country"
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      aria-label="City"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row g-1">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      aria-label="State"
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      aria-label="Message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group g-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
