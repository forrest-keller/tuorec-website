import { Container } from "@chakra-ui/react";
import { Rental } from "components";
import { Metadata } from "components/metadata";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RentalFragment } from "../../../generated/graphql/base";
import {
  getServerPageRental,
  getServerPageRentalIds,
} from "../../../generated/graphql/next";

export interface Props {
  rental: RentalFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPageRentalIds({});

  return {
    fallback: false,
    paths: res.props.data.rentals.map((rental) => ({
      params: { id: rental.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPageRental({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.rental) {
    throw new Error("Rental not found.");
  }

  return { props: { rental: res.props.data.rental } };
};

const RentalPage: NextPage<Props> = ({ rental }) => {
  return (
    <>
      <Metadata title={rental.name} />
      <Container variant="xl">
        <Rental {...rental} />
      </Container>
    </>
  );
};

export default RentalPage;
