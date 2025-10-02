import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"; // make sure you create this page
import Home from './Pages/Home'
import PageCourse from "./Pages/PageCourse";
import SellCourses from "./Pages/SellCourses";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home />} />
          <Route path="/all-course" element={<SellCourses />} />
           <Route path="/course/:course-name" element={<PageCourse />} />
           <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
