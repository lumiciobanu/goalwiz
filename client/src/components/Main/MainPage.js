import React from 'react';
//components
import Header from '../Header/Header';
import Quote from '../Main/Quote';
import AddSection from '../Main/AddSection';
import MainMenu from '../Main/MainMenu';
//data
import quotes from './QuotesData';



class MainPage extends React.Component {
    
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

  
  render () {
    return(
      <section className="main-section">
        <Header />
        <Quote 
          handleClick={this.handleClick}
          {...this.state}
        />
        <AddSection />
        <MainMenu />
        </section>
    );
  }
}
  
export default MainPage;
  