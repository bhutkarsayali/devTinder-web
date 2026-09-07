import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmail] = useState("aarya@gmail.com");
  const [password, setPassword] = useState("Aarya@1234");
  const [firstName, setFirstName] = useState("Aarya");
  const [lastName, setLastName] = useState("Bhutkar");
  const [photoURL, setPhotoURL] = useState("https://www.freepik.com/free-photos-vectors/ai-girl-cartoon/2");

  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );

      // console.log(res.data);

      dispatch(addUser(res.data));

      return navigate("/");
    } catch (err) {
      console.error(err.response?.data);
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, photoURL, emailId, password },
        { withCredentials: true },
      );

      console.log(res.data);

      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      // console.error(err.response?.data);
      setError(
        err.response?.data?.message ||
          err.response?.data ||
          "Something went wrong",
      );
    }
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <fieldset className="fieldset">
                  <label className="label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input input-bordered w-full max-w-xs"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <label className="label" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input input-bordered w-full max-w-xs"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                <label className="label" htmlFor="photoURL">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  className="input input-bordered w-full max-w-xs"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </fieldset>
              </>
            )}
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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center my-5">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <button
            className="btn btn-secondary btn-link"
            onClick={() => setIsLoginForm((prev) => !prev)}
          >
            {isLoginForm
              ? "New User ?  Sign Up Here"
              : "Existing User? Login Here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
