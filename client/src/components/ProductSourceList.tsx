import React from 'react';
import { Card, Col, Row, Result } from 'antd';
import { ProductSource } from '../model/productSource';
import { useNavigate } from '@reach/router';

interface ProductSourceListProps {
  items: ProductSource[];
}

const ProductSourceList: React.FC<ProductSourceListProps> = ({
  items = [],
}) => {
  const navigate = useNavigate();

  if (!items.length) {
    return (
      <Result title="No sources available at the moment. Please come back later." />
    );
  }

  return (
    <Row gutter={16}>
      {items.map(item => (
        <Col span={12} key={item.slug} style={{ marginBottom: 16 }}>
          <Card
            title={item.name}
            bordered={false}
            hoverable
            onClick={() => navigate(`sources/${item.slug}`)}
          >
            {item.description}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductSourceList;
