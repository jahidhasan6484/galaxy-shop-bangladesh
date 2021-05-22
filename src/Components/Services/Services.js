import React from 'react';
import featureServices from '../../images/02.png';
import shipping from '../../images/01.png';
import support from '../../images/03.png';

const Services = () => {
    return (
        <section class="container aaaaa mt-5">
            <div class="row">
                <div class="col-md-3 col-sm-6 text-center mb-5"><img class="d-block w-20 img-thumbnail rounded mx-auto mb-4" src={featureServices} alt="Money Back" />
                    <h6 class="mb-2">Our Feature Services</h6>
                    <p class="text-sm text-muted mb-2">Never Mind /Care Pack Campaign</p>
                </div>
                <div class="col-md-3 col-sm-6 text-center mb-5"><img class="d-block w-20 img-thumbnail rounded mx-auto mb-4" src={shipping} alt="Shipping" />
                    <h6 class="mb-2">Free Nationwide Shipping</h6>
                    <p class="text-sm text-muted mb-2">Free shipping for all orders</p>
                </div>
                <div class="col-md-3 col-sm-6 text-center mb-5"><img class="d-block w-20 img-thumbnail rounded mx-auto mb-4" src={support} alt="Support" />
                    <h6 class="mb-2">24/7 Customer Support</h6>
                    <p class="text-sm text-muted mb-2">Friendly 24/7 customer support</p>
                </div>
                <div class="col-md-3 col-sm-6 text-center mb-5"><img class="d-block w-5 img-thumbnail rounded mx-auto mb-4" src={featureServices} alt="Payment" />
                    <h6 class="mb-2">Cash on Delivery</h6>
                    <p class="text-sm text-muted mb-2">We accept COD / We accept bKash</p>
                </div>
            </div>
        </section>
    );
};

export default Services;