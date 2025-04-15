import Card from "./Card";
import UserProfile from "./UserProfile";
function App() {
  return (
    <div>
      <Card title="User Information">
        {/* Everything between <Card> and </Card> is props.children */}
        <p>This user likes React!</p>
        <UserProfile
          name="Jordan"
          email="jordan@react.dev"
          age={25}
        />
        <button>Contact User</button>
        {/* End of props.children */}
      </Card>

      <Card title="Another Section">
        <p style={{ color: "red" }}>Some other content here.</p>
      </Card>
    </div>
  );
}
export default App;
