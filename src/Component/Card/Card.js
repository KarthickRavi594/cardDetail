import React from 'react';
import Cards from 'react-credit-cards';

class Card extends React.Component {
  state = {
    cvc: '342',
    expiry: '02/22',
    focus: '',
    name: 'Karthick R',
    number: '4111 2221 3331 3333',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        
      </div>
    );
  }
}

export default Card;