/**
 * Core dependencies
 */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

/**
 * UI components
 */
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Word from "../../atoms/Word";

const useStyles = makeStyles(() =>
  createStyles({
    "@keyframes blinker": {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    Caret: {
      animationName: "$blinker",
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  })
);

/**
  Display texts, it breaks words if they overflow horizontally and makes the
  active word focusable.
 */
const ScreenText = ({ words, activeWord }) => {
  const classes = useStyles();
  const caretRef = useRef();
  useEffect(() => caretRef.current.scrollIntoView());
  return (
    <>
      <Typography
        variant="h5"
        style={{
          wordBreak: "break-word",
          display: "inline",
          textAlign: "left",
        }}
      >
        {words.slice(0, -1).map((word) => word.chosen || word.digits)}
        {words.length ? (
          <Word
            active
            word={
              activeWord?.chosen ||
              activeWord?.word ||
              words[words.length - 1].chosen
            }
          />
        ) : null}
      </Typography>
      <Divider
        className={classes.Caret}
        orientation="vertical"
        flexItem
        ref={caretRef}
      />
    </>
  );
};

ScreenText.propTypes = {
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
   Word that will be focusable
   */
  activeWord: PropTypes.shape({
    word: PropTypes.string,
    idx: PropTypes.number,
    chosen: PropTypes.string,
  }),
};

ScreenText.defaultProps = {
  words: [],
  activeWord: {},
};

export default ScreenText;
