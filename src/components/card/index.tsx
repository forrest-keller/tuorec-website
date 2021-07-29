import {
  Box,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import RoutingLink from "next/link";
import { FunctionComponent, ReactElement } from "react";

export interface CardProps {
  href: string;
  title: string;
  overTitleText?: string;
  underTitleText?: string;
  description: string;
  photo: ReactElement;
  topRightElements?: ReactElement[];
}

export const Card: FunctionComponent<CardProps> = ({
  title,
  photo,
  description,
  topRightElements,
  overTitleText,
  underTitleText,
  href,
}) => {
  return (
    <RoutingLink href={href}>
      <LinkBox layerStyle="card">
        <Grid
          gap={5}
          autoFlow={{ sm: "column" }}
          templateColumns={{ sm: "1fr 3fr" }}
        >
          <GridItem>{photo}</GridItem>
          <Box>
            <Grid autoFlow={{ md: "column" }}>
              <Box>
                <Text color="blackAlpha.600">{overTitleText}</Text>
                <Heading variant="h3" as="h2">
                  <LinkOverlay href={href}>{title}</LinkOverlay>
                </Heading>
                <Text>{underTitleText}</Text>
              </Box>
              <Grid
                justifySelf={{ md: "right" }}
                autoFlow="column"
                width="max"
                gap={10}
              >
                {topRightElements}
              </Grid>
            </Grid>
            <Text>{description}</Text>
          </Box>
        </Grid>
      </LinkBox>
    </RoutingLink>
  );
};
