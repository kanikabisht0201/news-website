import React from 'react';
import NewsItem from './NewsItem';
import { Row, Col } from 'react-bootstrap';

const NewsList = ({ articles, darkMode }) => {
  if (articles.length === 0) {
    return <p className="text-center">No news articles available.</p>;
  }

  return (
    <Row>
      {articles.map((article, index) => (
        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
          {/* Pass darkMode prop to NewsItem */}
          <NewsItem article={article} darkMode={darkMode} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsList;
