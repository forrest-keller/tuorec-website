import { Grid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PeopleListFragment } from "../../../generated/graphql/base";
import { PersonCard } from "components/person-card";

export const PeopleList: FunctionComponent<PeopleListFragment> = ({
  edges,
}) => {
  return (
    <Grid gap={5}>
      {edges.map(({ node }) => (
        <PersonCard key={node.id} {...node} />
      ))}
    </Grid>
  );
};
