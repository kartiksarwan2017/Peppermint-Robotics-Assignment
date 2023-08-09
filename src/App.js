import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/careers" element={<Careers />} /> 
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
