import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <div className="bg-slate-600 p-8 shadow-[inset_0_0_45px_-15px_rgba(3,188,300,1)]">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
