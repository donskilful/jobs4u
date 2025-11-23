import "./layout.scss";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="layout">
        <h1>Welcome to Jobs4U</h1>
        <p>Your next career opportunity awaits!</p>
      </div>
    </>
  );
}

export default App;
