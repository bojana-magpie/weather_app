import './App.css';
import Header from "./Components/Header/Header";
import Logo from "./Components/Header/Logo/Logo";
import Menu from "./Components/Header/Menu/Menu";
import MenuItem from "./Components/Header/Menu/MenuItem";

function App() {
  return (
    <div className="App container">
      <Header>
          <Logo title="Weather by VicBox"></Logo>
          <Menu>
              <MenuItem title="GitHub"/>
              <MenuItem title="About"/>
          </Menu>
      </Header>
    </div>
  );
}

export default App;
