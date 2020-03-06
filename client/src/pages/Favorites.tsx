import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Result } from 'antd';

const Favorites: React.FC<RouteComponentProps> = () => {
  return <Result title="You have no favorites yet." />;
};

export default Favorites;
