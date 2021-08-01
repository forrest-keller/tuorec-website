import { ApolloClient, FieldPolicy, InMemoryCache } from "@apollo/client";
import { TypedTypePolicies } from "../../generated/graphql/apollo";
import { Aggregate, Maybe, PageInfo } from "../../generated/graphql/base";

export interface ConnectionResult<T = unknown> {
  pageInfo: PageInfo;
  edges: T[];
  aggregate: Aggregate;
}

export const mergeConnection = (keyArgs = ["id"]): FieldPolicy => ({
  keyArgs: keyArgs ?? false,
  merge: (existing: Maybe<ConnectionResult>, incoming: ConnectionResult) => {
    return {
      ...incoming,
      edges: existing ? [...existing.edges, ...incoming.edges] : incoming.edges,
    };
  },
});

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      eventsConnection: mergeConnection(),
      postsConnection: mergeConnection(),
      rentalsConnection: mergeConnection(),
    },
  },
};

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies,
  }),
  uri: process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT_URL,
});

export const getApolloClient = (ctx: any) => client;
