import { Grid } from "@chakra-ui/react";
import { RentalCard } from "components/rental-card";
import { FunctionComponent } from "react";
import { RentalsListFragment } from "../../../generated/graphql/base";

export const RentalsList: FunctionComponent<RentalsListFragment> = ({
  edges,
}) => {
  return (
    <Grid gap={5}>
      {edges.map(({ node }) => (
        <RentalCard key={node.id} {...node} />
      ))}
    </Grid>
  );
};
