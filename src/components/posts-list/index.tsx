import { Alert, Grid, Skeleton, SlideFade, Text } from "@chakra-ui/react";
import { PostsListQueryHookResult } from "generated/graphql";
import { FunctionComponent } from "react";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";
import { Post } from "components/post";

export interface PostsListProps {
  postsListQueryHookResult: PostsListQueryHookResult;
  useInfiniteScrollHookResult: UseInfiniteScrollHookResult;
}

export const PostsList: FunctionComponent<PostsListProps> = ({
  postsListQueryHookResult: { loading, error, data },
  useInfiniteScrollHookResult: [sentryRef],
}) => {
  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <Alert status="error">Error loading posts list...</Alert>;
  }

  if (!data) {
    return <Text>No posts...</Text>;
  }

  return (
    <Grid gap={5}>
      {data?.postsConnection.edges.map(({ node }) => (
        <SlideFade in={true}>
          <Post key={node.id} {...node} />
        </SlideFade>
      ))}
      {data?.postsConnection.pageInfo.hasNextPage ? (
        <Skeleton ref={sentryRef} height="200px" />
      ) : null}
    </Grid>
  );
};
