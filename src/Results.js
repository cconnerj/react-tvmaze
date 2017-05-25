import React, { Component } from 'react'
import './Results.css'

class Results extends Component {
  render(){
    const { shows } = this.props
    console.log(shows)
    const results = shows.map( (show, index) =>{
      return (
        <div key={index} className="Results_item">
          <img
            className="Results_item_image"
            src={show.image}
            alt={show.name} />
          <p className="Results_item_name">{show.name}</p>
        </div>
      )
    })

    return (
      <div className = "Results">
        {results}
      </div>
    )
  }
}

export default Results;
