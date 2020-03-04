import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { Button, Result } from 'antd';

const NotFound: React.FC<RouteComponentProps> = () => (
  <Result
    status={404}
    title="404"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary" onClick={() => navigate('/')}>
        Back Home
      </Button>
    }
  />
);

export default NotFound;
