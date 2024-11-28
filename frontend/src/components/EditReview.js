import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    title: "",
    author: "",
    rating: "",
    reviewText: "",
  });

  useEffect(() => {
    // Fetch the existing review details
    fetch(`http://localhost:5001/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => setReview(data))
      .catch((error) => console.error("Error fetching review:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then(() => {
        alert("Review updated successfully!");
        navigate("/");
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-extrabold text-green-700 text-center mb-6">
        Edit Review
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={review.title}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={review.author}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
            min="1"
            max="5"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="reviewText" className="block text-gray-700 font-semibold mb-2">
            Review Text
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={review.reviewText}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg transition-shadow"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
