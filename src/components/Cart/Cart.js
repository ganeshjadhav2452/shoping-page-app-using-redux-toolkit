import { Fragment } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Cart = (props) => {
  const {cartStatus} = useSelector((state) => state.cart)
  return (
    <Fragment>
  { cartStatus && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>}
    </Fragment>
  );
};

export default Cart;