import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  CardContent,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product: { name, description, price, image } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title={name} image={image} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
