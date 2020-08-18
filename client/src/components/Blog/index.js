import React from "react";
import { Card, Row, Col } from "react-materialize";

const Blog = () => {
  return (
    <div className="blogposts">
      <h1>Blog</h1>
      <Row>
        <Col m={8} s={12}>
          <Card>
            <h4>Web Design</h4>
            <h6>Author: Mike Zlotkowski</h6>
            <h5>
              <i>Published Date: 08/14/2020</i>
            </h5>{" "}
            Blog Text
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
