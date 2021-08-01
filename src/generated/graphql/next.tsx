import * as Types from './base';

import * as Operations from './base';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from 'utilities/client';
export async function getServerPageEventsList
    (options: Omit<Apollo.QueryOptions<Types.EventsListQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.EventsListQuery>({ ...options, query: Operations.EventsListDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageEventsListComp = React.FC<{data?: Types.EventsListQuery, error?: Apollo.ApolloError}>;
export const withPageEventsList = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.EventsListQuery, Types.EventsListQueryVariables>) => (WrappedComponent:PageEventsListComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.EventsListDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrEventsList = {
      getServerPage: getServerPageEventsList,
      withPage: withPageEventsList,
      
    }
export async function getServerPagePostsList
    (options: Omit<Apollo.QueryOptions<Types.PostsListQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.PostsListQuery>({ ...options, query: Operations.PostsListDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PagePostsListComp = React.FC<{data?: Types.PostsListQuery, error?: Apollo.ApolloError}>;
export const withPagePostsList = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PostsListQuery, Types.PostsListQueryVariables>) => (WrappedComponent:PagePostsListComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.PostsListDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPostsList = {
      getServerPage: getServerPagePostsList,
      withPage: withPagePostsList,
      
    }
export async function getServerPageProduct
    (options: Omit<Apollo.QueryOptions<Types.ProductQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ProductQuery>({ ...options, query: Operations.ProductDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductComp = React.FC<{data?: Types.ProductQuery, error?: Apollo.ApolloError}>;
export const withPageProduct = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ProductQuery, Types.ProductQueryVariables>) => (WrappedComponent:PageProductComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProduct = {
      getServerPage: getServerPageProduct,
      withPage: withPageProduct,
      
    }
export async function getServerPageProductIds
    (options: Omit<Apollo.QueryOptions<Types.ProductIdsQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ProductIdsQuery>({ ...options, query: Operations.ProductIdsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductIdsComp = React.FC<{data?: Types.ProductIdsQuery, error?: Apollo.ApolloError}>;
export const withPageProductIds = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ProductIdsQuery, Types.ProductIdsQueryVariables>) => (WrappedComponent:PageProductIdsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductIdsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProductIds = {
      getServerPage: getServerPageProductIds,
      withPage: withPageProductIds,
      
    }
export async function getServerPageProductList
    (options: Omit<Apollo.QueryOptions<Types.ProductListQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ProductListQuery>({ ...options, query: Operations.ProductListDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductListComp = React.FC<{data?: Types.ProductListQuery, error?: Apollo.ApolloError}>;
export const withPageProductList = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ProductListQuery, Types.ProductListQueryVariables>) => (WrappedComponent:PageProductListComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductListDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProductList = {
      getServerPage: getServerPageProductList,
      withPage: withPageProductList,
      
    }