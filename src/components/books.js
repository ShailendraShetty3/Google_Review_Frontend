import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Modal,
  Button,
  Input,
  List,
  Avatar,
  message,
} from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BaseURL } from "../urls/urls"

import "./style.css";

const { TextArea } = Input;

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [value, setValue] = useState("");
  const [currentBookId, setCurrentBookId] = useState("");

  // const apiKey = "AIzaSyCWMDI_bLKjzHBt-lsNPjJb7_FexwJoBNE";
  const apiKey = process.env.REACT_APP_BOOKS_KEY;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${apiKey}`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching the books: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [apiKey]);

  if (loading) {
    return <div>Loading books...</div>;
  }

  const handleClick = (value) => {
    setCurrentBookId(value);
    axios
      .get(`${BaseURL}review/?book_id=${value}`)
      .then((response) => {
        setReviews(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    setReviewVisible(!reviewVisible);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitReview = (e) => {
    e.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    const user = sessionStorage.getItem("userName");

    axios
      .post(
        `${BaseURL}review/`,
        {
          book_id: currentBookId,
          review_author: user,
          review_date: date,
          review_comment: value,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        message.success("Review submitted successfully!");
        setReviews((prevReviews) => [response.data, ...prevReviews]);
        setValue("");
        setReviewVisible(false);
      })
      .catch((error) => {
        console.error("Submit error:", error);
        message.error("Failed to submit review. Please try again.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[24, 24]}>
        {books.map((book) => (
          <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => handleClick(book.id)}
              cover={
                <img
                  alt={book.volumeInfo.title}
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                />
              }
              style={{ height: "auto", maxWidth: "300px", margin: "0 auto" }}
            >
              <Card.Meta
                title={book.volumeInfo.title}
                description={
                  <div>
                    <p>
                      <strong>Author:</strong>{" "}
                      {book.volumeInfo.authors?.join(", ") || "Unknown"}
                    </p>
                    <p>
                      <strong>Book Id:</strong> {book.id || "Unknown"}
                    </p>
                    <p>
                      <strong>Published Date:</strong>{" "}
                      {book.volumeInfo.publishedDate || "Unknown"}
                    </p>
                    <p>
                      <strong>Page Count:</strong>{" "}
                      {book.volumeInfo.pageCount || "N/A"}
                    </p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Reviews"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <>
          <Button
            style={{ marginLeft: "90%", marginBottom: "3%" }}
            onClick={handleAdd}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>

          {reviewVisible && (
            <>
              <TextArea
                rows={4}
                placeholder="Write your review"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  resize: "none",
                }}
                onChange={handleChange}
                value={value}
              />
              <Button
                style={{ marginLeft: "40%", marginTop: "3%" }}
                onClick={submitReview}
              >
                Submit
              </Button>
            </>
          )}

          {reviews.length > 0 ? (
            <List
              dataSource={reviews}
              renderItem={(review, index) => (
                <List.Item key={review.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      />
                    }
                    title={
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Author: {review.review_author}</span>
                        <span>Date: {review.review_date}</span>
                      </p>
                    }
                    description={`Review: ${review.review_comment}`}
                  />
                </List.Item>
              )}
            />
          ) : (
            <p>No reviews available.</p>
          )}
        </>
      </Modal>
    </div>
  );
};

export default BooksList;
