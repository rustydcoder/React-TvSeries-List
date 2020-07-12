import React, { Component } from 'react';
import Intro from '../../components/Intro'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'

class Series extends Component {

   state = {
      series: [],
      seriesName: '',
      isFetching: false
   }

   onSeriesInputChange = e => {
      this.setState({ seriesName: e.target.value, isFetching: true })
      fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
         .then(res => res.json())
         .then(res => this.setState({ series: res, isFetching: false }))
         .catch(err => console.log(err))

   }

   render() {
      const { series, seriesName, isFetching } = this.state
      return (
         <div>
            <Intro message="Here you can find all of your most loved series" />
            <div>
               <input value={seriesName} type='text' onChange={this.onSeriesInputChange} />
            </div>
            {
               !isFetching && series.length === 0 && !seriesName.trim()
               &&
               <p>Please Enter Series Name</p>
            }
            {
               !isFetching && series.length === 0 && seriesName.trim()
               &&
               <p>Didn't find {seriesName.trim()}</p>
            }
            {
               isFetching && <Loader />
            }
            {
               !isFetching && <SeriesList list={series} />
            }

         </div>
      )
   }
}

export default Series