import React, { Component} from 'react';
import axios from 'axios';
import LibraryList from './LibraryList';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  
  const [books, setBooks] = useState({ items: [] });

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    // console.log(result.data);
    setBooks(result.data)
}

  // Submit handler
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
       
        fetchBooks();
    }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="react, javascript"
            value={searchTerm}
            onChange={onInputChange}
          />

          <button type="submit">Search</button>
        </label>
      </form>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default Search;

class Library extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        library: []
    };
}

componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes`;

    axios.post(url, {
        data: {
            news: {
                title: 'sssss',
                description: 'kkkkk'
            }
        }
    })
    
    axios.get(url)
    .then((response) => {
        this.setState({
            library: response.data.volumes
        })
    })
    .catch((error) => console.log(error));
}

renderItems() {
    return this.state.library.map((item) => (
        <LibraryList key={item.url} item={item} />
    ))
}

render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}



export default Library;