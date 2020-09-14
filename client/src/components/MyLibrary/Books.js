import React, { Component } from 'react';


class Books extends Component {
    render() {
      let bookItems;
      if (this.props.books) {
        bookItems = this.props.books.map(book => {
          let id = book.id;
          let title = book.volumeInfo.title;
        //   let thumbnail = book.volumeInfo.imageLinks.thumbnail;
          let authors = book.volumeInfo.authors;
          let publisher = book.volumeInfo.publisher;
          let pageCount = book.volumeInfo.pageCount;
          let publishedDate = book.volumeInfo.publishedDate;
          
          return (
            <div key={id} header={title} eventKey={id}>
              <div>
                    {/* <img src={thumbnail} alt="presentation" /> */}
                  
                  
                    <ul>
                      <li><strong>Authors: </strong>{authors}</li>
                      <li><strong>Publisher: </strong>{publisher}</li>
                      <li><strong>Publish Date: </strong>{publishedDate}</li>
                      <li><strong>Page Count: </strong>{pageCount}</li>
                      
                    </ul>
                
                </div>
               
              
            </div>
          );
        });
      }
      return (
        <div>
          <div>
            {bookItems}
          </div>
        </div>
      );
    }
  }
  
  export default Books;