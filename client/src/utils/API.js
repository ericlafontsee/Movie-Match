import axios from "axios";

export default {
  // Gets all books
  getMovies: function() {
    return axios.get("/api/movies");
  }
//   // Deletes the book with the given id
//   deleteMovie: function(id) {
//     return axios.delete("/api/movies/" + id);
//   },
//   // Saves a book to the database
//   saveMovie: function(bookData) {
//     return axios.post("/api/movies", movieData);
//   }
};
