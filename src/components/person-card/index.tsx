import {
  Avatar,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
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
      <Grid layerStyle="card" autoFlow="column" gap={5} alignItems="center">
        <Avatar src={photo.url} />
        <Heading as="h2" variant="h5" width="max-content">
          <RoutingLink href={`/people/${id}`}>
            <LinkOverlay
              href={`/people/${id}`}
            >{`${firstName} ${lastName}`}</LinkOverlay>
          </RoutingLink>
        </Heading>
      </Grid>
    </LinkBox>
  );
};
