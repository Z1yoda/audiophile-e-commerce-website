import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import headphonemark2 from "../../assets/images/headphonemark2.svg";
import headphonemark1 from "../../assets/images/headphonemark1.svg";
import headphonexx59 from "../../assets/images/headphonexx59.svg";
import earphoneyx1 from "../../assets/images/earphoneyx1.svg";
import speakerzx7 from "../../assets/images/speakerzx7.svg";
import speakerzx9 from "../../assets/images/speakerzx9.svg";

function ProductCard(props) {
    const [img, setImg] = useState(null);
    const { product, index } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const importComponent = async () => {
            if (product.categoryImage.desktop) {
                try {
                    console.log("Image filename:", product.categoryImage.desktop);
                    const module = await import(`${product.categoryImage.desktop}`);
                    setImg(module.default);
                } catch (error) {
                    console.error("Error importing image:", error);
                }
            }
        };

        importComponent();
    }, [product.categoryImage.desktop]);

    function handleClick(productSlug) {
        navigate(`/product/${productSlug}`);
    }

    return (
        <div className="category-product-wrapper">
            <div
                className={`container d-flex justify-content-between align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"
                    }`}
            >
                <div className="product-left">
                    {img && (
                        <img
                            src={
                                product.id == 3
                                    ? headphonemark1
                                    : product.id == 4
                                        ? headphonemark2
                                        : product.id == 2
                                            ? headphonexx59
                                            : product.id == 1
                                                ? earphoneyx1
                                                : product.id == 5
                                                    ? speakerzx7
                                                    : product.id == 6 && speakerzx9
                            }
                            alt=""
                        />
                    )}
                </div>
                <div className="category-product-right">
                    <h4>{product.new ? "NEW PRODUCT" : ""}</h4>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => handleClick(product.slug)} className="button">
                        See Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
