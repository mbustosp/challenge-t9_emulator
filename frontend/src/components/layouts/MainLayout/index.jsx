/**
 * Core dependencies
 */
import PropTypes from "prop-types";
import Div100vh from "react-div-100vh";

/**
 * UI components
 */
import { Container, Box, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    content: {
      overflowY: "auto",
    },
  })
);

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Div100vh>
      <Box width="100%" height="100%" bgcolor="secondary.main">
        <Container maxWidth="sm" className={classes.root}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            className={classes.content}
            py={2}
            height="100%"
          >
            {children}
          </Box>
        </Container>
      </Box>
    </Div100vh>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
