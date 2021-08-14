import { Container } from "@chakra-ui/react";
import { Metadata } from "components/metadata";
import { Person } from "components/person";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PersonFragment } from "../../../generated/graphql/base";
import {
  getServerPagePerson,
  getServerPagePersonIds,
} from "../../../generated/graphql/next";

export interface Props {
  person: PersonFragment;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getServerPagePersonIds({});

  return {
    fallback: false,
    paths: res.props.data.people.map((person) => ({
      params: { id: person.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await getServerPagePerson({
    variables: { id: ctx?.params?.id as string | undefined },
  });

  if (!res.props.data.person) {
    throw new Error("Person not found.");
  }

  return { props: { person: res.props.data.person } };
};

const PersonPage: NextPage<Props> = ({ person }) => {
  return (
    <>
      <Metadata title={`${person.firstName} ${person.lastName}`} />
      <Container variant="xl">
        <Person {...person} />
      </Container>
    </>
  );
};

export default PersonPage;
