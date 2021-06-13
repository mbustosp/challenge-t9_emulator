/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import { Container, Box, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
    },
  })
);

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      bgcolor="secondary.main"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Container maxWidth="xs" className={classes.root}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          height="100%"
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
