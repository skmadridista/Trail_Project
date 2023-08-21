import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./utils/themeProvider";
import NavBar from "./components/NavBar"
import CoolerListing from './components/CoolerListing';


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <NavBar/>
      <CoolerListing  />
    </div>
    </ThemeProvider>
  );
}

export default App;
