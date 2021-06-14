/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import { Box, Chip, Typography, CircularProgress } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

/**
  Suggestions is a list of words displayed in chips
 */
const Suggestions = ({ words, onWordChoose, loading }) => (
  <Box display="flex" alignItems="center" minHeight="40px">
    {loading ? (
      <>
        <Box mx={2}>
          <CircularProgress color="primary" size={16} />
        </Box>
        <Typography variant="subtitle1">Loading suggestions</Typography>
      </>
    ) : (
      words.map((word) => (
        <Grow in={!loading} appear timeout={1000} key={word}>
          <Box px={0.5}>
            <Chip
              label={word}
              color="primary"
              onClick={() => onWordChoose(word)}
            />
          </Box>
        </Grow>
      ))
    )}
  </Box>
);

Suggestions.propTypes = {
  /**
   Words that will be displayed
   */
  words: PropTypes.arrayOf(PropTypes.string),
  /**
   Callback function that will be invoked when one of the words is clicked
   */
  onWordChoose: PropTypes.func,
  /**
   If true it will show a loading message with a spinner
   */
  loading: PropTypes.bool,
};

Suggestions.defaultProps = {
  words: [],
  onWordChoose: () => true,
  loading: false,
};

export default Suggestions;
