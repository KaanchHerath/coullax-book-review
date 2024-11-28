import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewList from "./pages/ReviewList"; 
import AddReview from "./components/AddReview";
import EditReview from "./components/EditReview";
import DeleteReview from "./components/DeleteReview";

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/edit-review/:id" element={<EditReview />} />
        <Route path="/delete-review/:id" element={<DeleteReview />} />


        </Routes>
      </Router>
    
  );
}

export default App;
