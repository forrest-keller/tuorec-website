import { Container } from "@chakra-ui/react";
import { Metadata } from "components/metadata";
import { Place } from "components/place";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PlaceFragment } from "../../../generated/graphql/base";
import {
  getServerPagePlace,
  getServerPagePlaceIds,
} from "../../../generated/graphql/next";

export interface Props {
  place: PlaceFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPagePlaceIds({});

  return {
    fallback: false,
    paths: res.props.data.places.map((place) => ({
      params: { id: place.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPagePlace({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.place) {
    throw new Error("Place not found.");
  }

  return { props: { place: res.props.data.place } };
};

const PlacePage: NextPage<Props> = ({ place }) => {
  return (
    <>
      <Metadata title={place.name} />
      <Container variant="xl">
        <Place {...place} />
      </Container>
    </>
  );
};

export default PlacePage;
