import { Container, Grid, Heading } from "@chakra-ui/react";
import { ProductList } from "components";
import { ProductOrderByInput, useProductListQuery } from "generated";
import useInfiniteScroll from "react-infinite-scroll-hook";

const ProductsPage = () => {
  const productListQueryResult = useProductListQuery({
    variables: {
      orderBy: ProductOrderByInput.UpdatedAtDesc,
      first: 10,
      skip: 0,
    },
  });

  const { data, loading, error, fetchMore } = productListQueryResult;

  const useInfiniteScrollHookResult = useInfiniteScroll({
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
          Gear
        </Heading>
        <ProductList
          productListQueryHookResult={productListQueryResult}
          useInfiniteScrollHookResult={useInfiniteScrollHookResult}
        />
      </Grid>
    </Container>
  );
};

export default ProductsPage;
