import React from 'react'
import Navbar from './Navbar/Navbar.js'
import Header from './Header/Header.js'
import Feed from './Feed/Feed.js'
import Footer from './Footer/Footer.js'

const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <Feed/>
       <Footer />
    </div>
  )
}

export default Home
