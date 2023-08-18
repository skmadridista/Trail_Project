import { Container } from "react-bootstrap";
import CoolerListing from "./components/CoolerListing";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./utils/themeProvider";


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <CoolerListing  />
    </div>
    </ThemeProvider>
  );
}

export default App;
