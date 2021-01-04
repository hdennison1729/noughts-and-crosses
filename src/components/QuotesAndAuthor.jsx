import React from "react";

class QuotesAndAuthor extends React.Component {
  render() {
    const randomColour = this.props.backgroundColor;
    const html = document.documentElement;
    html.style.backgroundColor = randomColour;
    return (
      <div className="quoteBox">
        <div className="fadeIn" key={Math.random()}>
          <h1 id="quote">"{this.props.quote}"</h1>
          <div className="bottom-right">
            <h5 id="author">
              - {this.props.author ? this.props.author : "Unknown"} -
            </h5>
            <button id="newQuote" onClick={this.props.handleClick}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default QuotesAndAuthor;
