import { Button, Result } from 'antd';
import React from 'react';
import { history, useIntl } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    style={{
      background: 'none',
    }}
    subTitle={useIntl().formatMessage({
      id: 'app.exception.description.404',
      defaultMessage: 'Sorry, the page you visited does not exist.',
    })}
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        {useIntl().formatMessage({ id: 'app.exception.back', defaultMessage: 'Back Home' })}
      </Button>
    }
  />
);

export default NoFoundPage;
