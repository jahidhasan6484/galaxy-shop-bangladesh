import React, { useEffect, useState } from 'react';
import data from '../Data/data.json';
import ProductCard from '../ProductCard/ProductCard';

const LoadProducts = () => {
    const [products, setProducts] = useState([data]);
    useEffect(() => {
        setProducts(data);
    }, [])
    return (
        <div className="container">
            <h3 className="text-center mb-5">Featured Products</h3>
            <div className="row">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            <div className="text-center mb-5">
                <button className="btn viewAllProducts">View All Products</button>
            </div>
        </div>
    );
};

export default LoadProducts;