import React, { useState } from "react";

const AddReview = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { title, author, rating, reviewText };

    try {
      const response = await fetch("http://localhost:5001/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      if (response.ok) {
        alert("Review added successfully!");
        window.location.href = "/"; // Redirect to the review list
      } else {
        alert("Error adding review!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-8 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
          Add a New Review
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter the title of the review"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Rate between 1 and 5"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Review Text</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Write your review here..."
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg transition-shadow"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
