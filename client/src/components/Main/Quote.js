import React, { Component } from 'react';
import QuoteIcon from '../../assets/icons/quote-icon-20.png';
import '../Main/Quote.scss';




class Quote extends React.Component {

  render() {
          
  return(
      <div className = "quote" >
      <div
        className="quote__container"
        key={Math.random()}
        
      >

        <p className="quote__text">{this.props.text}</p>
        <p className="quote__author">{this.props.author}</p>
        <button
          onClick={this.props.handleClick}
          className="quote__add">
          &#43;</button>
      </div>
      </div>
    );
  }
}


export default Quote;