import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Almoco from './pages/Almoco'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/menu" exact Component={Menu}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/lunches" exact Component={Almoco}/>
          
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
