import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCartAction ,removeItemFromCart} from '../../app/actionSlices/cartSlice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const {id} = props
  const dispatch = useDispatch()

  const increaseQuantityClickHandler = ()=>{
    dispatch(addItemToCartAction({ title, quantity, total, price,id }))
  }
  const decreaseQuantityClickHandler = ()=>{
    console.log('clicked',id)
    dispatch(removeItemFromCart(id))
 
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityClickHandler}>-</button>
          <button onClick={increaseQuantityClickHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
