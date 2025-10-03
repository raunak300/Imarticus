import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Courses from '../components/Courses'

const PageCourse = () => {
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
        <Nav />
        <Courses />
        <Footer />
    </div>
  )
}

export default PageCourse