import { Grid, Box, Typography } from "@material-ui/core";

export const Colors = () => (
  <Grid container spacing={1}>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
        <Typography>primary.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
        <Typography>secondary.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="error.main" color="error.contrastText" p={2}>
        <Typography>error.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
        <Typography>warning.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="info.main" color="info.contrastText" p={2}>
        <Typography>info.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="success.main" color="success.contrastText" p={2}>
        <Typography>success.main</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="text.primary" color="background.paper" p={2}>
        <Typography>text.primary</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="text.secondary" color="background.paper" p={2}>
        <Typography>text.secondary</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box bgcolor="text.disabled" color="background.paper" p={2}>
        <Typography>text.disabled</Typography>
      </Box>
    </Grid>
  </Grid>
);

export default {
  title: "Theme/Colors",
};
