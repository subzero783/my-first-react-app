function UserProfile({ name, email, age }) {
  return (
    <div
      className="user-card"
      style={{ border: "1px solid grey", margin: "10px", padding: "10px", color: "#000" }}
    >
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      {/* Conditionally render age if it exists */}
      {age !== null ? <p>Age: {age}</p> : <p>Age: Not specified</p>}
    </div>
  );
}

// Export the component
export default UserProfile;
