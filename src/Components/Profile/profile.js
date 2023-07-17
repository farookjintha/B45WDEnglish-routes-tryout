import './profile.css';

const Profile = () => {
    return (
        <div>
            <h1>John's Profile</h1>
            <div className="profile-container">
                <h2>Email: <b>john@gmail.com</b></h2>
                <h2>Mobile: <b> +91 1234567890</b></h2>
                <h2>Address: <b>Chennai, India</b></h2>
            </div>
        </div>
    )
}

export default Profile;