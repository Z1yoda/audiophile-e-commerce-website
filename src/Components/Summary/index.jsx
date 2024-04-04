import React, { useEffect, useState } from 'react'
import styles from "./index.module.css"
import {
    detailgallery1, detailgallery2, detailgallery3,
    imagegallery1, imagegallery2, imagegallery3,
    mark1gallery1, mark1gallery2, mark1gallery3,
    zx9gallery1, zx9gallery2, zx9gallery3,
    zx7gallery1, zx7gallery2, zx7gallery3,
    yx1gallery1, yx1gallery2, yx1gallery3,
    zx7Speaker, xx99markone, xx59white, zx9speaker, xx99marktwo, yx1earphone
} from '../../imageCall/image'


function Summary() {
    const [cartedProducts, setCartedProducts] = useState([])

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('savedProduct'))
        setCartedProducts(storedProducts)
    }, [])

    return (
        <div>
            <div className={styles.summary}>
                <h6>Summary</h6>
                <div className={styles.summaryItems}>
                    {cartedProducts && cartedProducts.map((product, index) => {
                        return (
                            <div key={index} className={styles.summaryItem}>
                                <img
                                    style={{ width: "64px", height: "64px" }}
                                    className={styles.summaryItemImage}
                                    src={product.name == "ZX7 Speaker"
                                        ? zx7Speaker
                                        : product.name == "XX99 Mark I Headphones"
                                            ? xx99markone
                                            : product.name == "XX59 Headphones"
                                                ? xx59white
                                                : product.name == "ZX9 Speaker"
                                                    ? zx9speaker
                                                    : product.name == "XX99 Mark II Headphones"
                                                        ? xx99marktwo
                                                        : product.name == "YX1 Wireless Earphones" && yx1earphone}
                                    alt={`${product.name}`}
                                />
                                <div style={{ width: " 185px" }}>
                                    <p className={styles.summaryItemProductName}>
                                        {product.name}
                                    </p>
                                    <p className={styles.summaryItemPrice}>{`$ ${product.price}`} </p>
                                </div>
                                <p className={styles.summaryItemQuantity}>{`x${product.amount}`}</p>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className={styles.summaryContainer}>
                        <p className={styles.summaryTitle}>Total</p>
                        <p className={styles.summaryNumbers}>{`€ 4653`}</p>
                    </div>
                    <div className={styles.summaryContainer}>
                        <p className={styles.summaryTitle}>Shipping</p>
                        <p className={styles.summaryNumbers}>{`€ 3632`}</p>
                    </div>
                    <div className={styles.summaryContainer}>
                        <p className={styles.summaryTitle}>VAT (INCLUDED)</p>
                        <p className={styles.summaryNumbers}>{`€ 23964`}</p>
                    </div>
                </div>
                <div className={styles.summaryContainer}>
                    <p className={styles.summaryTitle}>GRAND TOTAL</p>
                    <p className={styles.summaryNumberss}>{`€ 234`}</p>
                </div>

                <button>Continue & Pay
                </button>
            </div>
        </div>
    )
}

export default Summary