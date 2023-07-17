import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Product = ({ products }) => {
    const { productId }  = useParams();
    const [product, setProduct] = useState(null)
    // const { productId } = params;
    
    const findProduct = () => {
        const data = products.find((prod) => {
            if(prod.id === productId){
                return prod;
            }
        });

        setProduct(data);
    }

    useEffect(() => {
        findProduct();
    }, []);


    return (
        <div>
            <h1>Product Details</h1>
            {
                !!product && <div>
                <h1>{product.name}</h1>
                <h2>Price: Rs.{product.price}</h2>
                <p>Category: {product.category}</p>
                {product.description && <p>Description: {product.description}</p>}
                {product.specification && <p>Specification: {product.specification}</p>}
                {product.offer && <p>Offer: {product.offer}</p>}
            </div>
            }
        </div>
    )
}

export default Product;