import Card from "../Card/Card";
import {useState} from 'react';
import './products.css';

const Products = (props) => {
    const { products } = props;

    const [content, setContent] = useState('All Products');


    return (

       <div>
            <h1>Products</h1>
            <div className="products-container">
            {products && products.length && products.map((product, index) => (
                <Card content={content}  product={product} key={index} />
            ))}
            </div>
       </div>
    )
}

export default Products;