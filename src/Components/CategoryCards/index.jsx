import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import headphone from "../../assets/images/headphone.svg"
import speaker from "../../assets/images/speaker.svg"
import earphone from "../../assets/images/earphone.svg"
import CategoryCard from '../CategoryCard'

function CategoryCards() {
    return (
        <div className='container'>
            <div className="cards-wrapper">
                <CategoryCard
                    title="headphones"
                    image={headphone}
                />
                <CategoryCard
                    title="speakers"
                    image={speaker}
                />
                <CategoryCard
                    title="earphones"
                    image={earphone}
                />
            </div>
        </div>
    )
}

export default CategoryCards