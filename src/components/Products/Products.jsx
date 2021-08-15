import { Grid } from "@material-ui/core";
import productsData from "./productsData.js";
import Product from "../Product/Product.jsx";

import useStyles from "./styles.js";

const productList = productsData.map((product) => (
  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
    <Product product={product} />
  </Grid>
));

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent="center">
        {productList}
      </Grid>
    </main>
  );
};

export default Products;
