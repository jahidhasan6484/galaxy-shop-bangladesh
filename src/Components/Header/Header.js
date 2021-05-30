import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import search from '../../images/search.svg';
import signIn from '../../images/signIn.svg';
import cart from '../../images/cart.svg';

const Header = () => {
    return (
        <>
            <div className="mb-5">
                <nav class="navbar navbar-expand-lg navbar-light bg-light mainMenu">
                    <div class="container-fluid">
                        <Link to="/" class="logo"><img src={logo}></img></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" >
                            <form class="d-flex searchBar">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <img src={search}></img>
                            </form>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <div class="d-flex justify-content-around">
                                <Link to=""><img className="img-fluid navImg" src={signIn}></img></Link>
                                <Link to=""><img className="img-fluid navImg" src={cart}></img></Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav class="navbar downMenu">
                    <div class="container-fluid d-flex justify-content-center">
                        <div>
                            <a href="/" class="subMenu">Home</a>
                            <a href="#" class="subMenu">Help &amp; Support</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;