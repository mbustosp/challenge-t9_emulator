/**
 * Core dependencies
 */
import { useState } from "react";
import useWriter from "./hooks/useWriter";
import useWords from "./hooks/useWords";
import getT9KeyHandler from "./utils/getT9KeyHandler";

/**
 * UI components
 */
import { useColorScheme } from "use-color-scheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";
import Screen from "./components/organisms/Screen";
import Keyboard from "./components/molecules/Keyboard";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const { scheme } = useColorScheme();
  const [isT9Enabled, setT9Mode] = useState(true);
  const [getSuggestions, loadingSuggestions] = useWriter(isT9Enabled);
  const [
    text,
    activeWord,
    words,
    suggestedWords,
    setSuggestionForWord,
    setText,
    rotateSuggestion,
  ] = useWords(getSuggestions);
  const handlePressedKey = getT9KeyHandler(text, setText, rotateSuggestion);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
        <MainLayout>
          <Box display="flex" justifyContent="flex-end" width="100%" mb={1}>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={(e) => setT9Mode(e.target.checked)}
                  checked={isT9Enabled}
                />
              }
              label={
                <Typography color="primary">
                  {isT9Enabled ? "T9 Enabled" : "T9 Disabled"}
                </Typography>
              }
            />
          </Box>
          <Box width="100%" height="100%" overflow="auto">
            <Screen
              words={words}
              activeWord={activeWord}
              suggestedWords={suggestedWords}
              loadingSuggestions={loadingSuggestions}
              onSuggestionPick={(chosenWord) =>
                setSuggestionForWord(chosenWord, activeWord.idx)
              }
            />
          </Box>

          <Box pt={2} pb={1} px={1} justify="center">
            <Keyboard onKeyPress={handlePressedKey} />
          </Box>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
