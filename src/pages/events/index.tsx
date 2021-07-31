import { Container, Grid, Heading } from "@chakra-ui/react";
import { EventsList } from "components/events-list";
import dayjs from "dayjs";
import { EventOrderByInput, useEventsListQuery } from "generated";
import useInfiniteScroll from "react-infinite-scroll-hook";

const EventsPage = () => {
  const eventsListQueryResult = useEventsListQuery({
    variables: {
      orderBy: EventOrderByInput.CreatedAtDesc,
      first: 10,
      skip: 0,
      startTimeAfter: dayjs(),
    },
  });

  const { data, loading, error, fetchMore } = eventsListQueryResult;

  const useInfiniteScrollHookResult = useInfiniteScroll({
    loading: loading,
    disabled: error !== undefined,
    hasNextPage: !!data?.eventsConnection.pageInfo.hasNextPage,
    onLoadMore: () =>
      fetchMore({
        variables: {
          skip: data?.eventsConnection.edges.length || 0,
        },
      }),
  });

  return (
    <Container>
      <Grid gap={10}>
        <Heading variant="h1" as="h1">
          Events
        </Heading>
        <EventsList
          eventsListQueryHookResult={eventsListQueryResult}
          useInfiniteScrollHookResult={useInfiniteScrollHookResult}
        />
      </Grid>
    </Container>
  );
};

export default EventsPage;
