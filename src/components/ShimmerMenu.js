import { Box, Card, Grid, Skeleton } from "@mui/material";

const ShimmerMenu = () => {
  return (
    <>
      {/* <h1>Heyyyyyyyyyyyyyyyy</h1> */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", mb: 4 }}>
          <Skeleton
            variant="rectangular"
            width={250}
            height={140}
            sx={{ borderRadius: 2 }}
          />
          <Box sx={{ ml: 4, width: "100%" }}>
            <Skeleton width="60%" height={40} />
            <Skeleton width="40%" height={30} sx={{ mt: 1 }} />
            <Box sx={{ display: "flex", mt: 2, gap: 3 }}>
              <Skeleton width="20%" height={20} />
              <Skeleton width="20%" height={20} />
              <Skeleton width="30%" height={20} />
            </Box>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Skeleton variant="rectangular" height={140} />
                <Box sx={{ p: 2 }}>
                  <Skeleton width="80%" height={30} />
                  <Skeleton width="60%" height={20} sx={{ mt: 1 }} />
                  <Skeleton width="100%" height={20} sx={{ mt: 2 }} />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ShimmerMenu;
