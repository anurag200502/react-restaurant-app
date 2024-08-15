import { Box, Grid, Skeleton } from "@mui/material";

const Shimmer = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {Array.from(new Array(7)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton width="80%" height={30} sx={{ mt: 2, mb: 1 }} />
              <Skeleton width="60%" height={20} />
              <Skeleton width="100%" height={20} sx={{ mt: 2 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shimmer;
