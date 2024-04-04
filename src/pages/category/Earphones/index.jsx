import React from "react";
import "./index.css";
import CategoryCards from "../../../Components/CategoryCards";
import Footer from "../../../Components/Footer";
import useFetch from "../../../hooks/useFetch";
import { useState, useEffect } from "react";
import ProductCard from "../../../Components/ProductCard";

function Earphones() {
    const [products, setProducts] = useState([]);

    const { data: fetchedProducts, isPending, error } = useFetch('http://localhost:3001/data');

    useEffect(() => {
        if (fetchedProducts) {
            const filteredProducts = fetchedProducts.filter(product => product.category === 'earphones');
            setProducts(filteredProducts);
        }
    }, [fetchedProducts]);

    return (
        <div className="headphone-wrapper">
            <div className="hero">
                <div className="container">
                    <h1>Earphones</h1>
                </div>
            </div>
            {products.map((product, index) => (
                <ProductCard
                    key={product.id}
                    index={index}
                    product={product}
                />
            ))}
            <CategoryCards />
        </div>
    );
}

export default Earphones;
