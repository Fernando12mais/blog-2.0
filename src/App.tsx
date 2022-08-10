import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Footer, Header } from "./components/molecules";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes />
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
