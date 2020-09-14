import React, { Component } from 'react';

class SearchArea extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value
      }
    }
  
    onChange(e) {
      this.setState({value: e.target.value});
      this.props.onChange(this.state.value);
    }
  
    render() {
      return (
        <div className="search-container">
          <form>
          <input
            type="text"
            value={this.state.value}
            placeholder="Search Books..."
            onChange={this.onChange.bind(this)}
          />
          <button>Search</button>
          </form>
        </div>
      );
    }
  }
  
  export default SearchArea;