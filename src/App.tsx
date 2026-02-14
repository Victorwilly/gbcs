import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Contact from "./pages/Contact/Contact";
import Admissions from "./pages/Admissions/Admissions";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
