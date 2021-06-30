import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wishlist from '../../images/wishlist.svg';
import details from '../../images/details.svg';
import cart from '../../images/cart.svg';

const LoadProducts = () => {
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/phone')
            .then(res => res.json())
            .then(data => {
                setPhone(data);
            })
    }, [])

    return (
        <div className="container">
            <h3 className="text-center mb-5">Featured Products</h3>
            <div className="row">

                {
                    phone.map((element) => {
                        const { _id, image, category, model, previousPrice, presentPrice, productStatus } = element;

                        return (
                            <div class="col-md-3" key={_id}>
                                <div class="card mb-5">
                                <p className="status">{productStatus}</p>
                                    <img className="img-fluid productImg" src={`data:image/png;base64,${image?.img}`} alt="Product"></img>
                                    <div class="card-body">
                                        <div className=" text-center">
                                            <a href="/"><small className="category" >{category}</small></a>
                                            <a href="/"><h5 className="product-title mb-4">{model}</h5></a>
                                            <span className="product-price">
                                                <del>{previousPrice} </del>৳{presentPrice}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-around buttons">
                                            <div>
                                                <Link to=""><img className="img-fluid cardButton" src={wishlist} alt="wishlist"></img></Link>
                                            </div>
                                            <div>
                                                <Link to={`/singleProduct/${_id}`}><img className="img-fluid cardButton" src={details} alt="details"></img></Link>
                                            </div>
                                            <div>
                                                <Link to=""><img className="img-fluid cardButton" src={cart} alt="cart"></img></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center mb-5">
                <button className="btn viewAllProducts">View All Products</button>
            </div>
        </div>
    );
};

export default LoadProducts;