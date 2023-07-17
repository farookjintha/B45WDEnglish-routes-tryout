import './Card.css';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

    const goToProduct = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='card-container'>
            <h1>{props.product.name}</h1>
            <h2>Price: Rs.{props.product.price}</h2>
            <p>Category: {props.product.category}</p>
            {props.product.description && <p>Description: {props.product.description}</p>}
            {props.product.specification && <p>Specification: {props.product.specification}</p>}
            {props.product.offer && <p>Offer: {props.product.offer}</p>}

            <button onClick={() => goToProduct(`${props.product.id}`)}>Show Details</button>
        </div>
    )
}


export default Card;