import React from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import CourseSell from '../components/CourseSell'
import '../styles/coursesell.css'
const SellCourses = () => {
      useEffect(() => {
          const checkAuthAndRedirect = async () => {
              try {
                
  
                  const res = await fetch("https://imarticus.onrender.com/api/auth/check", {
                      method: "GET",
                      credentials: "include",
                  });
  
                     
                      navigate("/", { replace: true });
                  
                  
                  // If status is 200, user is authenticated, so they remain on /home
              } catch (err) {
                  console.error("Home auth check failed:", err);
                  navigate("/", { replace: true });
              }
          };
  
          checkAuthAndRedirect();
          
      }, [navigate]); // Dependency on navigate hook
  
  return (
    <div>
        <Nav2 />
        <CourseSell />
        <Footer />
    </div>
  )
}

export default SellCourses