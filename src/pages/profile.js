import { auth } from "../firebase/firebase.utils";

const ProfilePage = () => {
    // Add code to fetch or access user profile data

    return (
        <div>
            {/* Display user profile information */}
            <h2>Welcome {auth.currentUser.displayName}</h2>
            {/* Add additional components or sections for displaying profile data */}
        </div>
    );
};

export default ProfilePage;