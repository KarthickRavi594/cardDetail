import './App.css';
import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Card from './Component/Card/Card.js';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: '',
      type:''
    }
  }
  
  render() {
    return (
    <div className="App">
        <Card/>
    </div>
  );
  }
  
}

export default App;
