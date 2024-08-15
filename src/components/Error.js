import { useRouteError } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <IoWarningOutline size={100} color="#ff5722" />
      <Typography variant="h3" sx={{ mt: 2, mb: 1, fontWeight: "bold" }}>
        Oops!!!!
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Something Went Wrong!
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: "#757575" }}>
        {err.status}: {err.statusText}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#155a8a",
          },
        }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default Error;
