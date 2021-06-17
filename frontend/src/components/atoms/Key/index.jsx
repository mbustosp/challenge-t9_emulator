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
  Grid,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    Wrapper: {
      overflow: "hidden",
      borderRadius: "16px",
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
    <Box boxShadow={1} className={classes.Wrapper}>
      <Button
        className={classes.Button}
        color="primary"
        onClick={onClick}
        variant="contained"
        fullWidth
      >
        <Box display="flex" alignItems="center">
          <Grid container alignItems="center" justify="center">
            {primarySymbol !== null ? (
              <Grid
                item
                xs={12}
                sm={6}
                container
                justify="center"
                alignItems="center"
              >
                {typeof primarySymbol !== "object" ? (
                  <Typography variant="h3" component="span">
                    {primarySymbol}
                  </Typography>
                ) : (
                  primarySymbol
                )}
              </Grid>
            ) : null}

            <Grid item xs={12} sm={6}>
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
    </Box>
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
