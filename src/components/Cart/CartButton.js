import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartStatusChanger } from '../../app/actionSlices/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

 
  return (
    <button className={classes.button} onClick={()=> dispatch(cartStatusChanger())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
