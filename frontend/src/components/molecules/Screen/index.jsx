import PropTypes from "prop-types";
import { Box, createStyles, makeStyles, InputBase } from "@material-ui/core";

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
 * Read only input component that displays multiline text
 */
const Screen = ({ text, SuggestionsComponent }) => {
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
      borderRadius="16px"
    >
      <Box className={classes.Screen} width="100%">
        <InputBase
          classes={{ root: classes.Input }}
          autoFocus
          multiline
          margin="dense"
          value={text}
          inputProps={{ className: classes.TextArea }}
        />
      </Box>
      <Box
        py={1}
        width="100%"
        minHeight="60px"
        classes={{ root: classes.Suggestions }}
      >
        {SuggestionsComponent}
      </Box>
    </Box>
  );
};

Screen.propTypes = {
  /**
   Text that will be printed on the input
   */
  text: PropTypes.string,
  /**
   Component that will be rendered in the suggestion area
   */
  SuggestionsComponent: PropTypes.node,
};

Screen.defaultProps = {
  text: "",
  SuggestionsComponent: null,
};

export default Screen;
