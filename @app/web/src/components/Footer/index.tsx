// import { useIntl } from 'umi';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { DefaultFooter } from '@ant-design/pro-layout';
// import {version} from '../package.json';

export default () => {
  // const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: 'Ant Group Experience Technical Department',
  // });

  return (
    <DefaultFooter
      copyright={`2019-${dayjs().format('YYYY')} GS-ANTD-PRO (v0.0.0)`}
      links={[
        {
          key: 'home',
          title: <HomeOutlined />,
          href: 'https://www.google.com/',
          blankTarget: true,
        },
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
