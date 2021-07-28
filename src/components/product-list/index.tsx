import {
  Alert,
  Grid,
  GridItem,
  Skeleton,
  SlideFade,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ProductListQueryHookResult } from "generated/graphql";
import { FunctionComponent } from "react";
import { Product } from "components";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";

export interface ProductListProps {
  productListQueryHookResult: ProductListQueryHookResult;
  useInfiniteScrollHookResult: UseInfiniteScrollHookResult;
}

export const ProductList: FunctionComponent<ProductListProps> = ({
  productListQueryHookResult: { loading, error, data },
  useInfiniteScrollHookResult: [sentryRef],
}) => {
  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <Alert status="error">Error loading products list...</Alert>;
  }

  if (!data) {
    return <Text>No Products</Text>;
  }

  return (
    <Grid gap={5}>
      {data?.productsConnection.edges.map(({ node }) => (
        <SlideFade in={true}>
          <Product key={node.id} {...node} />
        </SlideFade>
      ))}
      {data?.productsConnection.pageInfo.hasNextPage ? (
        <Skeleton ref={sentryRef} height="200px" />
      ) : null}
    </Grid>
  );
};
