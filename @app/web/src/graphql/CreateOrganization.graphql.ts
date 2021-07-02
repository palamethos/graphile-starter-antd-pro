/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreatedOrganizationFragment = (
  { __typename?: 'Organization' }
  & Pick<Types.Organization, 'id' | 'name' | 'slug'>
);

export type CreateOrganizationMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  slug: Types.Scalars['String'];
}>;


export type CreateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { createOrganization: Types.Maybe<(
    { __typename?: 'CreateOrganizationPayload' }
    & { organization: Types.Maybe<(
      { __typename?: 'Organization' }
      & Pick<Types.Organization, 'id'>
      & CreatedOrganizationFragment
    )>, query: Types.Maybe<(
      { __typename?: 'Query' }
      & { organizationBySlug: Types.Maybe<(
        { __typename?: 'Organization' }
        & Pick<Types.Organization, 'id'>
        & CreatedOrganizationFragment
      )> }
    )> }
  )> }
);

export const CreatedOrganizationFragmentDoc = gql`
    fragment CreatedOrganization on Organization {
  id
  name
  slug
}
    `;
export const CreateOrganizationDocument = gql`
    mutation CreateOrganization($name: String!, $slug: String!) {
  createOrganization(input: {name: $name, slug: $slug}) {
    organization {
      id
      ...CreatedOrganization
    }
    query {
      organizationBySlug(slug: $slug) {
        id
        ...CreatedOrganization
      }
    }
  }
}
    ${CreatedOrganizationFragmentDoc}`;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;