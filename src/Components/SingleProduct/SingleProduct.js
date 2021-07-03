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
import Footer from '../Footer/Footer';

const SingleProduct = () => {
    const [phone, setPhone] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetch('https://kinder-mountie-35880.herokuapp.com/phone')
            .then(res => res.json())
            .then(data => {
                setPhone(data)
            })
    }, [id])

    const selectedPhone = phone.find(phone => phone?._id === id);
    return (
        <>
            <Header />
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 col-sm-12">
                        <h2>Single Product</h2>
                    </div>
                    <div className="col-md-6 col-ms-12">
                        <p> <Link className="back" to="/">Home</Link> - <Link className="back" to="#">phone</Link> - Single Product</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card mt-5 mb-5">
                        <div className="d-flex flex-column align-center col-md-4">
                            <p className="date">{selectedPhone?.presentPrice}</p>
                            <p className="title">{selectedPhone?.name}</p>
                            <p className="writer">-By Admin</p>
                        </div>
                        <div>
                            <img src={`data:image/png;base64,${selectedPhone?.image?.img}`} className="img-fluid" alt="phoneImage" />
                        </div>
                    </div>
                        <div>
                            <p className="content">{selectedPhone?.content}</p>
                        </div>
                    <div className="px-5 col-lg-6 col-md-6 col-sm-12">
                        <h3>{selectedPhone?.name}</h3>
                        <h5>৳ {selectedPhone?.presentPrice}</h5>
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
                                <div className="row mt-5 bottomphone">
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                                        <button className="btn btn-outline-secondary">To Wishlist</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 phoneSocial">
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
            <Footer />
        </>
    );
};

export default SingleProduct;