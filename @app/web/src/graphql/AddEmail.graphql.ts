/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { EmailsForm_UserEmailFragment } from './EmailsForm_UserEmail.graphql';
import { gql } from '@apollo/client';
import { EmailsForm_UserEmailFragmentDoc } from './EmailsForm_UserEmail.graphql';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type AddEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;


export type AddEmailMutation = (
  { __typename?: 'Mutation' }
  & { createUserEmail: Types.Maybe<(
    { __typename?: 'CreateUserEmailPayload' }
    & { user: Types.Maybe<(
      { __typename?: 'User' }
      & Pick<Types.User, 'id'>
      & { userEmailsConnection: (
        { __typename?: 'UserEmailsConnection' }
        & { nodes: Array<(
          { __typename?: 'UserEmail' }
          & Pick<Types.UserEmail, 'id'>
          & EmailsForm_UserEmailFragment
        )> }
      ) }
    )> }
  )> }
);


export const AddEmailDocument = gql`
    mutation AddEmail($email: String!) {
  createUserEmail(input: {userEmail: {email: $email}}) {
    user {
      id
      userEmailsConnection(first: 50) {
        nodes {
          id
          ...EmailsForm_UserEmail
        }
      }
    }
  }
}
    ${EmailsForm_UserEmailFragmentDoc}`;
export type AddEmailMutationFn = Apollo.MutationFunction<AddEmailMutation, AddEmailMutationVariables>;

/**
 * __useAddEmailMutation__
 *
 * To run a mutation, you first call `useAddEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmailMutation, { data, loading, error }] = useAddEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddEmailMutation(baseOptions?: Apollo.MutationHookOptions<AddEmailMutation, AddEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEmailMutation, AddEmailMutationVariables>(AddEmailDocument, options);
      }
export type AddEmailMutationHookResult = ReturnType<typeof useAddEmailMutation>;
export type AddEmailMutationResult = Apollo.MutationResult<AddEmailMutation>;
export type AddEmailMutationOptions = Apollo.BaseMutationOptions<AddEmailMutation, AddEmailMutationVariables>;