const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Review = require("./models/review");



const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/bookreviews")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Database connection error:", error));

// Routes
app.get("/", (req, res) => {
  res.send("Book Review API is running");
});


app.get("/reviews", async (req, res) => {
    console.log("GET /reviews route hit"); // Debugging statement 
    try {
      const reviews = await Review.find(); // Retrieve all reviews
      res.status(200).json(reviews); // Send response as JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  });

  app.post("/reviews", async (req, res) => {
    console.log("POST /reviews route hit"); // Debugging statement 
    const { title, author, rating, reviewText } = req.body;
    
    try {
      const newReview = new Review({ title, author, rating, reviewText });
      await newReview.save(); // Save the review to MongoDB
      res.status(201).json(newReview); // Respond with the saved review
    } catch (error) {
      res.status(400).json({ error: error.message }); // Handle errors if validation fails
    }
  });

  app.put("/reviews/:id", async (req, res) => {
    console.log(`PUT /reviews/${req.params.id} route hit`); // Debugging statement 
    const { id } = req.params;
    const { title, author, rating, reviewText } = req.body;
  
    try {
      const updatedReview = await Review.findByIdAndUpdate(
        id,
        { title, author, rating, reviewText },
        { new: true, runValidators: true } // Ensure validation is applied
      );
      
      if (!updatedReview) return res.status(404).json({ message: "Review not found" });
      
      res.status(200).json(updatedReview); // Return the updated review
    } catch (error) {
      res.status(400).json({ error: error.message }); // Handle errors
    }
  });

  app.delete("/reviews/:id", async (req, res) => {
    console.log(`DELETE /reviews/${req.params.id} route hit`); // Debugging statement
    const { id } = req.params;
  
    try {
      const deletedReview = await Review.findByIdAndDelete(id);
      
      if (!deletedReview) return res.status(404).json({ message: "Review not found" });
      
      res.status(200).json({ message: "Review deleted successfully" }); // Confirmation message
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle server errors
    }
  });

  // Start Server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  
  