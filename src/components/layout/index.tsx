import { FunctionComponent, useState } from "react";
import {
  Box,
  Modal,
  Center,
  Wrap,
  Grid,
  Icon,
  Text,
  VisuallyHidden,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconType } from "react-icons";
import { Link, LinkProps } from "../link";
import { GiHamburgerMenu, GiHearts } from "react-icons/gi";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box>
      <Wrap
        justify={{ lg: "center" }}
        as="header"
        shadow="sm"
        align="center"
        paddingX={10}
      >
        <IconButton
          display={{ lg: "none" }}
          aria-label="Menu"
          onClick={() => setIsMenuOpen(true)}
          icon={<Icon as={GiHamburgerMenu} />}
        />
        <Link justifySelf="start" variant="navigation" {...logoLinkRest}>
          <Image
            src={logoLinkImageSrc}
            alt="OREC Logo"
            width={50}
            height={50}
          />
        </Link>
        <Box display={{ base: "none", lg: "initial" }}>
          <Grid gap={10} autoFlow="column" justifyContent="space-between">
            <Grid autoFlow="column" gap={{ base: 2, md: 10 }}>
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
        </Box>
        <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Menu</ModalHeader>
            <ModalBody>
              <Center>
                <Box>
                  <Grid>
                    {centerLinks.map(({ key, icon, text, ...rest }) => (
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        key={key}
                        variant="navigation"
                        {...rest}
                      >
                        <Icon as={icon} />
                        {text}
                      </Link>
                    ))}
                  </Grid>
                  <Grid paddingTop={10} autoFlow="column" justifySelf="end">
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
                </Box>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Wrap>
      <Box as="main" display="initial">
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
