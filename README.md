# Book Review Web Application

## Overview

This is a simple web application designed to manage book reviews. Users can add, edit, delete, and view reviews for books. The application has a frontend built with **React** and a backend built with **Node.js** and **Express**. The goal of this project is to allow users to share their thoughts on books, rate them, and provide feedback, all through a user-friendly interface.

### Key Features:
- View a list of book reviews.
- Add new book reviews.
- Edit or delete existing reviews.
- Responsive layout for mobile and desktop views.

## Technologies Used:
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB 
- **API**: REST API for managing reviews

---

## Setup Instructions

### 1. **Backend Setup**

#### Prerequisites:
- **Node.js** installed on your system.
- **MongoDB** (either locally or via a cloud service like MongoDB Atlas).

#### Steps:
1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-repo/book-review-app.git](https://github.com/KaanchHerath/coullax-book-review.git)
   cd book-review-app
   ```

2. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the `backend` directory and add the following environment variables (replace values as needed):
   ```bash
   PORT=5001
   MONGO_URI=your-mongodb-connection-string
   ```

5. **Run the Backend:**
   ```bash
   npm run server
   ```

   The backend server will be running on `http://localhost:5001`.

---

### 2. **Frontend Setup**

#### Prerequisites:
- **Node.js** installed on your system.

#### Steps:
1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Frontend:**
   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3000`.

---

### 3. **Testing the Application**

- Open your browser and go to `http://localhost:3000` to view the frontend.
- The backend should be running and accessible at `http://localhost:5001`. The frontend makes API calls to this server for CRUD operations on reviews.


## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Please ensure that your code follows the project’s coding style and includes tests where applicable.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:
- Ensure that MongoDB is running, and the correct URI is provided in the `.env` file.
- If you're using MongoDB Atlas, be sure to whitelist your IP address in the MongoDB Atlas dashboard to allow connections.

--- 
