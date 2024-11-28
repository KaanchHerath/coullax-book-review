import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchReviews = () => API.get("/reviews");
export const createReview = (newReview) => API.post("/reviews", newReview);
export const updateReview = (id, updatedReview) =>
  API.put(`/reviews/${id}`, updatedReview);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);
