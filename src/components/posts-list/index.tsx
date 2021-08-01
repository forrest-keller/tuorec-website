import { Alert, Grid, Skeleton, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PostCard } from "components/post-card";
import { PostsListFragment } from "../../../generated/graphql/base";

export const PostsList: FunctionComponent<PostsListFragment> = ({ edges }) => {
  return (
    <Grid gap={5}>
      {edges.map(({ node }) => (
        <PostCard key={node.id} {...node} />
      ))}
    </Grid>
  );
};
