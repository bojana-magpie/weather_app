import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
          <div className="App container">
              <HeaderWrapper/>
              <Banner/>
              <Footer/>
          </div>
  );
}

export default App;