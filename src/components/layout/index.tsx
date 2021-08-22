import { FunctionComponent } from "react";
import {
  Box,
  Center,
  Grid,
  Icon,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconType } from "react-icons";
import { Link, LinkProps } from "../link";
import { GiHearts } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa";

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
    <Box overflow="hidden">
      <Grid
        as="header"
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
      <Box as="body" display="initial">
        {children}
      </Box>
      <Center padding={10} as="footer">
        <Text as="small" color="blackAlpha.600">
          <Grid autoFlow="column" alignItems="center" gap={1}>
            With
            <Icon as={FaHandPeace} color="cyan.300" />
            <Icon as={GiHearts} color="red.200" />
            from OREC
          </Grid>
        </Text>
      </Center>
    </Box>
  );
};
