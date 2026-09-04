import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmail] = useState("aarya@gmail.com");
  const [password, setPassword] = useState("Aarya@1234");

  const handleLogin = async () => {
    try {
     await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      }, {withCredentials: true});
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <label className="label" htmlFor="email">
                Email ID 
              </label>
              <input
                type="text"
                id="email"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center my-5">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
