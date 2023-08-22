import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CoolerListing from "./components/CoolerListing";
import { useTheme } from "./utils/themeProvider";
import './App.css'
import CarouselComponent from "./components/CarouselComponent";

function App() {
  const theme = useTheme().mode;

  return (
    <div className="App" >
      <div className={theme}>
      <NavBar />
      <CarouselComponent />
      <CoolerListing />
      </div>
      
    </div>
  );
}

export default App;
