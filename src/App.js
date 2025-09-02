import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./features/Home";
import About from "./features/About";
import Services from "./features/Services";
import Contact from "./features/Contact";
import Profile from "./profile/Profile";
import SearchMovie from "./SearchMovie";

function App() {
  return (
    // <></> // React.Fragment
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/searchMovie" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;