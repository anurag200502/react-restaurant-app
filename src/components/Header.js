import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import {
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        boxShadow: "none",
        borderRadius: "0 0 16px 16px", // Rounded bottom corners
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={LOGO_URL}
            alt="App Logo"
            style={{ width: 50, height: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{ ml: 2, fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}
          >
            WTF! Where's The Food
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "medium",
              "&:hover": { bgcolor: "secondary.main" },
            }}
            startIcon={<FaHome />}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "medium",
              "&:hover": { bgcolor: "secondary.main" },
            }}
            startIcon={<FaInfoCircle />}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "medium",
              "&:hover": { bgcolor: "secondary.main" },
            }}
            startIcon={<FaPhone />}
          >
            Contact Us
          </Button>
          <Button
            component={Link}
            to="/cart"
            color="inherit"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "medium",
              "&:hover": { bgcolor: "secondary.main" },
            }}
            startIcon={<FaShoppingCart />}
          >
            Cart
          </Button>
          <IconButton
            variant="contained"
            color="secondary"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            sx={{
              borderRadius: "50%",
              "&:hover": { bgcolor: "secondary.dark" },
            }}
          >
            {btnName === "Login" ? <FaUser /> : <FaSignOutAlt />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
