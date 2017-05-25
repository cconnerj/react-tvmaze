import React, {Component} from 'react'

class Search extends Component{
  render(){
    return(
      <div className= "Search">
        <form>
          <input type='text' placeholder='Enter Seach Here' />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
