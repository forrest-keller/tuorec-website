import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import { AppProps } from "next/app";
import theme from "utilities/theme";
import { GiBoots, GiCalendar, GiMailbox } from "react-icons/gi";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import Link from "next/link";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Layout
        logoLink={{ imageSrc: "/favicon.ico", href: "/" }}
        centerLinks={[
          { text: "Gear", icon: GiBoots, href: "/products" },
          { text: "Events", icon: GiCalendar, href: "/events" },
          { text: "Posts", icon: GiMailbox, href: "/posts" },
        ]}
        rightLinks={[
          {
            text: "Facebook",
            icon: AiFillFacebook,
            href: "https://www.facebook.com/tuorec/",
          },
          {
            text: "Instagram",
            icon: AiFillInstagram,
            href: "https://www.instagram.com/livetorec/",
          },
          { text: "Email", icon: AiFillMail, href: "mailto:orec@trinity.edu" },
        ]}
      >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default CustomApp;
