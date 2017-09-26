import React from 'react'
import MovieList from './MovieList'

class MovieBox extends React.Component{

    constructor(props){
        super(props)

        this.state = {data:[
            {title:'Hobbit', showTime:'Monday 19.00'}
        ]}
    }

    render (){
        return (
        <div className='movie-box'>
            <h1>Uk Opening This Week</h1>
            <MovieList data={this.state.data}/>
            <a href="http://www.imdb.com/showtimes/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2750716742&pf_rd_r=1Q3VZNR0F3FY2CDWPS4R&pf_rd_s=right-5&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_sh_lk1" role="button">Get more showtime</a>

        </div>
        )}
}

export default MovieBox;