import React, { useEffect, useState } from "react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5001/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  // Ensure the return statement is inside the ReviewsList function
  return (
    <div>
      <h1>Reviews</h1>
      {loading ? (
        <p>Loading...</p> // Show loading message while waiting for data
      ) : reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <h2>{review.title}</h2>
              <p>Author: {review.author}</p>
              <p>Rating: {review.rating}</p>
              <p>{review.reviewText}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;
