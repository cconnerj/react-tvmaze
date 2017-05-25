import React, {Component} from 'react';
import Search from './Search'
import Results from './Results'
import './Home.css';

class Home extends Component {
  render (){
    return (
      <div className="Home">
        <h1> React TVmaze </h1>

        {
          this.props.hasSearched ?
          <Results shows={this.props.shows} /> : 
          <Search />

        }
      </div>
    )
  }
}

export default Home;
