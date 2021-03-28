import { ThemeProvider } from "@material-ui/styles";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../utils/theme";
import { Provider } from "next-auth/client";

export default function Providers({ session, children }) {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Provider session={session}>{children}</Provider>
    </ThemeProvider>
  );
}
