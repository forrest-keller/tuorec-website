import {
  extendTheme,
  ThemeTypings,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import components from "./components";

const theme = extendTheme(
  { components },
  withDefaultColorScheme({ colorScheme: "green" })
);

export default theme;
