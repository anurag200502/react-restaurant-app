import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`${CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant"
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap>
          {cuisines.join(", ")}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AiOutlineStar />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {avgRating}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FiClock />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {sla.deliveryTime} mins
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {costForTwo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
