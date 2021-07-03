import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slider4 from '../../images/Slider-4.png';
import Slider5 from '../../images/slide_5.jpg';
import Slider6 from '../../images/slide_6.png';
import Slider7 from '../../images/slide_7.jpg';
import miniLogo from '../../images/mini_6.png';

const Home = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide home" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active carouselDesign">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 leftCarousel">
                                <Fade bottom>
                                    <img className="d-inline-block mt-5 mb-4 miniLogo img-fluid" src={miniLogo} alt="Samsung Mini Logo" />
                                    <div className="h2 text-body mb-2 pt-1">অর্ডার করুন ঘরে বসে</div>
                                    <div className="h2 text-body mb-4 pb-1"><span className="text-medium">ফোন পৌঁছে যাবে আপনার কাছে!</span></div>
                                </Fade>
                                <Zoom>
                                    <button className="btn btn-primary">View Product</button>
                                </Zoom>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={Slider4} alt="slider4"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item carouselDesign">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 leftCarousel">
                                <Fade bottom>
                                    <img className="d-inline-block mt-5 mb-4 miniLogo img-fluid" src={miniLogo} alt="Samsung Mini Logo" />
                                    <div className="h2 text-body mb-2 pt-1">অর্ডার করুন ঘরে বসে</div>
                                    <div className="h2 text-body mb-4 pb-1"><span className="text-medium">ফোন পৌঁছে যাবে আপনার কাছে!</span></div>
                                </Fade>
                                <Zoom>
                                    <button className="btn btn-primary">View Product</button>
                                </Zoom>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={Slider5} alt="slider5"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item carouselDesign">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 leftCarousel">
                                <Fade bottom>
                                    <img className="d-inline-block mt-5 mb-4 miniLogo img-fluid" src={miniLogo} alt="Samsung Mini Logo" />
                                    <div className="h2 text-body mb-2 pt-1">অর্ডার করুন ঘরে বসে</div>
                                    <div className="h2 text-body mb-4 pb-1"><span className="text-medium">ফোন পৌঁছে যাবে আপনার কাছে!</span></div>
                                </Fade>
                                <Zoom>
                                    <button className="btn btn-primary">View Product</button>
                                </Zoom>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={Slider6} alt="slider6"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item carouselDesign">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 leftCarousel">
                                <Fade bottom>
                                    <img className="d-inline-block mt-5 mb-4 miniLogo img-fluid" src={miniLogo} alt="Samsung Mini Logo" />
                                    <div className="h2 text-body mb-2 pt-1">অর্ডার করুন ঘরে বসে</div>
                                    <div className="h2 text-body mb-4 pb-1"><span className="text-medium">ফোন পৌঁছে যাবে আপনার কাছে!</span></div>
                                </Fade>
                                <Zoom>
                                    <button className="btn btn-primary">View Product</button>
                                </Zoom>
                            </div>
                            <div className="col-md-6 rightCarousel">
                                <img className="img-fluid" src={Slider7} alt="slider7"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Home;