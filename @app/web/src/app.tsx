import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
// import { PageLoading } from '@ant-design/pro-layout';
import CSSSpin from './components/CSSSpin';
import { notification } from 'antd';
import type { RequestConfig } from 'umi'; // , RunTimeLayoutConfig
import { history, Link } from 'umi';
// import RightContent from '@/components/RightContent';
// import Footer from '@/components/Footer';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { withApollo } from '@app/lib';
import { RecoilRoot } from 'recoil';
// import defaultSettings from './defaultSettings';

import { CurrentUserDocument } from '@/graphql/CurrentUser.graphql.hook';
import type {
  CurrentUserQueryResult,
  CurrentUserQueryVariables,
} from '@/graphql/CurrentUser.graphql.hook';

// ? TODO: check vs newer https://raw.githubusercontent.com/ant-design/ant-design-pro/c96a2f15d43141b4286dc0bdae7b65ec9373e8a0/src/app.tsx

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const apolloClient: ApolloClient<InMemoryCache> = withApollo(GRAPHQL_URL);

export function rootContainer(container) {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>{container}</RecoilRoot>
    </ApolloProvider>
  );
}

// /**
//  * When obtaining user information is slow, a loading is displayed
//  */
// export const initialStateConfig = {
//   // loading: <PageLoading />,
//   loading: <CSSSpin />,
// };

/**
 * @see  https://umijs.org/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const query = await apolloClient.query<
        CurrentUserQueryResult['data'],
        CurrentUserQueryVariables
      >({
        query: CurrentUserDocument,
      });
      console.log('current user', query);
      // TODO: double check ?
      if (!query.data?.currentUser) {
        throw new Error('Not logged in...');
      }
      return query.data?.currentUser;
    } catch (error) {
      console.error('fetchUserInfo ERR', error);
      history.push(loginPath);
    }
    return undefined;
  };
  // If it is a login page, do not execute
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {}, // defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: {}, // defaultSettings,
  };
}

// TODO: remove as using graphql
/**
 * Exception handler
    200: The server successfully returned the requested data. ',
    201: New or modified data is successful. ',
    202: A request has entered the background queue (asynchronous task). ',
    204: Data deleted successfully. ',
    400: 'There was an error in the request sent, and the server did not create or modify data. ',
    401: The user does not have permission (token, username, password error). ',
    403: The user is authorized, but access is forbidden. ',
    404: The request sent was for a record that did not exist. ',
    405: The request method is not allowed. ',
    406: The requested format is not available. ',
    410':
        'The requested resource is permanently deleted and will no longer be available. ',
    422: When creating an object, a validation error occurred. ',
    500: An error occurred on the server, please check the server. ',
    502: Gateway error. ',
    503: The service is unavailable. ',
    504: The gateway timed out. ',
 * @see https://beta-pro.ant.design/docs/request
 */
export const request: RequestConfig = {
  errorHandler: (error: any) => {
    const { response } = error;

    if (!response) {
      notification.error({
        description: 'Your network is abnormal and cannot connect to the server',
        message: 'network anomaly',
      });
    }
    throw error;
  },
};

// ? TODO: double check might be performance issue !
// export const layout: RunTimeLayoutConfig = ({ initialState }) => {
//   return {
//     rightContentRender: () => <RightContent />,
//     disableContentMargin: false,
//     waterMarkProps: {
//       content: initialState?.currentUser?.name,
//     },
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history;
//       // If you are not logged in, redirect to login
//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         history.push(loginPath);
//       }
//     },
//     links: isDev
//       ? [
//           <Link to="/umi/plugin/openapi" target="_blank">
//             <LinkOutlined />
//             <span>openAPI 文档</span>
//           </Link>,
//           <Link to="/~docs">
//             <BookOutlined />
//             <span>业务组件文档</span>
//           </Link>,
//         ]
//       : [],
//     menuHeaderRender: undefined,
//     // Custom 403 page
//     // unAccessible: <div>unAccessible</div>,
//     ...initialState?.settings,
//   };
// };
