import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
    id:1,
    title:'Test 1',
    price:6,
    description:'This is a first product - amazing!',
  },
  {
    id:2,
    title:'Test 2',
    price:6,
    description:'This is a first product - amazing!',
  },
  {
    id:3,
    title:'Test 3',
    price:6,
    description:'This is a first product - amazing!',
  },
  {
    id:4,
    title:'Test 4',
    price:6,
    description:'This is a first product - amazing!',
  },
  {
    id:5,
    title:'Test 5',
    price:6,
    description:'This is a first product - amazing!',
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {dummyData.map((product)=> <ProductItem key={product.id}
       id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
