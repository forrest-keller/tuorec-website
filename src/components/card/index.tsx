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
  description: string;
  photo: ReactElement;
  topRightElements?: ReactElement[];
}

export const Card: FunctionComponent<CardProps> = ({
  title,
  photo,
  description,
  topRightElements,
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
              <Heading variant="h3" as="h2">
                <LinkOverlay href={href}>{title}</LinkOverlay>
              </Heading>
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
