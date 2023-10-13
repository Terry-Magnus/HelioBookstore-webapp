import { BsCart2 } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { toggleCartHidden } from "../../redux/slices/cartSlice"
import "./cart-icon.styles.scss"

const CartIcon = () => {
    const dispatch = useDispatch()
    const handleCartToggle = () => {
        dispatch(toggleCartHidden())
    }
    return (
        <div className="cart-icon" onClick={handleCartToggle}>
            <BsCart2 className="shopping-icon" />
            <div className="item-count">0</div>
        </div>
    )
}

export default CartIcon