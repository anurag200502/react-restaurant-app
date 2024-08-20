import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  CircularProgress,
} from "@mui/material";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { CDN_URL } from "../utils/constant";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.carousel || [];

  return (
    <Box sx={{ mt: 4, ml: 4, mr: 4, mb: 4 }}>
      <Box sx={{ display: "flex", mb: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
          sx={{ width: 250, borderRadius: 2 }}
        />
        <Box sx={{ ml: 4 }}>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {cuisines.join(", ")}
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
              <AiOutlineStar />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {avgRating}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
              <FiClock />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {deliveryTime} MINS
              </Typography>
            </Box>
            <Typography variant="body2">{costForTwoMessage}</Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="h5">Menu</Typography>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{ mt: 1, mb: 3 }}
      >
        {itemCards.length} items
      </Typography>
      <Grid container spacing={3}>
        {itemCards.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.dish.info.id}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="250px"
                image={CDN_URL + item.dish.info.imageId}
                alt="Menu Item"
              />
              <CardContent>
                <Typography variant="h6">{item.dish.info.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ₹
                  {item.dish.info.price / 100 ||
                    item.dish.info.defaultPrice / 100}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  {item.dish.info.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantMenu;
