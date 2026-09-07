import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectioSlice";

const Connections = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addConnections(res?.data?.data));
      console.log("connections=======", connections);
    } catch (err) {
      setError(() => err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return <p className="text-red-500">{error}</p>;
  }

  if (connections.length === 0) {
    return <h2 className="text-bold text-2xl">No Connection Found!!</h2>;
  }

  return (
    <div className="flex justify-center flex-col my-10">
      <h2 className="text-bold text-2xl text-center">Connections</h2>
      {error}
      <div>
        {connections &&
          connections.map((connection) => {
            const { firstName, lastName, photoURL, age, about, gender } =
              connection;
            return (
              <div className="card card-side bg-base-300 shadow-sm w-100 my-10 mx-10">
                <figure className="w-50 h-50">
                  <img src={photoURL} alt="photo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                  <p>{age && gender && <span>{age + " years old, " + gender}</span>}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Connections;
