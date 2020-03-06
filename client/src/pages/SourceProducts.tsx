import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import BookProductList from '../components/ProductList';

import { useStoreActions, useStoreState } from '../hooks';

const SourceProducts: React.FC<RouteComponentProps> = () => {
  const { slug } = useParams();

  const fetchProducts = useStoreActions(
    actions => actions.bookProduct.fetchItems,
  );

  const items = useStoreState(state => state.bookProduct.items);

  useEffect(() => {
    fetchProducts(slug);
  }, [fetchProducts, slug]);

  return <BookProductList items={items} />;
};

export default SourceProducts;
