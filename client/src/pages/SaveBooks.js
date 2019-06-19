import React, { Component } from "react";
import API from "../Utils/API.js";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import SavedBooks from "../Components/SavedBooks";

class SaveBooks extends Component {
  state = {
    savedBooks: []
  };

  //when component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  //function to remove book by id
  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid className="container">
        <Jumbotron />
        <Container>
          <SavedBooks
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </Container>
    );
  }
}

export default SaveBooks;
