/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    Paper: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
      color: "rgba(255, 255, 255, 0.75)",
      borderRadius: "16px",
      overflow: "hidden",
    },
    Button: {
      padding: 0,
    },
    Symbol: {
      padding: theme.spacing(0.3),
    },
  })
);

/**
 * Button that represent a phone key button
 */
const Key = ({ primarySymbol, secondarySymbols, onClick }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.Paper}>
      <Button
        className={classes.Button}
        color="primary"
        onClick={onClick}
        variant="contained"
        fullWidth
      >
        <Box display="flex" alignItems="center" height="7em">
          <Grid container alignItems="center" justify="center">
            {primarySymbol !== null ? (
              <Grid item xs={12} container justify="center" alignItems="center">
                {typeof primarySymbol !== "object" ? (
                  <Typography variant="h3" component="span">
                    {primarySymbol}
                  </Typography>
                ) : (
                  primarySymbol
                )}
              </Grid>
            ) : null}

            <Grid item xs={12}>
              {secondarySymbols.map((secondarySymbol) => (
                <Typography
                  key={secondarySymbol}
                  className={classes.Symbol}
                  variant="button"
                >
                  {secondarySymbol}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Button>
    </Paper>
  );
};

Key.propTypes = {
  /**
   The main element of the key
   */
  primarySymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   Collection of elements that will be located under the main one
   */
  secondarySymbols: PropTypes.arrayOf(PropTypes.string),
  /**
   Callback function that will be called when the key button is pressed
   */
  onClick: PropTypes.func,
};

Key.defaultProps = {
  primarySymbol: null,
  secondarySymbols: [],
  onClick: (e) => e,
};

export default Key;
