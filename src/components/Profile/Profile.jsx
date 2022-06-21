import imageProfile from '../../assets/images/ibrahima-toure-GAepqKfzZFI-unsplash.jpg';
import { ProfileStyle } from './profileStyle';

const Profile=()=>{
    return (
        <ProfileStyle>
            <img src={imageProfile} alt='image-profile' />
        </ProfileStyle>
    )
}

export default Profile;