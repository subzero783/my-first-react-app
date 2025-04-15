import UserProfile from "./UserProfile";
import Greeting from "./Greeting";
import GreetingClass from "./GreetingClass";

function App() {
  const user1 = {
    firstName: "Gustavo",
    lastName: "Wonder",
    avatarUrl: "https://placehold.co/80x80/a9dff7/333?text=AW",
    email: "alice@example.com",
  };

  return (
    <div className="App">
      {/* <UserProfile
        firstName={user1.firstName}
        lastName={user1.lastName}
        avatarUrl={user1.avatarUrl}
        email={user1.email}
      /> */}
      <Greeting name={user1.firstName} />
      <GreetingClass name={user1.firstName} />
    </div>
  );
}

export default App;
