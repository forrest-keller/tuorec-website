import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Wrap,
} from "@chakra-ui/react";
import { Event, Post, PostCard } from "components";
import { EventCard } from "components/event-card";
import { EventsList } from "components/events-list";
import { GetServerSideProps, NextPage } from "next";
import { GiDirectionSign } from "react-icons/gi";
import {
  EventCardFragment,
  PostCardFragment,
  PostFragment,
} from "../../generated/graphql/base";
import { getServerPageHome } from "../../generated/graphql/next";
import RouterLink from "next/link";
import { ButtonLink } from "components/button-link";

export interface Props {
  pagePosts: PostFragment[];
  posts: PostCardFragment[];
  events: EventCardFragment[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await getServerPageHome({});

  return {
    props: res.props.data,
  };
};

const HomePage: NextPage<Props> = ({ pagePosts, posts, events }) => {
  return (
    <Container variant="xl">
      <Grid gap={10}>
        {pagePosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        <Grid gap={5}>
          <Grid autoFlow="column" gap={5} alignItems="center">
            <Heading as="h2" variant="h2">
              Events
            </Heading>
            <ButtonLink
              justifySelf="end"
              href="/events"
              leftIcon={<Icon as={GiDirectionSign} />}
            >
              See More
            </ButtonLink>
          </Grid>
          <Grid gap={5}>
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </Grid>
        </Grid>
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
              See More
            </ButtonLink>
          </Grid>
          <Grid gap={5}>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
