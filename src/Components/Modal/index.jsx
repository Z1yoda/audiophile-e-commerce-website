import React, { useEffect, useState } from 'react'
import './index.css'
import headphone from '../../assets/images/headphonemark2.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/counterSlicer'
import { zx7Speaker, xx99markone, xx59white, zx9speaker, xx99marktwo, yx1earphone } from '../../imageCall/image'

function Modal() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [cartedProducts, setCartedProducts] = useState([])
    const [total, setTotal] = useState(0)

    function sumCart() {
        return cartedProducts.reduce(
            (sum, product) => sum + product.price * product.quantity,
            0
        );
    }

    function handleIncrement() {
        dispatch(increment())
    }

    function handleDecrement() {
        dispatch(decrement())
    }

    function handleClear() {
        let existingProducts = JSON.parse(localStorage.getItem("savedProduct"));
        existingProducts = [];
        localStorage.setItem('savedProduct', JSON.stringify(existingProducts));
    }


    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('savedProduct'))
        setCartedProducts(storedProducts)
    }, [])

    return (
        <div className='modal-wrapper'>
            <div className="cart-count">
                <h3>CART(3)</h3>
                <p onClick={handleClear}>Remove all</p>
            </div>
            <div className="carted-products">
                {
                    cartedProducts && cartedProducts.map((product) => (
                        <div key={product.id} className="carted-product">
                            <img src={product.name == "ZX7 Speaker"
                                ? zx7Speaker
                                : product.name == "XX99 Mark I Headphones"
                                    ? xx99markone
                                    : product.name == "XX59 Headphones"
                                        ? xx59white
                                        : product.name == "ZX9 Speaker"
                                            ? zx9speaker
                                            : product.name == "XX99 Mark II Headphones"
                                                ? xx99marktwo
                                                : product.name == "YX1 Wireless Earphones" && yx1earphone} alt="" />
                            <div className="cart-price">
                                <h4>{product.name}</h4>
                                <p>{product.price}
                                </p>
                            </div>
                            <div className="quantityButton2">
                                <button onClick={handleDecrement}>-</button>{product.amount}<button onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                    ))
                }
                {
                    !cartedProducts && <p style={{ color: "black", textAlign: "center" }}>You don't have products</p>
                }
            </div>
            <div className="total-price">
                <p>TOTAL</p>
                <h3>$</h3>
            </div>
            <Link to='/checkout' className="button-checkout">CHECK OUT</Link>
        </div>
    )
}

export default Modal