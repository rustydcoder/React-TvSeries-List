import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'

const SeriesListItem = props =>
   props.list.map(series => (
      <li key={series.show.id}>
         <Link to={`/series/${series.show.id}`} >
            {series.show.name}
         </Link>
      </li>
   ))

const SeriesList = props => {

   return (
      <div>
         <ul className='series-list'>
            <SeriesListItem list={props.list} />
         </ul>
      </div>
   )
}

export default SeriesList