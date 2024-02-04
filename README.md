# Movie App



## Overview

The Movie App is a full-stack website that allows users to explore, search, and manage a collection of movies. The application offers a responsive and attractive design with a user-friendly interface.

## Features

1. **See the List of All Movies:** View a comprehensive list of all available movies.
2. **Search for a Movie:** Find a movie by its name using the search functionality.
3. **Filter Movies:** Filter movies based on director's name, release year, ratings, and language.
4. **Add a New Movie:** Users can add new movies to the database by filling out a form.
5. **Update Movie Details:** Modify the details of an existing movie by submitting an update form.
6. **Delete a Movie:** Remove a movie from the database using the movie ID.
7. **Display Movie Count by Language:** Bonus feature that shows the number of movies for a specified language.

## Technologies Used

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Languages:** HTML, CSS, JavaScript

## Backend APIs

1. **Search API:** Takes a keyword and returns a list of movies matching the query.
2. **Filter API:** Filters movies based on user-selected criteria such as director's name, release year, rating, and language.
3. **Delete API:** Deletes movies based on the movie ID.
4. **Get All Movies API:** Fetches all movie data from the backend and displays it on the screen.
5. **Update API:** Updates movie details based on the movie ID using a form submission.
6. **Add API:** Adds a new movie to the existing dataset by filling out a form.

## Database

Movies data is stored in a JSON file on the backend. CRUD operations are performed using Node.js file system module.

## Frontend

Movies are displayed in grid format using cards, featuring movie images at the top and details like name, director, language, and release year at the bottom. Each card includes update and delete buttons. The navbar provides supported filters, search functionality, and an "add movie" button.

## Bonus Feature

Implemented a bonus feature that displays the count of movies in a specified language.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the frontend and backend servers.

Feel free to contribute or provide feedback!
