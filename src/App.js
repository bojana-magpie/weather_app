import './App.css';
import Header from "./Components/Header/Header";
import Logo from "./Components/Header/Logo/Logo";

function App() {
  return (
    <div className="App container">
      <Header>
          <Logo title="Weather by VicBox"></Logo>
      </Header>
    </div>
  );
}

export default App;
