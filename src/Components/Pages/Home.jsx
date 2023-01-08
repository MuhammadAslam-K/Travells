import React from 'react'
import '../../App.css'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'



function Home() {
    return (
        <div>
           
            <HeroSection />
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
