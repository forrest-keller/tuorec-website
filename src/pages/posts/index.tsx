import { Container, Grid, Heading } from "@chakra-ui/react";
import { PostsList } from "components";
import { PostOrderByInput, usePostsListQuery } from "generated";
import useInfiniteScroll from "react-infinite-scroll-hook";

const PostsPage = () => {
  const postsListQueryResult = usePostsListQuery({
    variables: {
      orderBy: PostOrderByInput.CreatedAtDesc,
      first: 10,
      skip: 0,
    },
  });

  const { data, loading, error, fetchMore } = postsListQueryResult;

  const useInfiniteScrollHookResult = useInfiniteScroll({
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
        <PostsList
          postsListQueryHookResult={postsListQueryResult}
          useInfiniteScrollHookResult={useInfiniteScrollHookResult}
        />
      </Grid>
    </Container>
  );
};

export default PostsPage;
