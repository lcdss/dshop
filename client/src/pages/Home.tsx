import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import ProductSourceList from '../components/ProductSourceList';

import { useStoreActions, useStoreState } from '../hooks';

const Home: React.FC<RouteComponentProps> = () => {
  const fetchProductSources = useStoreActions(
    actions => actions.productSource.fetchItems,
  );

  const items = useStoreState(state => state.productSource.items);

  useEffect(() => {
    fetchProductSources();
  }, [fetchProductSources]);

  return <ProductSourceList items={items} />;
};

export default Home;
