# Note Taking App

The Note Taking App is a web application that allows users to take down notes and store name information. It provides functionality to add, delete, and view notes. The frontend of the application is built using React.js and Redux, while the backend is developed with Nest.js. The database used for storing data is AWS RDS (Relational Database Service).

## Features

- **Note Creation**: Users can add new notes by providing the necessary details such as name, email, note content, and date.
- **Note Deletion**: Users can delete existing notes from the app.
- **Note Viewing**: Users can view the list of notes stored in the application.
- **Error Handling**: The application should provide appropriate error handling and error messages for a smooth user experience.
- **Testing**: The application should be thoroughly tested to ensure its functionality and reliability.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js: Ensure that Node.js is installed on your machine. You can download it from [Node.js official website](https://nodejs.org).
- AWS RDS: Set up an AWS RDS instance to store the notes data. Obtain the necessary connection details, including the database URL, username, password, and database name.

## Installation

Follow the steps below to set up and run the Note Taking App:

### Frontend Setup

1. Navigate to the project's frontend directory:
`cd frontend`
2. Install the dependencies
`npm install`

3. Open the `.env` file and update the necessary configuration, such as the API endpoint and other environment variables.

4. Run the application:

`npm start`

5. Configure the AWS RDS connection details in the `src/config/database.ts` file.

6. Run the backend server:


The backend server should now be running on [http://localhost:5000](http://localhost:3000).

## Usage

1. Access the Note Taking App in your web browser.

2. Use the provided user interface to perform the following actions:
- Add a new note by filling in the required information.
- Delete an existing note by selecting the appropriate option.
- View the list of notes stored in the application.

## Additional Improvements

Given more time, the following improvements can be made to the Note Taking App:

- **Testing**: Expand and improve the testing suite to ensure comprehensive test coverage for all components and functionalities.
- **URL Constants**: Store the URLs and other constants in a separate file for better code organization and maintainability.
- **Success and Failure Messages**: Implement success and failure messages to provide feedback to the user after performing certain actions.
- **Error Handling**: Enhance error handling on both the frontend and backend to gracefully handle and display errors to the user.
- **Enhanced Backend Error Handling**: Implement robust error handling mechanisms on the backend to handle various error scenarios and provide informative error messages.

## Conclusion

The Note Taking App is a simple yet useful web application for taking down notes and storing name information. It leverages React.js and Redux for the frontend, Nest.js