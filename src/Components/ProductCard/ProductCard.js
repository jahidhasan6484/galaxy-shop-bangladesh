import React from 'react';
import wishlist from '../../images/wishlist.svg';
import details from '../../images/details.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { name, photo, category, previousPrice, price } = props.product;
    return (
        <div class="col-md-3">
            <div class="card mb-5">
                <a className="product-thumb" href="#"><img className="img-fluid productImg" src={photo} alt="Product"></img></a>
                <div class="card-body">
                    <div className=" text-center">
                        <a href="#"><small className="category" className="category">{category}</small></a>
                        <a href="#"><h5 className="product-title mb-4">{name}</h5></a>
                        <span className="product-price">
                            <del>{previousPrice} </del>৳{price}
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
    );
};

export default ProductCard;