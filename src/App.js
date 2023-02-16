import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/"></Route>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
