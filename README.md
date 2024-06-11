# task-manager
# Task Management Application

This is a simple Task Management Application that helps users organize their tasks efficiently. It allows users to create, read, update, and delete tasks through a user-friendly interface.

## Features

- **Task Management**: Users can easily manage their tasks, including creating, editing, and deleting tasks.
- **Detailed Task View**: Users can view detailed information about each task, including title, description, and due date.
- **Responsive Design**: The application is designed to be responsive, ensuring usability on both desktop and mobile devices.

## Technologies Used

### Frontend

- **HTML, CSS, JavaScript**: The fundamental technologies for building web applications.
- **React.js**: A popular JavaScript library for building user interfaces.
- **React Router**: Used for routing within the React application.
- **Axios**: A promise-based HTTP client for making requests to the backend API.

### Backend

- **Node.js**: A JavaScript runtime environment used for building server-side applications.
- **Express.js**: A web application framework for Node.js, used for building the backend API.
- **MongoDB**: A NoSQL database used for storing task data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for modeling task data in the application.
- **RESTful API**: The backend API follows the principles of Representational State Transfer (REST) for CRUD operations on tasks.

## Installation

1. **Clone the Repository**: Start by cloning the repository to your local machine:


2. **Install Dependencies**: Navigate to the backend and frontend directories and install dependencies for both:


3. **Start the Servers**: Start the backend server followed by the frontend development server:


4. **Access the Application**: Open your web browser and access the application at `http://localhost:3000`.

## API Endpoints

- **GET /tasks**: Retrieves all tasks from the database.
- **GET /tasks/:id**: Retrieves a single task by its ID.
- **POST /tasks**: Creates a new task in the database.
- **PUT /tasks/:id**: Updates an existing task in the database.
- **DELETE /tasks/:id**: Deletes a task from the database.

