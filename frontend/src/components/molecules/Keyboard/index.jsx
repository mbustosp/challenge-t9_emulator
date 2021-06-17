/**
 * Core dependencies
 */
import PropTypes from "prop-types";

/**
 * UI components
 */
import { Grid, Box } from "@material-ui/core";
import keysMapping from "./keysMapping";
import Key from "../../atoms/Key";

const Keyboard = ({ onKeyPress }) => {
  const oneToNineKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box width="100%">
      <Grid container spacing={1}>
        {oneToNineKeys.map((key) => (
          <Grid item xs={4} key={key}>
            <Key
              primarySymbol={key}
              secondarySymbols={keysMapping[key].symbols.split("")}
              onClick={() => onKeyPress(keysMapping[key])}
            />
          </Grid>
        ))}
        <Grid item xs={4}>
          <Key
            primarySymbol={keysMapping.NEXT.value}
            secondarySymbols={["Next"]}
            onClick={() => onKeyPress(keysMapping.NEXT)}
          />
        </Grid>
        <Grid item xs={4}>
          <Key
            primarySymbol={keysMapping[0].value}
            secondarySymbols={["Space"]}
            onClick={() => onKeyPress(keysMapping["0"])}
          />
        </Grid>
        <Grid item xs={4}>
          <Key
            primarySymbol={keysMapping.DELETE.value}
            secondarySymbols={["Delete"]}
            onClick={() => onKeyPress(keysMapping.DELETE)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Keyboard.propTypes = {
  onKeyPress: PropTypes.func,
};

Keyboard.defaultProps = {
  onKeyPress: (key) => key,
};
export default Keyboard;
