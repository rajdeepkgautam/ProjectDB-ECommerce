import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const [response , setResponse] = useState("")
  
  console.log(response);
  const [display, setDisplay] = useState(false);
  const handleChange = (e) => {
    const newCredentials = { ...credentials };
    newCredentials[e.target.name] = e.target.value;
    setCredentials(newCredentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://kusumakrishna524.herokuapp.com/Auth/signUp", credentials)
      .then((res) => setResponse(res.data));
      setDisplay(true);
  };
  return (
    <div className="Container">
      {display ? <h1 style={{color:"green"}}>{response}</h1> : null}
      <h5 id="exampleModalLabel">
      Register
      </h5>
      <btton className="btn btn-primary w-100 mb-2">
       <span className="fa fa-google me-2"></span>sign up with google
      </btton>
      <btton className="btn btn-primary w-100 mb-2">
        <span className="fa fa-facebook me-2"></span>sign up with facebook
      </btton>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            onChange={handleChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
