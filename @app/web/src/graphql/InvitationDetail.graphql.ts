/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type InvitationDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
  code?: Types.Maybe<Types.Scalars['String']>;
}>;


export type InvitationDetailQuery = (
  { __typename?: 'Query' }
  & { organizationForInvitation: Types.Maybe<(
    { __typename?: 'Organization' }
    & Pick<Types.Organization, 'id' | 'name' | 'slug'>
  )> }
);


export const InvitationDetailDocument = gql`
    query InvitationDetail($id: UUID!, $code: String) {
  organizationForInvitation(invitationId: $id, code: $code) {
    id
    name
    slug
  }
}
    `;

/**
 * __useInvitationDetailQuery__
 *
 * To run a query within a React component, call `useInvitationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useInvitationDetailQuery(baseOptions: Apollo.QueryHookOptions<InvitationDetailQuery, InvitationDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitationDetailQuery, InvitationDetailQueryVariables>(InvitationDetailDocument, options);
      }
export function useInvitationDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationDetailQuery, InvitationDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitationDetailQuery, InvitationDetailQueryVariables>(InvitationDetailDocument, options);
        }
export type InvitationDetailQueryHookResult = ReturnType<typeof useInvitationDetailQuery>;
export type InvitationDetailLazyQueryHookResult = ReturnType<typeof useInvitationDetailLazyQuery>;
export type InvitationDetailQueryResult = Apollo.QueryResult<InvitationDetailQuery, InvitationDetailQueryVariables>;