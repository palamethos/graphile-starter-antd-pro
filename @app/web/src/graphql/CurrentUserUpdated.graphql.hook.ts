/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CurrentUserUpdatedSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserUpdatedSubscription = { __typename?: 'Subscription', currentUserUpdated: Types.Maybe<{ __typename?: 'UserSubscriptionPayload', event: Types.Maybe<string>, user: Types.Maybe<{ __typename?: 'User', id: any, username: string, name: string, avatarUrl: Types.Maybe<string>, isAdmin: boolean, isVerified: boolean }> }> };


export const CurrentUserUpdatedDocument = gql`
    subscription CurrentUserUpdated {
  currentUserUpdated {
    event
    user {
      id
      username
      name
      avatarUrl
      isAdmin
      isVerified
    }
  }
}
    `;

/**
 * __useCurrentUserUpdatedSubscription__
 *
 * To run a query within a React component, call `useCurrentUserUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CurrentUserUpdatedSubscription, CurrentUserUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CurrentUserUpdatedSubscription, CurrentUserUpdatedSubscriptionVariables>(CurrentUserUpdatedDocument, options);
      }
export type CurrentUserUpdatedSubscriptionHookResult = ReturnType<typeof useCurrentUserUpdatedSubscription>;
export type CurrentUserUpdatedSubscriptionResult = Apollo.SubscriptionResult<CurrentUserUpdatedSubscription>;