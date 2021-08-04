import { Avatar, Grid, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PersonCardFragment } from "../../../generated/graphql/base";
import RoutingLink from "next/link";

export const PersonCard: FunctionComponent<PersonCardFragment> = ({
  id,
  firstName,
  lastName,
  photo,
}) => {
  return (
    <LinkBox>
      <Grid
        layerStyle="card"
        padding={2}
        paddingRight={4}
        rounded="full"
        autoFlow="column"
        gap={2}
        alignItems="center"
      >
        <Avatar size="sm" src={photo.url} />
        <RoutingLink href={`/people/${id}`}>
          <LinkOverlay href={`/people/${id}`}>
            <Text
              fontWeight="bold"
              width="max-content"
            >{`${firstName} ${lastName}`}</Text>{" "}
          </LinkOverlay>
        </RoutingLink>
      </Grid>
    </LinkBox>
  );
};
