import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { GiCalendar, GiCampingTent, GiMailbox } from "react-icons/gi";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "components";
import { client, theme } from "utilities";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout
          logoLink={{ imageSrc: "/logo.webp", href: "/" }}
          centerLinks={[
            {
              key: "gear",
              text: "Gear",
              icon: GiCampingTent,
              href: "/rentals",
            },
            {
              key: "events",
              text: "Events",
              icon: GiCalendar,
              href: "/events",
            },
            { key: "posts", text: "Posts", icon: GiMailbox, href: "/posts" },
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
