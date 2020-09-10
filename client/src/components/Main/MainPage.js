import React from 'react';
//components
import Header from '../Header/Header';
import Quote from './Quote';
import Goals from './Goals';
import MainMenu from './MainMenu';
import Habits from '../Habit/Habits';
//data
import quotes from './QuotesData';






class MainPage extends React.Component {
  //Quote random generator  
  constructor() {
    super();
    this.state = {
      text: quotes[0].text,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }

  shuffleQuotes(array) {
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      text: generateRandomQuote.text,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  //End of Quote random generator

  render () {
    return(
      <section className="main-section">
        <Header />
        <Quote 
          handleClick={this.handleClick}
          {...this.state}
        />
        {this.state.myName}
        <Goals />
        <Habits />
        <MainMenu />
      
        </section>
    );
  }
}
  
export default MainPage;
  