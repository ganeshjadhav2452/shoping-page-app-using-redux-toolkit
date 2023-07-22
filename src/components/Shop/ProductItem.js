import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import {addItemToCartAction} from '../../app/actionSlices/cartSlice'
const ProductItem = (props) => {
  const { title, price, description ,id} = props;
  const dispatch = useDispatch()

  const addToCartClickHandler=()=>{
    dispatch(addItemToCartAction({
      id,
      price,
      description,
      title
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
