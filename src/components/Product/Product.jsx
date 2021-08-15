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

const Product = ({
  product: {
    name,
    description,
    price: { formatted_with_symbol },
    media: { source },
  },
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title={name} image={source} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{formatted_with_symbol}</Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
