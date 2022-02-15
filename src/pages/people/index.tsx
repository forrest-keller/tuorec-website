import { Alert, Box, Container, Grid, Spinner } from "@chakra-ui/react";
import { Post } from "components";
import { Metadata } from "components/metadata";
import { PeopleList } from "components/people-list";
import { GetStaticProps, NextPage } from "next";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  PersonOrderByInput,
  PostFragment,
  usePeopleQuery,
} from "../../../generated/graphql/base";
import { getServerPagePeoplePosts } from "../../../generated/graphql/next";

export interface Props {
  posts: PostFragment[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await getServerPagePeoplePosts({});

  return {
    props: {
      posts: res.props.data.posts,
    },
  };
};

const PeoplePage: NextPage<Props> = ({ posts }) => {
  const { data, loading, error, fetchMore } = usePeopleQuery({
    variables: {
      orderBy: PersonOrderByInput.GraduationTimeAsc,
      first: 20,
      skip: 0,
    },
  });

  const [loaderRef] = useInfiniteScroll({
    loading: loading,
    disabled: error !== undefined,
    hasNextPage: !!data?.peopleConnection.pageInfo.hasNextPage,
    onLoadMore: () =>
      fetchMore({
        variables: {
          skip: data?.peopleConnection.edges.length || 0,
        },
      }),
  });

  return (
    <>
      <Metadata title="People" />
      <Grid gap={5}>
        <Container variant="xl">
          <Grid gap={10}>
            {posts.map((post) => (
              <Post hideTimestamp hideContent key={post.id} {...post} />
            ))}
          </Grid>
        </Container>
        <Container>
          <Grid gap={10}>
            {error && <Alert status="error">Error retrieving people.</Alert>}
            {data?.peopleConnection.edges.length === 0 && (
              <Alert>No people.</Alert>
            )}
            {data && <PeopleList {...data?.peopleConnection} />}
            <Box justifySelf="center">
              {(data?.peopleConnection.pageInfo.hasNextPage || loading) && (
                <Spinner ref={loaderRef} />
              )}
            </Box>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PeoplePage;
