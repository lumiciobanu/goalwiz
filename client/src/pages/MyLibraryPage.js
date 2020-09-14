import React, { Component } from 'react';
import axios from 'axios';
import Books from '../components/MyLibrary/Books';
import SearchInput from '../components/MyLibrary/SearchInput';


class MyLibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      text: ''
    };
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(text) {
    this.setState({text: text}, this.getBooks());
  }

  render() {
    return (
      <div className="library-container">
        
        
              <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text} />
              <Books books={this.state.books} />
        </div>   
    );
  }
}

export default MyLibraryPage;