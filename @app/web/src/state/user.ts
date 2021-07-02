import { Shared_UserFragment } from '@/graphql/CurrentUser.graphql.hook';
import { atom } from 'recoil';

// TODO: complete
const userState = atom<Shared_UserFragment>({});

export { userState as carrierGlobalState };
