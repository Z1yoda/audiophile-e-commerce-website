import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import CategoryCards from "../../Components/CategoryCards";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlicer";
import headphonemark2 from "../../assets/images/headphonemark2.svg";
import headphonemark1 from "../../assets/images/headphonemark1.svg";
import headphonexx59 from "../../assets/images/headphonexx59.svg";
import earphoneyx1 from "../../assets/images/earphoneyx1.svg";
import speakerzx7 from "../../assets/images/speakerzx7.svg";
import speakerzx9 from "../../assets/images/speakerzx9.svg";
import {
  detailgallery1, detailgallery2, detailgallery3,
  imagegallery1, imagegallery2, imagegallery3,
  mark1gallery1, mark1gallery2, mark1gallery3,
  zx9gallery1, zx9gallery2, zx9gallery3,
  zx7gallery1, zx7gallery2, zx7gallery3,
  yx1gallery1, yx1gallery2, yx1gallery3,
  zx7Speaker, xx99markone, xx59white,
  zx9speaker, xx99marktwo, yx1earphone
} from "../../imageCall/image";

function ProductDetail() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false)
  const { data, loading, error } = useFetch(
    "http://localhost:3001/data"
  );

  useEffect(() => {
    if (data?.length > 0 && !error) {
      const foundProduct = data.find((product) => product.slug === slug);
      setProduct(foundProduct);
    }
  }, [data, slug]);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      dispatch({ type: 'SET_COUNT', payload: Number(storedCount) });
    }
  }, [dispatch]);

  function handleClick(productSlug) {
    navigate(`/product/${productSlug}`);
  }

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleSave(product) {
    setAlert(true)
    const existingProducts = JSON.parse(localStorage.getItem("savedProduct")) || [];

    const isExist = existingProducts.filter(products => { return products.id == product.id })

    if (isExist) {
      console.log(isExist);
    } const savedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: count,
    }

    existingProducts.push(savedProduct);

    localStorage.setItem('savedProduct', JSON.stringify(existingProducts));
  }

  return (
    product && (
      <div className="details-wrapper">
        <div className="container">
          {
            alert && (<div className="alert  alert-info alert-dismissible fade show" role="alert">
              <strong>Succesfully added</strong>.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)
          }
          <Link className="backLink" to="/category/headphones">
            <p> Go Back</p>
          </Link>
        </div>

        <div className="category-product-wrapper">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="category-product-left">
              <img style={{ width: "540px", height: "560px" }} src={product.id == 3
                ? headphonemark1
                : product.id == 4
                  ? headphonemark2
                  : product.id == 2
                    ? headphonexx59
                    : product.id == 1
                      ? earphoneyx1
                      : product.id == 5
                        ? speakerzx7
                        : product.id == 6 && speakerzx9} alt="" />
            </div>
            <div className="category-product-right">
              <h4>{product.new && 'NEW PRODUCT'}</h4>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h6>${product.price}</h6>
              <div className="buttonDetails">
                <div className="quantityButton">
                  <button onClick={handleDecrement}>-</button>{count}<button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={() => handleSave(product)} className="button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" container features">
          <div className="features-left">
            <h5>FEATURES</h5>
            <p>
              {product.features}
            </p>
          </div>
          <div className="features-right">
            <h5>IN THE BOX</h5>
            <div className="boxItems">
              {
                product.includes.map((item, index) => (
                  <div key={index} className="item">
                    <span>{item.quantity}x</span>
                    <p>{item.item}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="container detailsGallery">
          <div className="smallones">
            <img style={{ width: "445px", height: "280px" }} src={product.id == 3
              ? mark1gallery1
              : product.id == 4
                ? detailgallery1
                : product.id == 2
                  ? imagegallery1
                  : product.id == 1
                    ? yx1gallery1
                    : product.id == 5
                      ? zx7gallery1
                      : product.id == 6 && zx9gallery1} alt="" />
            <img style={{ width: "445px", height: "280px" }} src={product.id == 3
              ? mark1gallery2
              : product.id == 4
                ? detailgallery2
                : product.id == 2
                  ? imagegallery2
                  : product.id == 1
                    ? yx1gallery2
                    : product.id == 5
                      ? zx7gallery2
                      : product.id == 6 && zx9gallery2} alt="" />
          </div>
          <img style={{ width: "635px", height: "592px" }} src={product.id == 3
            ? mark1gallery3
            : product.id == 4
              ? detailgallery3
              : product.id == 2
                ? imagegallery3
                : product.id == 1
                  ? yx1gallery3
                  : product.id == 5
                    ? zx7gallery3
                    : product.id == 6 && zx9gallery3} alt="" />
        </div>
        <div className="recommendations container">
          <h5>you may also like</h5>
          <div className="add-card-list">
            {
              product.others.map((other, index) => (
                <div key={index} className="add-card">
                  <img style={{ width: "350px", height: "318px" }} className="add-image" src={
                    other.slug == "zx7-speaker"
                      ? zx7Speaker
                      : other.slug == "xx99-mark-one-headphones"
                        ? xx99markone
                        : other.slug == "xx59-headphones"
                          ? xx59white
                          : other.slug == "zx9-speaker"
                            ? zx9speaker
                            : other.slug == "xx99-mark-two-headphones"
                              ? xx99marktwo
                              : other.slug == "yx1-earphones" && yx1earphone} alt="" />
                  <h4>{other.name}</h4>
                  <button onClick={() => handleClick(other.slug)} className="button">SEE PRODUCT</button>
                </div>
              ))
            }
          </div>
        </div>
        <CategoryCards />
      </div>
    )
  );
}

export default ProductDetail;
