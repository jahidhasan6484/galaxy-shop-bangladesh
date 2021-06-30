import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import logo from '../../images/logo.png';
import search from '../../images/search.svg';
import signIn from '../../images/signIn.svg';
import cart from '../../images/cart.svg';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", info.category);
        formData.append("model", info.model);
        formData.append("previousPrice", info.previousPrice);
        formData.append("presentPrice", info.presentPrice);
        formData.append("productStatus", info.productStatus);

        fetch("http://localhost:4000/addAPhone", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="mb-5">
                <nav class="navbar navbar-expand-lg navbar-light bg-light mainMenu">
                    <div class="container-fluid">
                        <Link to="/" class="logo"><img src={logo} alt="Samsung"></img></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" >
                            <form class="d-flex searchBar">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <img src={search} alt="search"></img>
                            </form>
                        </div>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <div class="d-flex justify-content-around">
                                <Link to="/login"><img className="img-fluid navImg" src={signIn} alt="login"></img></Link>
                                <Link to=""><img className="img-fluid navImg" src={cart} alt="cart"></img></Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav class="navbar downMenu">
                    <div class="container-fluid d-flex justify-content-center">
                        <div>
                            <span className="subMenu">Home</span>
                            <span className="subMenu">Help &amp; Support</span>
                            <span className="subMenu" onClick={handleShow}>Add Product</span>
                        </div>
                    </div>
                </nav>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a Blog</Modal.Title>
                    </Modal.Header>
                    <form className="modalForm">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category</label>
                            <textarea onBlur={handleBlur} type="text" className="form-control" name="category" placeholder="Product Category" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Model</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="model" placeholder="Product Model" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Previous Price</label>
                            <textarea onBlur={handleBlur} type="text" className="form-control" name="previousPrice" placeholder="Previous Price" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Present Price</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="presentPrice" placeholder="Present Price" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Status</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="productStatus" placeholder="Product Status" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" className="button" onClick={() => handleSubmit()}>Submit</button>
                    </form>
                </Modal>
            </div>
        </>
    );
};

export default Header;