import { FaUserAlt } from "react-icons/fa";
import { ProfileStyle } from "./profileStyle";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("avaaaaaaaaaaaaaaaaatar" , user.data.result.expert.avatarUrl);

  return (
    <ProfileStyle>
      {
        user.data.result.expert.avatarUrl ? 
          <img src={user.data.result.expert.avatarUrl} alt="image-profile" /> : 
          <FaUserAlt size={30} />
      }
    </ProfileStyle>
  );
};

export default Profile;
