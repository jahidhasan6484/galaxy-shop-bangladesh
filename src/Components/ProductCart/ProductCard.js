import React from 'react';
import Note10Lite from '../../images/17_Samsung_Galaxy_Note10Lite.jpg';
import A72 from '../../images/50_Galaxy_A72_8256GB.png';
import A71 from '../../images/11_Samsung_Galaxy_A71.jpg';
import M51 from '../../images/40_Galaxy_M51__8128_GB.png';
import A52 from '../../images/48_Galaxy_A52_8128.png';
import wishlist from '../../images/wishlist.svg';
import details from '../../images/details.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';

const ProductCard = () => {

    return (
        <div className="container AllProductCard">
            <h4 className="text-center mb-5">Product Featured</h4>
            <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card">
                        <a className="product-thumb" href="#"><img className="img-fluid productImg" src={Note10Lite} alt="Product"></img></a>
                        <div class="card-body">
                            <div className=" text-center">
                                <a href="#"><small className="category" className="category">Smartphones</small></a>
                                <a href="#"><h5 className="product-title mb-4">Samsung Galaxy Note10-Lite</h5></a>
                                <span className="product-price">
                                    ৳49,999
                                </span>
                            </div>
                            <div className="d-flex justify-content-around buttons">
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={wishlist}></img></Link>
                                </div>
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={details}></img></Link>
                                </div>
                                <div>
                                <Link to=""><img className="myButton img-fluid" src={cart}></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a className="product-thumb" href="#"><img className="img-fluid productImg" src={A72} alt="Product"></img></a>
                        <div class="card-body">
                            <div className="text-center">
                                <a href="#"><small className="category">Smartphones</small></a>
                                <a href="#"><h5 className="product-title mb-4">Galaxy A72 (8/256GB)</h5></a>
                                <span className="product-price">
                                ৳45,999
                                </span>
                            </div>
                            <div className="d-flex justify-content-around buttons">
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={wishlist}></img></Link>
                                </div>
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={details}></img></Link>
                                </div>
                                <div>
                                <Link to=""><img className="myButton img-fluid" src={cart}></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a className="product-thumb" href="#"><img className="img-fluid productImg" src={M51} alt="Product"></img></a>
                        <div class="card-body">
                            <div className=" text-center">
                                <a href="#"><small className="category">Smartphones</small></a>
                                <a href="#"><h5 className="product-title mb-4">Galaxy M51 (8/128 GB)</h5></a>
                                <span className="product-price">
                                <del>35999.00</del> ৳33999.00
                                </span>
                            </div>
                            <div className="d-flex justify-content-around buttons">
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={wishlist}></img></Link>
                                </div>
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={details}></img></Link>
                                </div>
                                <div>
                                <Link to=""><img className="myButton img-fluid" src={cart}></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a className="product-thumb" href="#"><img className="img-fluid productImg" src={A71} alt="Product"></img></a>
                        <div class="card-body">
                            <div className=" text-center">
                                <a href="#"><small className="category">Smartphones</small></a>
                                <a href="#"><h5 className="product-title mb-4">Samsung Galaxy A71</h5></a>
                                <span className="product-price">
                                <del>34999.00 </del>৳32999.00
                                </span>
                            </div>
                            <div className="d-flex justify-content-around buttons">
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={wishlist}></img></Link>
                                </div>
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={details}></img></Link>
                                </div>
                                <div>
                                <Link to=""><img className="myButton img-fluid" src={cart}></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <a className="product-thumb" href="#"><img className="img-fluid productImg" src={A52} alt="Product"></img></a>
                        <div class="card-body">
                            <div className=" text-center">
                                <a href="#"><small className="category">Smartphones</small></a>
                                <a href="#"><h5 className="product-title mb-4">Galaxy A52 (8/128)</h5></a>
                                <span className="product-price">
                                ৳33,999
                                </span>
                            </div>
                            <div className="d-flex justify-content-around buttons">
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={wishlist}></img></Link>
                                </div>
                                <div>
                                    <Link to=""><img className="myButton img-fluid" src={details}></img></Link>
                                </div>
                                <div>
                                <Link to=""><img className="myButton img-fluid" src={cart}></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;