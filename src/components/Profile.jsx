import { useSelector } from "react-redux";
import EdittProfile from "./EdittProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div>
        <EdittProfile user={user} />
      </div>
    )
  );
};

export default Profile;
