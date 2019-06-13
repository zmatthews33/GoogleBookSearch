import axios from "axios";

export default {
  // Get book from google search
  getGoogleSearchBooks: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
      //+
      //"&key=" +
      //process.env.G_API_KEY
    );
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to database
  saveBook: function(savedBooks) {
    return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
