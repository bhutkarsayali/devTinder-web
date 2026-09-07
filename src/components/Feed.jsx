import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UsrCard from "./UsrCard";

const Feed = () => {
  const [err, setError] = useState("");
  const dispatch = useDispatch();
  const feedInStore = useSelector((store) => store.feed);

  useEffect(() => {
    const getFeed = async () => {
      // If feed items are already in Redux, skip fetching
      if (feedInStore && feedInStore.length > 0) return;

      try {
        const res = await axios.get(BASE_URL + "/user/feed", {
          withCredentials: true,
        });

        console.log("feedInStore----", res.data);
        const fallbackArray = res?.data?.data || res?.data || [];
        dispatch(addFeed(fallbackArray));
      } catch (err) {
        setError(() => err?.response?.data || "Failed to load feed");
      }
    };
    getFeed();
  }, [feedInStore, dispatch]);


  if (err) return <div className="text-center text-red-500 my-10">{err}</div>;
  if (!feedInStore)
    return <div className="text-center my-10">Loading feed...</div>;
  if (feedInStore.length <= 0)
    return <div className="text-center my-10">No users found.</div>;


  return (
     <div className="flex flex-col items-center my-10 gap-4">
      <h2 className="text-xl font-bold">Feed Present</h2>
      {feedInStore.map((user) => (
        //  Notice the parenthesis ( ) instead of curly braces { } for implicit return
        //  Always provide a unique key when mapping over elements
        <div key={user._id || user.id} className="flex justify-center w-full">
          <UsrCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
