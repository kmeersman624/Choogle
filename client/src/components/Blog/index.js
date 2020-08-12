import React from "react";
import { Card, Row, Col } from "react-materialize";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Row>
        <Col m={8} s={12}>
          <Card>
            <h3>Blog Title</h3>
            <h5>Author:</h5>
            <h5>
              <i>Published Date:</i>
            </h5>{" "}
            Blog Text
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
