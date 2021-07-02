/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import * as Types from '../../../graphql/index';

import { gql } from '@apollo/client';
export type ProfileSettingsForm_UserFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'id' | 'name' | 'username' | 'avatarUrl'>
);

export const ProfileSettingsForm_UserFragmentDoc = gql`
    fragment ProfileSettingsForm_User on User {
  id
  name
  username
  avatarUrl
}
    `;