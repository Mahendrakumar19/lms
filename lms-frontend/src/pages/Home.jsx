import MyHome from '../components/Home/Home'
import React from 'react'
import Courses from '../components/Courses/Courses'
import Navbar from '../components/Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
        <MyHome/>
        <Courses/>
    </div>
  )
}

export default Home