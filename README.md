# React + Vite + tailwindCSS

# User Management & Authentication - CRUD with Redux Toolkit

## Project Description
This project implements a user authentication system where users can log in by providing their email and password. The system validates the credentials against user data fetched from a backend API and grants access if the user is found. It also displays appropriate error messages for missing inputs or failed login attempts.

For backend data, a **dummy json-server**  has been used to simulate user data, allowing for testing of the login functionality without setting up a real backend.

## Tech Stack
- React
- Axios (for API requests)
- React Hot Toast (for notifications)
- react-router-dom (for navigation)
- **dummy json-server** (for backend API simulation)

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/alphacalling/user-dash.git

## Backend API Setup:

This project uses a simulated backend using dummyjson for API responses. You don't need to set up a real backend for testing.

The user data is fetched from http://localhost:5000/users, which is managed by the dummyjson server. Ensure the server is running to handle these requests.

## Features
1-CRUD Operations with Redux Toolkit:
Users can create, read, update, and delete records using a centralized Redux store. The state of the application is managed with the help of Redux Toolkit’s slices.
2-Login Form: Users can log in by entering their email and password.
3-Form Validation: The form checks if both the email and password fields are filled in before submission.
4-API Integration: The component fetches user data from a backend API (dummyjson server) using Axios.
5-User Authentication: It compares the entered credentials with the fetched user data and displays an error message if the credentials do not match.
6-Session Management: The user’s ID is stored in sessionStorage on successful login.
7-Error Handling: Appropriate messages are displayed if there are issues such as incomplete form input or user not found.


## working 

State Management with Redux Toolkit:

0-Redux slices are used to manage user state. The CRUD operations (Add, Update, Delete users) are dispatched via Redux actions.
1-Data Fetching: On component mount, it fetches user data from the dummyjson backend API (http://localhost:5000/users) using Axios.

2-State Management: It uses React's useState hook to manage the state of the login form (email and password).

3-Form Submission: When the user submits the form:

4-The component checks if both email and password are filled in.
It compares the entered credentials with the fetched user data.
If the credentials match, it stores the user's ID in sessionStorage and navigates to the home page.
If the credentials do not match, it shows an error message.
Notifications: Success and error messages are displayed using react-hot-toast.

Navigation: After successful login, the user is redirected to the home page using useNavigate from react-router-dom.

## screenshots
![Alt text](assets/Screenshot%20(121).png);
![Alt text](assets/Screenshot%20(122).png);
![Alt text](assets/Screenshot%20(123).png);
![Alt text](assets/Screenshot%20(124).png);