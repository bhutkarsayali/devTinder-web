import { useState } from "react";
import UsrCard from "./UsrCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  console.log(user);

  const saveProfile = async () => {
    setError("");
    try {
      console.log("Helllo");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoURL, age, about, gender },
        { withCredentials: true },
      );
      // const res = await axios.patch(BASE_URL + "/profile/edit", {
      //   firstName,
      //   lastName,
      //   photoURL,
      //   age,
      //   about,
      //   gender,
      // });
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-center items-center my-10">
        <div className="card card-border bg-base-200 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
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
              <fieldset className="fieldset">
                <label className="label" htmlFor="age">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label" htmlFor="about">
                  About
                </label>
                <textarea
                  type="text"
                  id="about"
                  className="input input-bordered w-full max-w-xs"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label" htmlFor="gender">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  className="input input-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center my-5">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UsrCard user={{ firstName, lastName, photoURL, age, about, gender }} />
      {showToast && (
        <div>
          <div className="toast bottom-20">
            <div className="alert alert-info">
              <span>Profile Saved Successfully</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
