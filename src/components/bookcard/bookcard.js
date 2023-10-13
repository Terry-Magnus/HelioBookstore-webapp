// import ItemPage from "../../pages/itempage/itempage";
import { useDispatch } from "react-redux";
import { SecondaryBtn } from "../buttons/custom-buttons";
import { addItem } from "../../redux/slices/cartSlice";
import "./bookcard.scss"

const BookCard = (props) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addItem(props));
    };
    return (
        <div className="item-card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <SecondaryBtn onClick={handleAddToCart}>Add to Cart</SecondaryBtn>
        </div >
    );
}
{/* <ItemPage
                title={props.title}
                author={props.author}
                image={props.image}
                description={props.description}
                rating={props.rating}
                genre={props.genre}
            /> */}
export default BookCard