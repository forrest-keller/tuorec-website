import {
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import RoutingLink from "next/link";
import { FunctionComponent, ReactElement } from "react";

export interface CardProps {
  href: string;
  title: string;
  photo: ReactElement;
  description: string;
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
    <LinkBox layerStyle="card">
      <Grid
        gap={5}
        autoFlow={{ md: "column" }}
        templateColumns={{ md: "1fr 3fr" }}
      >
        <GridItem minWidth={100}>{photo}</GridItem>
        <Grid gap={2}>
          <Grid autoFlow={{ md: "column" }} alignItems="center" gap={5}>
            <Grid gap={4}>
              {overTitleElements && (
                <Wrap spacing={5}>
                  {overTitleElements?.map((element) => (
                    <WrapItem alignItems="center" key={element.key}>
                      {element}
                    </WrapItem>
                  ))}
                </Wrap>
              )}
              <Heading variant="h4" as="h2">
                <RoutingLink href={href} passHref>
                  <LinkOverlay>{title}</LinkOverlay>
                </RoutingLink>
              </Heading>
              {underTitleElements && (
                <Wrap>
                  {underTitleElements?.map((element) => (
                    <WrapItem key={element.key}>{element}</WrapItem>
                  ))}
                </Wrap>
              )}
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
  );
};
