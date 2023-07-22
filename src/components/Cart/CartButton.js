import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartStatusChanger } from '../../app/actionSlices/cartSlice';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const {totalQuantity} = useSelector((state)=> state.cart)
 
  return (
    <button className={classes.button} onClick={()=> dispatch(cartStatusChanger())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
