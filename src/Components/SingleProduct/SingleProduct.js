import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const SingleProduct = () => {
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
                        <p>Home-Details-Single Product</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card col-lg-6 col-md-6 col-sm-12 mt-5 cardTopImage">
                        <img className="img-fluid" src={productDetails?.photo}></img>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>{productDetails?.name}</h3>
                        <h5>৳{productDetails?.price}</h5>
                        <small> <a href="#">more info</a> </small>
                        <form>
                            <div className="form-row row">
                                <div className="form-group col-md-6 col-sm-12">
                                    <label for="chooseColor">Choose color</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    <option>Large select</option>
                                </div>
                                <div className="form-group col-md-6 col-sm-12">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;