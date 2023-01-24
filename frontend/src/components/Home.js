import React from 'react'
import LeftSection from './LeftSection'
import "../styles/Home.css"
import RightSection from './RightSection'

const Home = () => {
  return (
    <div className="home">
        <LeftSection/>
        <RightSection/>
    </div>
  )
}

export default Home