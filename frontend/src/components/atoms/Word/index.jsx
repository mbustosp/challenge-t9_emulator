/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import { ButtonBase, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: (active) => ({
      textAlign: "left",
      verticalAlign: "top",
      textDecoration: active ? "underline" : "inherit",
      wordWrap: "break-word",
      display: "inline !important",
      fontWeight: 700,
    }),
    focusVisible: {
      border: "1px solid red",
      borderColor: theme.palette.primary.dark,
    },
  })
);

/**
 * Button component used to render attention on the given word
 */
const Word = ({ word, active }) => {
  const classes = useStyles(active);

  return (
    <ButtonBase
      component="span"
      classes={{
        root: classes.root,
        focusVisible: classes.focusVisible,
      }}
    >
      {word}
    </ButtonBase>
  );
};

Word.propTypes = {
  /**
   Word that will be printed on the button
   */
  word: PropTypes.string.isRequired,
  /**
   If true, it will render a decoration
   */
  active: PropTypes.bool,
};

Word.defaultProps = {
  active: false,
};

export default Word;
