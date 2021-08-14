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
import { Link, LinkProps } from "../link";

export interface LayoutLink
  extends Omit<LinkProps, "isExternal" | "hideExternalIcon"> {
  text: string;
  icon: IconType;
}

export interface LayoutLogoLink extends LinkProps {
  imageSrc: string;
}

export interface LayoutProps {
  logoLink: LayoutLogoLink;
  centerLinks: LayoutLink[];
  rightLinks: LayoutLink[];
}

export const Layout: FunctionComponent<LayoutProps> = ({
  logoLink: { imageSrc: logoLinkImageSrc, ...logoLinkRest },
  centerLinks,
  rightLinks,
  children,
}) => {
  return (
    <Box>
      <Grid
        shadow="sm"
        autoFlow="column"
        paddingX={{ base: "initial", md: 10 }}
      >
        <Link justifySelf="start" variant="navigation" {...logoLinkRest}>
          <Image
            src={logoLinkImageSrc}
            alt="OREC Logo"
            width={50}
            height={50}
          />
        </Link>
        <Grid
          gap={10}
          autoFlow="column"
          justifySelf="stretch"
          justifyContent="space-between"
          overflowX="auto"
        >
          <Grid as="nav" autoFlow="column" gap={{ base: 2, md: 10 }}>
            {centerLinks.map(({ key, icon, text, ...rest }) => (
              <Link key={key} variant="navigation" {...rest}>
                <Icon as={icon} />
                {text}
              </Link>
            ))}
          </Grid>
          <Grid autoFlow="column" justifySelf="end">
            {rightLinks.map(({ key, text, icon, ...rest }) => (
              <Link
                key={key}
                variant="navigation"
                isExternal
                hideExternalIcon
                {...rest}
              >
                <VisuallyHidden>{text}</VisuallyHidden>
                <Icon as={icon} />
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box>{children}</Box>
    </Box>
  );
};
