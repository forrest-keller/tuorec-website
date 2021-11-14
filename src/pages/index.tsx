import { Alert, Container, Grid, Heading, Icon } from "@chakra-ui/react";
import { Post, PostCard } from "components";
import { GetServerSideProps, NextPage } from "next";
import { GiDirectionSign } from "react-icons/gi";
import { PostCardFragment, PostFragment } from "../../generated/graphql/base";
import { getServerPageHome } from "../../generated/graphql/next";
import { ButtonLink } from "components/button-link";
import { Metadata } from "components/metadata";

export interface Props {
  pagePosts: PostFragment[];
  posts: PostCardFragment[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await getServerPageHome({});

  return {
    props: res.props.data,
  };
};

const HomePage: NextPage<Props> = ({ pagePosts, posts }) => {
  return (
    <>
      <Metadata />
      <Container variant="xl">
        <Grid gap={10}>
          {pagePosts.map((post) => (
            <Post hideTimestamp key={post.id} {...post} />
          ))}
          <Grid gap={5}>
            <Grid autoFlow="column" gap={5} alignItems="center">
              <Heading as="h2" variant="h2">
                Posts
              </Heading>
              <ButtonLink
                justifySelf="end"
                href="/posts"
                leftIcon={<Icon as={GiDirectionSign} />}
              >
                More Posts
              </ButtonLink>
            </Grid>
            <Grid gap={5}>
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
              {!posts.length && <Alert>No posts.</Alert>}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
