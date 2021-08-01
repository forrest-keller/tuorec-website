import {
  Alert,
  Box,
  Container,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { PostsList } from "components";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  PostOrderByInput,
  usePostsListQuery,
} from "../../../generated/graphql/base";

const PostsPage = () => {
  const { data, loading, error, fetchMore } = usePostsListQuery({
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
    <Container>
      <Grid gap={10}>
        <Heading variant="h1" as="h1">
          Posts
        </Heading>
        {error && <Alert status="error">Error retrieving posts.</Alert>}
        {data?.postsConnection.edges.length === 0 && (
          <Alert status="info">No posts.</Alert>
        )}
        {data && <PostsList {...data?.postsConnection} />}
        <Box justifySelf="center">
          {(data?.postsConnection.pageInfo.hasNextPage || loading) && (
            <Spinner ref={loaderRef} />
          )}
        </Box>
      </Grid>
    </Container>
  );
};

export default PostsPage;
