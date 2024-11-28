import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReviewList from "./pages/ReviewList"; // Correct the name and path if necessary

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<ReviewList />} />

        </Routes>
      </Router>
    
  );
}

export default App;
