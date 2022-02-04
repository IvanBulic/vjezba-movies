import { Component } from "react";
import MovieList from "../FeaturedMovies/MovieList";
import FeaturedMoviesSectionTitle from "../FeaturedMovies/FeaturedMoviesSectionTitle";
import { FeaturedMoviesDiv } from "../../styles/FeaturedMoviesDiv.styled";

class FeaturedMovies extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <FeaturedMoviesDiv>
            <FeaturedMoviesSectionTitle/>
            <MovieList MovieList={this.props.MovieList}/>
        </FeaturedMoviesDiv> );
    }
}
 
export default FeaturedMovies;