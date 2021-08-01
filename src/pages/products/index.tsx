import {
  Alert,
  Box,
  Container,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { ProductList } from "components";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {
  ProductOrderByInput,
  useProductsQuery,
} from "../../../generated/graphql/base";

const ProductsPage = () => {
  const { data, loading, error, fetchMore } = useProductsQuery({
    variables: {
      orderBy: ProductOrderByInput.UpdatedAtDesc,
      first: 3,
      skip: 0,
    },
  });

  const [loaderRef] = useInfiniteScroll({
    loading: loading,
    disabled: error !== undefined,
    hasNextPage: !!data?.productsConnection.pageInfo.hasNextPage,
    onLoadMore: () =>
      fetchMore({
        variables: {
          skip: data?.productsConnection.edges.length || 0,
        },
      }),
  });

  return (
    <Grid gap={10}>
      <Container variant="xl">
        <Heading variant="h1" as="h1">
          Products
        </Heading>
      </Container>
      <Container>
        {error && <Alert status="error">Error retrieving products.</Alert>}
        {data?.productsConnection.edges.length === 0 && (
          <Alert status="info">No products.</Alert>
        )}
        {data && <ProductList {...data.productsConnection} />}
        <Box justifySelf="center">
          {(data?.productsConnection.pageInfo.hasNextPage || loading) && (
            <Spinner ref={loaderRef} />
          )}
        </Box>
      </Container>
    </Grid>
  );
};

export default ProductsPage;
