import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component {

    render() {
        const movies = this.props.data.map((movie, index) => {

            return(
                <Movie title={movie.title} key={index}>
                    {movie.showTime}                    
                </Movie>
            )})

        return (
            <div className='movie-list'>
                {movies}
            </div>
        )
    }
   
}

export default MovieList;
