import { ApolloClient, FieldPolicy, InMemoryCache } from "@apollo/client";
import {
  offsetLimitPagination,
  relayStylePagination,
} from "@apollo/client/utilities";
import { Aggregate, Maybe, PageInfo } from "generated/graphql";

export interface ConnectionResult<T = unknown> {
  pageInfo: PageInfo;
  edges: T[];
  aggregate: Aggregate;
}

export const mergeConnection = (keyArgs?: string[]): FieldPolicy => ({
  keyArgs: keyArgs ?? false,
  merge: (existing: Maybe<ConnectionResult>, incoming: ConnectionResult) => {
    return {
      ...incoming,
      edges: existing ? [...existing.edges, ...incoming.edges] : incoming.edges,
    };
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          productsConnection: mergeConnection(),
        },
      },
    },
  }),
  uri: process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT_URL,
});
