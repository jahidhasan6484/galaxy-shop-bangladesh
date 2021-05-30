import React from 'react';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <section>
                                <h5 className="mt-5 mb-5">Get In Touch With Us</h5>
                                <p className="mt-2">Samsung Call Center:</p>
                                <ul className="list-unstyled text-sm">
                                    <li><span >08000 300 300 (Toll Free)</span></li>
                                    <li><span >09612 300 300</span></li>
                                    <li><span >Regular Timing: 24/7</span></li>
                                    <li><span >Lockdown (Covid-19) Timing:</span></li>
                                    <li><span >07:00 AM ~ 05:00 PM (7days/week)</span></li>
                                </ul>
                                <p><a href="#">Email: feedback.bd@samsung.com</a></p>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <section className="footerSocial">
                                <h5 className="mt-5 mb-5">Follow Us On</h5>
                                <a className="mt-2" href="https://www.facebook.com/SamsungBangladesh" target="_blank"> <img src={facebook}></img> </a>
                                <a className="mt-2" href="https://www.instagram.com/samsungmobilebd/?igshid=ldcbao9pgi84" target="_blank"><img src={instagram}></img> </a>
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <section>
                                <h5 className="mt-5 mb-5">Be Informed</h5>
                                <form className="row mt-2" action="#" method="post" target="_blank">
                                    <div className="col-sm-9">
                                        <div className="mb-5">
                                            <input className="form-control" type="email" name="EMAIL" placeholder="Your e-mail" />
                                        </div>
                                        <p>Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</p>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="branding text-center mt-5 mb-5">
                    <p>© SAMSUNG All rights reserved.<br></br> Developed by &nbsp;<a href="https://unruffled-kowalevski-4c8007.netlify.app/" target="_blank"> &nbsp;Md. Jahid Hasan</a></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;