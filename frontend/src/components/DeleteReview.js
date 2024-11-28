import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:5001/reviews/${id}`, { method: "DELETE" })
      .then(() => {
        alert("Review deleted successfully!");
        navigate("/");
      })
      .catch((error) => console.error("Error deleting review:", error));
  };

  const cancelDelete = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-green-700 mb-6">
          Confirm Deletion
        </h1>
        <p className="text-gray-800 mb-8">
          Are you sure you want to delete this review? This action cannot be undone.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 shadow-md hover:shadow-lg transition-shadow"
          >
            Yes, Delete
          </button>
          <button
            onClick={cancelDelete}
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg transition-shadow"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;
