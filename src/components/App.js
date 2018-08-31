import React from 'react';
import Tomato from './static/images/tomato.png';
/*
Same as:
class App extends React.Component {
  render() {
    return(
      <h1>Hello World!</h1>
    );
  }
}*/

console.log(Tomato);

const App = () => (
  <div>
    <h1>Hello world!!!!@#!@#!@</h1>
    <img src={Tomato} />
  </div>
);

export default App;
