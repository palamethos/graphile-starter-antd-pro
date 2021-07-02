import { UserRoles } from '@app/graphql';
import { Shared_UserFragment } from '@/graphql/CurrentUser.graphql.hook';

export default function access(initialState: { currentUser?: API.CurrentUser }) {
  const { currentUser } = initialState || {};
  return {
    // TODO: refactor and have better access
    isAdmin: !!(currentUser as Shared_UserFragment)?.isAdmin, // TODO:TS
    isUser: !!(currentUser as Shared_UserFragment)?.usersRoles.find((r) => r.role === UserRoles.User), // TODO:TS
    isLoggedIn: !!currentUser?.id,
  };
}
