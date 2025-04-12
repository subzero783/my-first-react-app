function App() {
  // CORRECT - Wrapped in a div
  const userInfo = () => {
    return (
      <React.Fragment>
        {/* This is a comment */}
        <h1>User Name</h1>
        <p>User Bio</p>
      </React.Fragment>
    );
  };

  return userInfo();
}

export default App;
