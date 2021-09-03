import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import components from "./components";
import { layerStyles } from "./layerStyles";

export const theme = extendTheme(
  { components, layerStyles },
  withDefaultColorScheme({ colorScheme: "green" })
);

export default theme;
