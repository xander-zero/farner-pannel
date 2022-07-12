import { FaUserAlt } from "react-icons/fa";
import { ProfileStyle } from "./profileStyle";

const Profile = () => {
  return (
    <ProfileStyle>
      <FaUserAlt size={30} />
      {/* <img src={imageProfile} alt="image-profile" /> */}
    </ProfileStyle>
  );
};

export default Profile;
