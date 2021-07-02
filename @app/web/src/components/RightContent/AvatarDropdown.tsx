import React, { useCallback, useState } from 'react';
import { LockOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Modal, Spin } from 'antd';
import { history, useIntl, useModel } from 'umi';
// import { outLogin } from '@/services/auth';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import { ApolloClient, InMemoryCache, useApolloClient } from '@apollo/client';
import { LogoutDocument } from '@/graphql/Logout.graphql.hook';
import type { LogoutMutation, LogoutMutationVariables } from '@/graphql/Logout.graphql.hook';
import styles from './index.less';
import UserChangeDetails from '../User/ChangeDetails';
import UserChangePassword from '../User/ChangePassword';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * Log out and save the current url
 */
const logout = async (apolloClient: ApolloClient<object>) => {
  // await outLogin();

  const logoutResult = await apolloClient.mutate<LogoutMutation, LogoutMutationVariables>({
    mutation: LogoutDocument,
    // variables: {}
  });
  if (!logoutResult.errors?.length) {
    // message.success('logout successful!');
    // const fetchedUser = await fetchUserInfo();
    // console.info("fetchedUser", fetchedUser)
  } else {
    console.error('logoutResult.errors', logoutResult.errors); // TODO: better error
    // message.error(logoutResult.errors.map(e=>e.message).join('; '));
  }

  const { query, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname,
      }),
    });
  }
};

// TODO:TS current user / intital state => move to recoil
const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { initialState, setInitialState } = useModel('@@initialState'); // TODO: consider just running CurrentUser GQL Query ?
  const apolloClient = useApolloClient();
  const intl = useIntl();

  const [visibleChangeDetails, setVisibleChangeDetails] = useState(false);
  const [visibleChangePassword, setVisibleChangePassword] = useState(false);

  // const handleChangeDetailsClick = useCallback(() => {
  //   setVisibleChangeDetails(true);
  // }, []);

  const handleChangeDetailsClose = useCallback(() => {
    setVisibleChangeDetails(false);
  }, []);

  const handleChangePasswordClose = useCallback(() => {
    setVisibleChangePassword(false);
  }, []);

  const onMenuClick = useCallback(
    (event: {
      key: React.Key;
      keyPath: React.Key[];
      item: React.ReactInstance;
      domEvent: React.MouseEvent<HTMLElement>;
    }) => {
      const { key } = event;
      if (key === 'logout' && initialState) {
        setInitialState({ ...initialState, currentUser: undefined });
        logout(apolloClient);
        return;
      }
      // TODO: refactor and clean as no longer redirects, but modal popups
      // history.push(`/account/${key}`);
      if (key === 'details') {
        setVisibleChangeDetails(true);
      }
      if (key === 'password') {
        setVisibleChangePassword(true);
      }
    },
    [initialState, setInitialState],
  );

  // TODO: change spinner
  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.id) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {/* {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          Personal center
        </Menu.Item>
      )} */}
      {/* {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          {intl.formatMessage({ id: 'menu.account.settings', defaultMessage: 'account settings' })}
        </Menu.Item>
      )} */}
      {menu && (
        <Menu.Item key="details">
          <UserOutlined />
          Change Details
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="password">
          <LockOutlined />
          Change Password
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        {intl.formatMessage({ id: 'menu.account.logout', defaultMessage: 'logout' })}
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" /> */}
          <Avatar size="small" className={styles.avatar} alt="avatar">
            {currentUser.name[0]}
          </Avatar>
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
      <Modal
        destroyOnClose
        visible={visibleChangeDetails}
        closable
        onCancel={handleChangeDetailsClose}
        footer={[
          <Button key="back" onClick={handleChangeDetailsClose}>
            Close
          </Button>,
        ]}
      >
        <UserChangeDetails />
      </Modal>
      <Modal
        destroyOnClose
        visible={visibleChangePassword}
        closable
        onCancel={handleChangePasswordClose}
        footer={[
          <Button key="back" onClick={handleChangePasswordClose}>
            Close
          </Button>,
        ]}
      >
        <UserChangePassword />
      </Modal>
    </>
  );
};

export default AvatarDropdown;
