import { Alert, Box, Container, Grid, Spinner } from "@chakra-ui/react";
import { Post, PostsList } from "components";
import { Metadata } from "components/metadata";
import { GetStaticProps, NextPage } from "next";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  PostFragment,
  PostOrderByInput,
  usePostsQuery,
} from "../../../generated/graphql/base";
import { getServerPagePostsPosts } from "../../../generated/graphql/next";

export interface Props {
  posts: PostFragment[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await getServerPagePostsPosts({});

  return {
    props: {
      posts: res.props.data.posts,
    },
  };
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  const { data, loading, error, fetchMore } = usePostsQuery({
    variables: {
      orderBy: PostOrderByInput.CreatedAtDesc,
      first: 10,
      skip: 0,
    },
  });

  const [loaderRef] = useInfiniteScroll({
    loading: loading,
    disabled: error !== undefined,
    hasNextPage: !!data?.postsConnection.pageInfo.hasNextPage,
    onLoadMore: () =>
      fetchMore({
        variables: {
          skip: data?.postsConnection.edges.length || 0,
        },
      }),
  });

  return (
    <>
      <Metadata title="Posts" />
      <Grid gap={10}>
        <Container variant="xl">
          <Grid gap={10}>
            {posts.map((post) => (
              <Post hideTimestamp key={post.id} {...post} />
            ))}
          </Grid>
        </Container>
        <Container>
          <Grid gap={10}>
            {error && <Alert status="error">Error retrieving posts.</Alert>}
            {data?.postsConnection.edges.length === 0 && (
              <Alert>No posts.</Alert>
            )}
            {data && <PostsList {...data?.postsConnection} />}
            <Box justifySelf="center">
              {(data?.postsConnection.pageInfo.hasNextPage || loading) && (
                <Spinner ref={loaderRef} />
              )}
            </Box>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PostsPage;
