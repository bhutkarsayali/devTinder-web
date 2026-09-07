import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequests = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      setError(() => err.message);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      console.log("Requests ==", res?.data?.data);
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      setError(() => err.message);
      console.log(err.messsage);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return <p className="text-red-500">{error}</p>;
  }

  if (requests.length === 0) {
    return (
      <h2 className="text-bold text-2xl flex justify-center">
        No Requests Found!!
      </h2>
    );
  }

  return (
    <div className="flex justify-center flex-col my-10">
      <h2 className="text-bold text-2xl text-center">Requests Received</h2>
      <p className="text-red-500">{error}</p>
      <div>
        {requests &&
          requests.map((req) => {
            const { _id, firstName, lastName, photoURL, age, about, gender } =
              req.fromUserId;
            return (
              <div
                key={_id}
                className="card card-side bg-base-300 shadow-sm w-100 my-10 mx-10"
              >
                <figure className="w-50 h-50">
                  <img src={photoURL} alt="photo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                  <p>
                    {age && gender && (
                      <span>{age + " years old, " + gender}</span>
                    )}
                  </p>
                  <div className="flex card-actions justify-between flex-nowrap">
                    <button
                      className="btn btn-secondary"
                      onClick={() => reviewRequests("accepted", req._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => reviewRequests("rejected", req._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Requests;
