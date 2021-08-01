import { Grid } from "@chakra-ui/react";
import { EventsListFragment } from "generated/graphql";
import { FunctionComponent } from "react";
import { EventCard } from "components/event-card";

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
