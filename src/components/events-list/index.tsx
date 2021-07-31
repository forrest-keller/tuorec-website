import { Alert, Grid, Skeleton, Text } from "@chakra-ui/react";
import { EventsListQueryHookResult } from "generated/graphql";
import { FunctionComponent } from "react";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";
import { EventCard } from "components/event-card";

export interface EventsListProps {
  eventsListQueryHookResult: EventsListQueryHookResult;
  useInfiniteScrollHookResult: UseInfiniteScrollHookResult;
}

export const EventsList: FunctionComponent<EventsListProps> = ({
  eventsListQueryHookResult: { loading, error, data },
  useInfiniteScrollHookResult: [sentryRef],
}) => {
  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <Alert status="error">Error loading events list...</Alert>;
  }

  if (!data) {
    return <Text>No events...</Text>;
  }

  return (
    <Grid gap={5}>
      {data?.eventsConnection.edges.map(({ node }) => (
        <EventCard key={node.id} {...node} />
      ))}
      {data?.eventsConnection.pageInfo.hasNextPage ? (
        <Skeleton ref={sentryRef} height="200px" />
      ) : null}
    </Grid>
  );
};
