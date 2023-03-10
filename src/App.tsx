import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboardpage from "./pages/Dashboardpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home /> }></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/dashboard" element={<Dashboardpage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
