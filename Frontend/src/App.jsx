import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from './Pages/Home';
import PageCourse from "./Pages/PageCourse";
import SellCourses from "./Pages/SellCourses";
import "./App.css";
import VideoPage from "./Pages/VideoPage";

function AppWrapper() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/check", {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 200) {
          navigate("/home", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    // 👇 empty dependency array means it runs only once (on mount)
  }, []);

  if (loading) {
    return <div>Loading...</div>; // optional loader
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all-course" element={<SellCourses />} />
      <Route path="/course/:courseName" element={<PageCourse />} />
      <Route path="/course/:courseName/video" element={<VideoPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
