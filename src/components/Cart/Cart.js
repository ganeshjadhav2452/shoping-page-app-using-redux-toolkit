import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
  const { cartStatus, cartData } = useSelector((state) => state.cart);
  console.log(cartData);
  return (
    <Fragment>
      {cartStatus && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartData.map((product)=>console.log(product.id))}
            {cartData.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                item={{
                  title: product.title,
                  quantity: product.quantity,
                  total: product.totalPrice,
                  price: product.price,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
