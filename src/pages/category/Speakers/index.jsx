import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import CategoryCards from "../../../Components/CategoryCards";
import Footer from "../../../Components/Footer";
import useFetch from "../../../hooks/useFetch";
import ProductCard from "../../../Components/ProductCard";

function Speakers() {
    const [products, setProducts] = useState([]);

    const { data: fetchedProducts, isPending, error } = useFetch('http://localhost:3001/data');

    useEffect(() => {
        if (fetchedProducts) {
            const filteredProducts = fetchedProducts.filter(product => product.category === 'speakers');
            setProducts(filteredProducts);
        }
    }, [fetchedProducts]);

    return (
        <div className="headphone-wrapper">
            <div className="hero">
                <div className="container">
                    <h1>Speakers</h1>
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

export default Speakers;
