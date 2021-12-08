import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import FadeIn from 'react-fade-in'

function App() {
  return (
    <Router>
      <div className="container">
        <FadeIn>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Projects />
          } />
          <Route path="about" element={
            <About />
          } />
        </Routes>
        </FadeIn>
      </div>
    </Router>
  );
}

export default App;
