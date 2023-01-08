import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Pages/Home";
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
