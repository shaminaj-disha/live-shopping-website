import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginMain from "./Pages/Authentication/LoginMain";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginMain />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
