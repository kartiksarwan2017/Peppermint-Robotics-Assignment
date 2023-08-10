import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";
import JobsDescription from './components/JobsDescription/JobsDescription';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/careers" element={<Careers />} /> 
        <Route exact path="/job-description/:jobId" element = {<JobsDescription />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
