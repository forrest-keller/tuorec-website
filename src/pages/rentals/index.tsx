import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Post, RentalsList } from "components";
import { GetStaticProps, NextPage } from "next";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  PostFragment,
  RentalOrderByInput,
  useRentalsQuery,
} from "../../../generated/graphql/base";
import { getServerPageRentalsPosts } from "../../../generated/graphql/next";

export interface Props {
  posts: PostFragment[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await getServerPageRentalsPosts({});

  return {
    props: {
      posts: res.props.data.posts,
    },
  };
};

const RentalsPage: NextPage<Props> = ({ posts }) => {
  const { data, loading, error, fetchMore } = useRentalsQuery({
    variables: {
      orderBy: RentalOrderByInput.UpdatedAtDesc,
      first: 3,
      skip: 0,
    },
  });

  const [loaderRef] = useInfiniteScroll({
    loading: loading,
    disabled: error !== undefined,
    hasNextPage: !!data?.rentalsConnection.pageInfo.hasNextPage,
    onLoadMore: () =>
      fetchMore({
        variables: {
          skip: data?.rentalsConnection.edges.length || 0,
        },
      }),
  });

  return (
    <Grid gap={10}>
      <Container variant="xl">
        <Grid gap={10}>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Grid gap={10}>
          {error && <Alert status="error">Error retrieving rentals.</Alert>}
          {data?.rentalsConnection.edges.length === 0 && (
            <Alert>No rentals.</Alert>
          )}
          {data && <RentalsList {...data.rentalsConnection} />}
          <Box justifySelf="center">
            {(data?.rentalsConnection.pageInfo.hasNextPage || loading) && (
              <Spinner ref={loaderRef} />
            )}
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default RentalsPage;
