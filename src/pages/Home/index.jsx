import React from 'react'
import './index.css'
import Hero from '../../Components/Hero'
import CategoryCards from '../../Components/CategoryCards'
import Products from '../../Components/Products'

function Home() {

    return (
        <div className='home-wrapper'>
            <Hero />
            <CategoryCards />
            <Products />
        </div>
    )
}

export default Home