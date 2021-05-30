import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import mini from '../../images/mini_6.png';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import googlePlus from '../../images/googlePlus.png';

const SingleProduct = () => {
    const [banner, setBanner] = useState(false);

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        const url = `https://mocki.io/v1/07090c30-805f-4492-a97c-fccfc4bd23b9`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data[id]))
    }, [])
    return (
        <>
            <Header />
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 col-sm-12">
                        <h2>Single Product</h2>
                    </div>
                    <div className="col-md-6 col-ms-12">
                        <p> <Link className="back" to="/">Home</Link> - <Link className="back" to="#">Details</Link> - Single Product</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
                        {
                            !banner && <img className="img-fluid" src={productDetails?.photo}></img>
                        }
                        <div className="row morePhotos">
                            <div className="col-lg-2 col-md-6 col-sm-6 morePhoto">
                                <img className="img-fluid" src={mini}></img>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 morePhoto">
                                <img className="img-fluid" src={logo}></img>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 morePhoto">
                                <img className="img-fluid" src={mini}></img>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 morePhoto">
                                <img className="img-fluid" src={logo}></img>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 morePhoto">
                                <img className="img-fluid" src={mini}></img>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 col-lg-6 col-md-6 col-sm-12">
                        <h3>{productDetails?.name}</h3>
                        <h5>৳ {productDetails?.price}</h5>
                        <small> <a href="#">more info</a> </small>
                        <form className="mt-5">
                            <div className="form-row row">
                                <div className="col-md-6 col-sm-12 mb-5">
                                    <label for="inputState">Chose color</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Black</option>
                                        <option>Red</option>
                                        <option>White</option>
                                        <option>Gray</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-5">
                                    <label for="inputState">Battery capacity</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>5,000mAh</option>
                                        <option>4,500mAh </option>
                                        <option>4,000mAh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row row">
                                <div className="col-md-6 col-sm-12">
                                    <label for="inputState">Quantity</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>1</option>
                                        <option>2 </option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="row">
                                        <button type="submit" className="btn btn-primary mt-4">Add to Cart</button>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <button className="btn btn-outline-secondary">To Wishlist</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 detailsSocial">
                                        <span>Share:</span>
                                        <a href="#"><img src={facebook}></img></a>
                                        <a href="#"><img src={twitter}></img></a>
                                        <a href="#"><img src={instagram}></img></a>
                                        <a href="#"><img src={googlePlus}></img></a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;