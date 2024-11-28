import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the updated backend
    fetch("http://localhost:5001/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      fetch(`http://localhost:5001/reviews/${id}`, { method: "DELETE" })
        .then(() => {
          setReviews(reviews.filter((review) => review._id !== id));
        })
        .catch((error) => console.error("Error deleting review:", error));
    }
  };

  const editReview = (id) => {
    navigate(`/edit-review/${id}`);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
        User Reviews
      </h1>
      {reviews.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reviews.map((review) => (
            <li
              key={review._id}
              className="bg-white border border-green-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden max-w-m"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-800 mb-2">
                  {review.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-bold">Author:</span> {review.author}
                </p>
                <p className="text-yellow-600 font-medium text-lg mb-4">
                  {review.rating} ⭐
                </p>
                <p className="text-gray-700 line-clamp-3 mb-6">{review.reviewText}</p>

                {/* Action Buttons placed after review */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => editReview(review._id)}
                    className="text-sm bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteReview(review._id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-green-600 text-lg">
          No reviews yet. Be the first to share your thoughts!
        </p>
      )}
      <div className="mt-8 text-center">
        <Link
          to="/add-review"
          className="inline-block bg-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
        >
          Add a New Review
        </Link>
      </div>
    </div>
  );
};

export default ReviewsList;
