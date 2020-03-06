import React from 'react';
import { Col, Row, Result } from 'antd';
import { BookProduct } from '../model/bookProduct';
import { VehicleProduct } from '../model/vehicleProducts';
import { ComputerProduct } from '../model/computerProduct';
import BookProductCard from './BookProduct';

interface BookProductListProps {
  items: (BookProduct | VehicleProduct | ComputerProduct)[];
}

const BookProductList: React.FC<BookProductListProps> = ({ items }) => {
  if (!items.length) {
    return <Result title="This sources does not have any products yet." />;
  }

  return (
    <Row gutter={16}>
      {items.map(item => (
        <Col
          span={24}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
          key={item.id}
          style={{ marginBottom: 16 }}
        >
          {(item as BookProduct) ? (
            <BookProductCard item={item as BookProduct} />
          ) : null}
        </Col>
      ))}
    </Row>
  );
};

export default BookProductList;
