import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CoolerListing from "./components/CoolerListing";
import { useTheme } from "./utils/themeProvider";
import './style/App.css'
import CarouselComponent from "./components/CarouselComponent";
import CustomerReview from "./components/CustomerReview";
const navList=["Features", "Coolers", "Almiras", "Accessories", "Contact Us"]

function App() {
  const theme = useTheme().mode;

  return (
    <div className="App" >
      <div className={theme}>
      <NavBar navList={navList} />
      <CarouselComponent />
      <CoolerListing />
      <CustomerReview />
      </div>
      
    </div>
  );
}

export default App;
