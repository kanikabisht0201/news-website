// src/NewsItem.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsItem = ({ article, darkMode }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString();
  
  return (
    <Card className={`h-100 shadow-sm border-0 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
      <Card.Body>
        <Card.Title className="mb-2">{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {formattedDate} | {article.source.name}
        </Card.Subtitle>
        <Card.Text className={`text-secondary ${darkMode ? 'text-light' : 'text-dark'}`}>
          {article.description}
        </Card.Text>
        <Button variant={darkMode ? 'outline-light' : 'primary'} href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
