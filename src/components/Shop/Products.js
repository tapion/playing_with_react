import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  const itemList = useSelector((state) => state.product.itemsList);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemList.map(item => {
          return (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
