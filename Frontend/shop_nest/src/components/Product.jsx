import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { imageUrl } from 'utils/image';


const Product = ({ product, addToCart }) => {
  return (
    <Grid item xs={6} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={imageUrl(product.image)} alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
        ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <button className='filter-button' size="small" onClick={() => addToCart(product)}>Add to Cart</button>
      </CardActions>
    </Card>


     {/* <div className="product">
     <div className='img-wrapper'>
         <img className="img" src={imageUrl(product.image)} alt={product.name} />
       </div>
       <h2>{product.name}</h2>
       <p>{product.price}</p>
       <button onClick={() => addToCart(product)}>Add to Cart</button>
     </div> */}
    </Grid>
  );
};

export default Product;