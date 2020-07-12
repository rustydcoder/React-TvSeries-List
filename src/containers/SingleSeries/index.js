import React, { Component } from 'react';
import Loader from '../../components/Loader'

class SingleSeries extends Component {
state ={
   show: null
}

componentDidMount() {
   const {id} = this.props.match.params
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
         .then(res => res.json())
         .then(res => this.setState({ show: res }))
         .catch(err => console.log(err))
}

   render() {
      const {show} = this.state
      console.log(show)
      return (
         <div>
            {show === null && <Loader/>}
            {
               show !== null &&
               <div>
                  <p>Title: {show.name}</p>
                  <p>Premiered: {show.premiered}</p>
                  <p>Rating: {show.rating.average}</p>
                  <p>Episodes: {show._embedded.episodes.length}</p>
                  <p>
                     <img alt='show' src={show.image.medium} />
                  </p>
               </div>
            }
         </div>
      )
   }
}

export default SingleSeries