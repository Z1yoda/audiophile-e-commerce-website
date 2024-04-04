import React from 'react'
import './index.css'
import speaker2 from '../../assets/images/speaker2.svg'
import earphone2 from '../../assets/images/earphone2.svg'

function Products() {
    return (
        <div className='container products-wrapper'>
            <div className="product-wrapper">
                <div className="left-product">
                    <img src={speaker2} alt="" />
                </div>
                <div className="right-product">
                    <h2>ZX9
                        SPEAKER</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className='button'>SEE PRODUCTS</button>
                </div>
            </div>
            <div className=" product-wrapper2">
                <div className="left-product2">
                    {/* <img src={} alt="" /> */}
                </div>
                <div className="right-product2">
                    <h5>ZX7 SPEAKER</h5>
                    <button className='button'>SEE PRODUCTS</button>
                </div>
            </div>
            <div className=" product-wrapper3">
                <div className="left-product3">
                    <img src={earphone2} alt="" />
                </div>
                <div className="right-product3">
                    <h5>YX1 EARPHONES</h5>
                    <button className='button'>SEE PRODUCTS</button>
                </div>
            </div>
        </div>
    )
}

export default Products