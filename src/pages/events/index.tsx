import {
  Alert,
  Box,
  Container,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Post } from "components";
import { EventsList } from "components/events-list";
import dayjs from "dayjs";
import { GetStaticProps, NextPage } from "next";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  EventOrderByInput,
  PostFragment,
  useEventsQuery,
} from "../../../generated/graphql/base";
import { getServerPageEventsPosts } from "../../../generated/graphql/next";

export interface Props {
  posts: PostFragment[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await getServerPageEventsPosts({});

  return {
    props: {
      posts: res.props.data.posts,
    },
  };
};

const EventsPage: NextPage<Props> = ({ posts }) => {
  const { data, loading, error, fetchMore } = useEventsQuery({
    variables: {
      orderBy: EventOrderByInput.StartTimeDesc,
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
    <Grid gap={10}>
      <Container variant="xl">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Container>
      <Container>
        <Grid gap={10}>
          {error && <Alert status="error">Error retrieving events.</Alert>}
          {data?.eventsConnection.edges.length === 0 && (
            <Alert>No events.</Alert>
          )}
          {data && <EventsList {...data.eventsConnection} />}
          <Box justifySelf="center">
            {(data?.eventsConnection.pageInfo.hasNextPage || loading) && (
              <Spinner ref={loaderRef} />
            )}
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default EventsPage;
