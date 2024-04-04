import React from 'react'
import './index.css'
import shop from "../../assets/images/icon-arrow-right.svg"
import { Link } from 'react-router-dom'

function CategoryCard(props) {
    const { title, image } = props

    return (
        <div className="card-wrapper">
            <img className='category1' src={image} alt="" />
            <h3>{title}</h3>
            <Link to={`/category/${title}`}>SHOP <span><img src={shop} alt="" /></span></Link>
        </div>
    )
}

export default CategoryCard