/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type RequestAccountDeletionMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type RequestAccountDeletionMutation = { __typename?: 'Mutation', requestAccountDeletion: Types.Maybe<{ __typename?: 'RequestAccountDeletionPayload', success: Types.Maybe<boolean> }> };


export const RequestAccountDeletionDocument = gql`
    mutation RequestAccountDeletion {
  requestAccountDeletion(input: {}) {
    success
  }
}
    `;
export type RequestAccountDeletionMutationFn = Apollo.MutationFunction<RequestAccountDeletionMutation, RequestAccountDeletionMutationVariables>;

/**
 * __useRequestAccountDeletionMutation__
 *
 * To run a mutation, you first call `useRequestAccountDeletionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestAccountDeletionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestAccountDeletionMutation, { data, loading, error }] = useRequestAccountDeletionMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestAccountDeletionMutation(baseOptions?: Apollo.MutationHookOptions<RequestAccountDeletionMutation, RequestAccountDeletionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestAccountDeletionMutation, RequestAccountDeletionMutationVariables>(RequestAccountDeletionDocument, options);
      }
export type RequestAccountDeletionMutationHookResult = ReturnType<typeof useRequestAccountDeletionMutation>;
export type RequestAccountDeletionMutationResult = Apollo.MutationResult<RequestAccountDeletionMutation>;
export type RequestAccountDeletionMutationOptions = Apollo.BaseMutationOptions<RequestAccountDeletionMutation, RequestAccountDeletionMutationVariables>;