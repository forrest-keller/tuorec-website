import {
  Box,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Wrap,
  WrapItem,
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
          autoFlow={{ md: "column" }}
          templateColumns={{ md: "1fr 3fr" }}
        >
          <GridItem>{photo}</GridItem>
          <Grid gap={2}>
            <Grid autoFlow={{ md: "column" }} gap={5}>
              <Grid gap={2}>
                <Stack direction="row">{overTitleElements}</Stack>
                <Heading variant="h4" as="h2">
                  <LinkOverlay href={href}>{title}</LinkOverlay>
                </Heading>
                <Wrap>
                  {underTitleElements?.map((element) => (
                    <WrapItem key={element.key}>{element}</WrapItem>
                  ))}
                </Wrap>
              </Grid>
              <Wrap justifySelf={{ md: "right" }}>
                {topRightElements?.map((element) => (
                  <WrapItem key={element.key}>{element}</WrapItem>
                ))}
              </Wrap>
            </Grid>
            <Text>{description}</Text>
          </Grid>
        </Grid>
      </LinkBox>
    </RoutingLink>
  );
};
