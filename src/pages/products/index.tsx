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
  useProductListQuery,
} from "../../../generated/graphql/base";

const ProductsPage = () => {
  const { data, loading, error, fetchMore } = useProductListQuery({
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
    <Container>
      <Grid gap={10}>
        <Heading variant="h1" as="h1">
          Products
        </Heading>
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
      </Grid>
    </Container>
  );
};

export default ProductsPage;
