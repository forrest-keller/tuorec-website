import {
  Alert,
  Box,
  Container,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { EventsList } from "components/events-list";
import dayjs from "dayjs";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  EventOrderByInput,
  useEventsListQuery,
} from "../../../generated/graphql/base";

const EventsPage = () => {
  const { data, loading, error, fetchMore } = useEventsListQuery({
    variables: {
      orderBy: EventOrderByInput.CreatedAtDesc,
      first: 10,
      skip: 0,
      startTimeAfter: dayjs(),
    },
  });

  const [loaderRef] = useInfiniteScroll({
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
        {error && <Alert status="error">Error retrieving events.</Alert>}
        {data?.eventsConnection.edges.length === 0 && (
          <Alert status="info">No events.</Alert>
        )}
        {data && <EventsList {...data.eventsConnection} />}
        <Box justifySelf="center">
          {(data?.eventsConnection.pageInfo.hasNextPage || loading) && (
            <Spinner ref={loaderRef} />
          )}
        </Box>
      </Grid>
    </Container>
  );
};

export default EventsPage;
