import React, { Component } from 'react';
import '../Main/Quote.scss';
import { FaLightbulb } from 'react-icons/fa';




class Quote extends React.Component {

  render() {
          
  return(
      <div className = "quote" >
      <div
        className="quote__container"
        key={Math.random()}
        
      >

        <p className="quote__text">{this.props.text} <span className="quote__author"> {this.props.author}</span></p>
        <button
          onClick={this.props.handleClick}
          className="quote__add">
          <FaLightbulb fill="#ffffff" />
          </button>
        
      </div>
      
      </div>
    );
  }
}


export default Quote;