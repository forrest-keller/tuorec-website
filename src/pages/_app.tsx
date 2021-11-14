import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import {
  GiCalendar,
  GiCampingTent,
  GiFaceToFace,
  GiMailbox,
} from "react-icons/gi";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "components";
import { client, theme } from "utilities";
import { Metadata } from "components/metadata";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Metadata />
        <Layout
          logoLink={{ imageSrc: "/logo.webp", href: "/" }}
          centerLinks={[
            {
              key: "gear",
              text: "Gear",
              href: "/rentals",
              icon: GiCampingTent,
            },
            { key: "posts", text: "Posts", href: "/posts", icon: GiMailbox },
            {
              key: "leaders",
              text: "Leaders",
              href: "/people",
              icon: GiFaceToFace,
            },
          ]}
          rightLinks={[
            {
              key: "facebook",
              text: "Facebook",
              icon: AiFillFacebook,
              href: "https://www.facebook.com/tuorec/",
            },
            {
              key: "instagram",
              text: "Instagram",
              icon: AiFillInstagram,
              href: "https://www.instagram.com/livetorec/",
            },
            {
              key: "email",
              text: "Email",
              icon: AiFillMail,
              href: "mailto:orec@trinity.edu",
            },
          ]}
        >
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default CustomApp;
