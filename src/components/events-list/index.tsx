import { Grid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { EventCard } from "components/event-card";
import { EventsListFragment } from "../../../generated/graphql/base";

export const EventsList: FunctionComponent<EventsListFragment> = ({
  edges,
}) => {
  return (
    <Grid gap={5}>
      {edges.map(({ node }) => (
        <EventCard key={node.id} {...node} />
      ))}
    </Grid>
  );
};
