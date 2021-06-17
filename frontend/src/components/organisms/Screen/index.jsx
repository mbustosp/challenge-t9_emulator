/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import { Box, createStyles, makeStyles } from "@material-ui/core";
import Suggestions from "../../molecules/Suggestions";
import ScreenText from "../../molecules/ScreenText";

const useStyles = makeStyles(() =>
  createStyles({
    Wrapper: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      boxShadow: "inset 3px 3px 15px 3px rgba(0,0,0,0.1)",
    },
    Screen: {
      overflowY: "auto",
    },
    Input: {
      padding: "16px",
      width: "100%",
    },
    TextArea: {
      width: "100%",
      height: "100%",
    },
    Suggestions: {
      overflowX: "auto",
      overflowY: "hidden",
    },
  })
);

/**
 *  Container that orchestrates the interactions of the text on the screen and the
 *  suggestions.
 */
const Screen = ({
  words,
  activeWord,
  suggestedWords,
  onSuggestionPick,
  loadingSuggestions,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.Wrapper}
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      px={2}
      pt={1}
      borderRadius="16px"
    >
      <Box
        className={classes.Screen}
        width="100%"
        display="flex"
        flexWrap="wrap"
        pt={1}
        pb={1}
      >
        <ScreenText words={words} activeWord={activeWord} />
      </Box>
      <Box
        py={1}
        width="100%"
        minHeight="60px"
        classes={{ root: classes.Suggestions }}
      >
        {activeWord ? (
          <Suggestions
            words={suggestedWords}
            onWordChoose={onSuggestionPick}
            loading={loadingSuggestions}
          />
        ) : null}
      </Box>
    </Box>
  );
};

Screen.propTypes = {
  /**
   Words that will be printed on the screen
   */
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      chosen: PropTypes.string,
    })
  ),
  /**
   Word that is active
   */
  activeWord: PropTypes.shape({
    word: PropTypes.string,
    idx: PropTypes.number,
    chosen: PropTypes.string,
  }),
  /**
   Collection of suggested words
   */
  suggestedWords: PropTypes.arrayOf(PropTypes.string),
  /**
   Callback function that will be invoked when a suggested word is a clicked
   */
  onSuggestionPick: PropTypes.func,
  /**
   True will show a loading message in the Suggestion component
   */
  loadingSuggestions: PropTypes.bool,
};

Screen.defaultProps = {
  words: [],
  activeWord: {},
  suggestedWords: [],
  onSuggestionPick: (word) => word,
  loadingSuggestions: false,
};

export default Screen;
