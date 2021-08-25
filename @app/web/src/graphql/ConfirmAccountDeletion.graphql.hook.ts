/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ConfirmAccountDeletionMutationVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;


export type ConfirmAccountDeletionMutation = { __typename?: 'Mutation', confirmAccountDeletion: Types.Maybe<{ __typename?: 'ConfirmAccountDeletionPayload', success: Types.Maybe<boolean> }> };


export const ConfirmAccountDeletionDocument = gql`
    mutation ConfirmAccountDeletion($token: String!) {
  confirmAccountDeletion(input: {token: $token}) {
    success
  }
}
    `;
export type ConfirmAccountDeletionMutationFn = Apollo.MutationFunction<ConfirmAccountDeletionMutation, ConfirmAccountDeletionMutationVariables>;

/**
 * __useConfirmAccountDeletionMutation__
 *
 * To run a mutation, you first call `useConfirmAccountDeletionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmAccountDeletionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmAccountDeletionMutation, { data, loading, error }] = useConfirmAccountDeletionMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmAccountDeletionMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmAccountDeletionMutation, ConfirmAccountDeletionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmAccountDeletionMutation, ConfirmAccountDeletionMutationVariables>(ConfirmAccountDeletionDocument, options);
      }
export type ConfirmAccountDeletionMutationHookResult = ReturnType<typeof useConfirmAccountDeletionMutation>;
export type ConfirmAccountDeletionMutationResult = Apollo.MutationResult<ConfirmAccountDeletionMutation>;
export type ConfirmAccountDeletionMutationOptions = Apollo.BaseMutationOptions<ConfirmAccountDeletionMutation, ConfirmAccountDeletionMutationVariables>;