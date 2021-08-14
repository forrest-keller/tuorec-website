import { Container } from "@chakra-ui/react";
import { Event } from "components";
import { Metadata } from "components/metadata";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { EventFragment } from "../../../generated/graphql/base";
import {
  getServerPageEvent,
  getServerPageEventIds,
} from "../../../generated/graphql/next";

export interface Props {
  event: EventFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPageEventIds({});

  return {
    fallback: false,
    paths: res.props.data.events.map((event) => ({
      params: { id: event.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPageEvent({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.event) {
    throw new Error("Event not found.");
  }

  return { props: { event: res.props.data.event } };
};

const EventPage: NextPage<Props> = ({ event }) => {
  return (
    <>
      <Metadata title={event.name} />
      <Container variant="xl">
        <Event {...event} />
      </Container>
    </>
  );
};

export default EventPage;
