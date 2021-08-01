import { Grid } from "@chakra-ui/react";
import { ProductListFragment } from "generated/graphql";
import { FunctionComponent } from "react";
import { ProductCard } from "components";

export const ProductList: FunctionComponent<ProductListFragment> = ({
  edges,
}) => {
  return (
    <Grid gap={5}>
      {edges.map(({ node }) => (
        <ProductCard key={node.id} {...node} />
      ))}
    </Grid>
  );
};
