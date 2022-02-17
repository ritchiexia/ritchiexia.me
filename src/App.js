import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
