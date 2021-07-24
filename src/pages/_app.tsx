import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "utilities/theme";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default CustomApp;
