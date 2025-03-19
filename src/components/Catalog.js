import React from "react";
import { Card, Button, Row, Col } from "antd";
//import "../css/catalog.css";

const products = [
  {
    title: "",
    description: "",
    price: "",
    image: "",
  },

];

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Наші товари</h2>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} />}
            >
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <Button type="primary">Купити</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Catalog;
