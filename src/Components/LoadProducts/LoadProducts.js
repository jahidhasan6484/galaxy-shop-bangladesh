import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const LoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://mocki.io/v1/07090c30-805f-4492-a97c-fccfc4bd23b9`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
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