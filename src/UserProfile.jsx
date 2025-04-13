function UserProfile(props) {
  const fullName = props.firstName + " " + props.lastName;

  return (
    <div className="profile-card">
      <img
        src={props.avatarUrl}
        alt={"Avatar for " + fullName}
        className="profile-avatar"
      />
      <h2>{fullName}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserProfile;
