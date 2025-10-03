import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Courses from '../components/Courses'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const PageCourse = () => {
  const navigate=useNavigate()
     
  
  return (
    <div>
        <Nav />
        <Courses />
        <Footer />
    </div>
  )
}

export default PageCourse