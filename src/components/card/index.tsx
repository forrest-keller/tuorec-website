import {
  Box,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
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
  overTitleElements?: ReactElement[];
  underTitleElements?: ReactElement[];
}

export const Card: FunctionComponent<CardProps> = ({
  title,
  photo,
  description,
  topRightElements,
  overTitleElements,
  underTitleElements,
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
          <Stack>
            <Grid autoFlow={{ md: "column" }} gap={{ md: 5 }}>
              <Stack>
                <Stack direction="row">{overTitleElements}</Stack>
                <Heading variant="h4" as="h2">
                  <LinkOverlay href={href}>{title}</LinkOverlay>
                </Heading>
                <Stack direction="row">{underTitleElements}</Stack>
              </Stack>
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
          </Stack>
        </Grid>
      </LinkBox>
    </RoutingLink>
  );
};
