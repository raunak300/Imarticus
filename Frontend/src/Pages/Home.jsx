import React, { useEffect } from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();

    // Check auth status on page refresh (component mount)
   

  return (
    <div>
        <Nav2 />
        <HomeContent />
        <Footer />
    </div>
  )
}

export default Home