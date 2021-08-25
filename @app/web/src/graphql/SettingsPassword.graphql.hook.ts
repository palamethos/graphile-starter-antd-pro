/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SettingsPasswordQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SettingsPasswordQuery = { __typename?: 'Query', currentUser: Types.Maybe<{ __typename?: 'User', id: any, hasPassword: Types.Maybe<boolean>, userEmailsConnection: { __typename?: 'UserEmailsConnection', nodes: Array<{ __typename?: 'UserEmail', id: any, email: string }> } }> };


export const SettingsPasswordDocument = gql`
    query SettingsPassword {
  currentUser {
    id
    hasPassword
    userEmailsConnection(first: 1, condition: {isPrimary: true}) {
      nodes {
        id
        email
      }
    }
  }
}
    `;

/**
 * __useSettingsPasswordQuery__
 *
 * To run a query within a React component, call `useSettingsPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsPasswordQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsPasswordQuery(baseOptions?: Apollo.QueryHookOptions<SettingsPasswordQuery, SettingsPasswordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsPasswordQuery, SettingsPasswordQueryVariables>(SettingsPasswordDocument, options);
      }
export function useSettingsPasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsPasswordQuery, SettingsPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsPasswordQuery, SettingsPasswordQueryVariables>(SettingsPasswordDocument, options);
        }
export type SettingsPasswordQueryHookResult = ReturnType<typeof useSettingsPasswordQuery>;
export type SettingsPasswordLazyQueryHookResult = ReturnType<typeof useSettingsPasswordLazyQuery>;
export type SettingsPasswordQueryResult = Apollo.QueryResult<SettingsPasswordQuery, SettingsPasswordQueryVariables>;