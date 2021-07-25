import { FunctionComponent } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Icon,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconType } from "react-icons";
import Link, { LinkProps } from "./Link";

interface LayoutLink extends LinkProps {
  text: string;
  icon: IconType;
}

interface LayoutLogoLink extends LinkProps {
  imageSrc: string;
}

interface LayoutProps {
  logoLink: LayoutLogoLink;
  centerLinks: LayoutLink[];
  rightLinks: LayoutLink[];
}

const Layout: FunctionComponent<LayoutProps> = ({
  logoLink,
  centerLinks,
  rightLinks,
  children,
}) => {
  return (
    <Box>
      <Grid shadow="sm" autoFlow="column">
        <Link justifySelf="start" variant="navigation" {...logoLink}>
          <Image src={logoLink.imageSrc} width={50} height={50} />
        </Link>
        <Grid
          gap={10}
          autoFlow="column"
          justifySelf="stretch"
          justifyContent="space-between"
          overflowX="auto"
        >
          <Grid as="nav" autoFlow="column" gap={{ base: 2, md: 10 }}>
            {centerLinks.map((link) => (
              <Link variant="navigation" {...link}>
                <Icon as={link.icon} />
                {link.text}
              </Link>
            ))}
          </Grid>
          <Grid autoFlow="column" justifySelf="end">
            {rightLinks.map((link) => (
              <Link variant="navigation" isExternal {...link}>
                <VisuallyHidden>{link.text}</VisuallyHidden>
                <Icon as={link.icon} />
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
export type { LayoutProps };
