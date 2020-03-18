import React from 'react';

// import "./app.scss";
import "./app.css";

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div classname="container">
          <Header />
          <Counter />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
