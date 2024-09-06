import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

import "./style.css"


const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // API key from Google Cloud Console


  const apiKey = 'AIzaSyCWMDI_bLKjzHBt-lsNPjJb7_FexwJoBNE';
  
  // const apiKey = import.meta.env.REACT_APP_BOOKS_KEY;

  useEffect(() => {
    // Fetch the book data from Google Books API
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${apiKey}`);
        setBooks(response.data.items || []); // Ensure fallback if no items are found
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the books: ', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[24, 24]}>
        {books.map((book) => (
          <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
            {/* <Card
              hoverable
              cover={<img alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks?.thumbnail} />}
              style={{ height: '100%' }}
            > */}



<Card
    hoverable
    cover={
      <img
        alt={book.volumeInfo.title}
        src={book.volumeInfo.imageLinks?.thumbnail}
        style={{
          width: '100%',          // Set width to 100% to fill the container
          height: '150px',        // Set a fixed height
          objectFit: 'cover',     // Ensure the image covers the area without distortion
          maxWidth: '100%',       // Ensure image doesn't overflow the card
        }}
      />
    }
    style={{ height: 'auto', maxWidth: '300px', margin: '0 auto' }} // Adjust card width as needed
            >
              
              <Card.Meta
                title={book.volumeInfo.title}
                description={
                  <div>
                    <p><strong>Author:</strong> {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                    <p><strong>Book Id:</strong> {book.id || 'Unknown'}</p>
                    <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate || 'Unknown'}</p>
                    <p><strong>Page Count:</strong> {book.volumeInfo.pageCount || 'N/A'}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BooksList;
