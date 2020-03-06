import React from 'react';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { BookProduct } from '../model/bookProduct';

interface BookProductCardProps {
  item: BookProduct;
  favored?: boolean;
}

const BookProductCard: React.FC<BookProductCardProps> = ({
  item,
  favored = false,
}) => {
  return (
    <Card
      title={item.title}
      actions={[
        <StarFilled
          key="like"
          style={{
            color: favored ? 'gold' : undefined,
          }}
        />,
      ]}
    >
      {item.description}
    </Card>
  );
};

export default BookProductCard;
