import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem, toggleCartHidden } from '../../redux/slices/cartSlice';
import { SecondaryBtn } from '../buttons/custom-buttons';
import "./cart.styles.scss"

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.items);



    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className='cart'>
            <div className='cart-dropdown'></div>
            <SecondaryBtn>Go to Checkout</SecondaryBtn>
        </div>
    )
    // Render the cart and include buttons to clear the cart and remove items
};

export default Cart
