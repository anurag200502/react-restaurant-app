import { TextField, Button, IconButton } from "@mui/material";
import { IoSearchCircle, IoArrowBackCircle } from "react-icons/io5";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "./OfflineGame";

const Body = () => {
  // State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false); // New state for filter status

  // const onlineStatus = useOnlineStatus();

  // if (onlineStatus === false) {
  //   return (
  //     <div style={{ textAlign: "center", marginTop: "50px" }}>
  //       <h2
  //         style={{
  //           color: "#1976d2",
  //           fontSize: "24px",
  //           fontWeight: "bold",
  //           marginBottom: "20px",
  //           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  //         }}
  //       >
  //         You're offline! Try this game while you wait:
  //       </h2>
  //       <OfflineGame />
  //     </div>
  //   );
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  // Function to handle search
  const handleSearch = (text) => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  // Function to handle filter button click
  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
    setIsFiltered(true); // Set filter status to true
  };

  // Function to handle back button click
  const handleBack = () => {
    setFilteredRestaurant(listOfRestaurants);
    setIsFiltered(false); // Reset filter status
    setSearchText(""); // Clear search text
  };  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" style={{ marginBottom: "20px" }}>
      <div className="filter" style={{ marginBottom: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <IconButton edge="end">
                <IoSearchCircle />
              </IconButton>
            ),
          }}
          sx={{
            width: 400,
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px",
            },
          }}
        />
        {!isFiltered ? (
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              marginLeft: "0px",
              backgroundColor: "#1976d2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#155a8a",
              },
            }}
            onClick={handleFilter}
          >
            Top Rated Restaurants
          </Button>
        ) : (
          <IconButton
            onClick={handleBack}
            sx={{
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#155a8a",
              },
              marginLeft: "0px",
            }}
          >
            <IoArrowBackCircle size={30} />
          </IconButton>
        )}
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}{" "}
      </div>
    </div>
  );
};

export default Body;
