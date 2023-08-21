import { Container } from "react-bootstrap";
import CoolerListing from "./components/CoolerListing";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./utils/themeProvider";
// import './App.css'
function App() {
  return (
    <ThemeProvider>
      <Container>
        <div className="App">
          <CoolerListing />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
