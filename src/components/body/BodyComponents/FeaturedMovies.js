import { Component } from "react";
import MovieList from "../FeaturedMovies/MovieList";
import FeaturedMoviesSectionTitle from "../FeaturedMovies/FeaturedMoviesSectionTitle";
import { FeaturedMoviesDiv } from "../../styles/FeaturedMoviesDiv.styled";
import { ShowMoreButton } from "../../styles/ShowMoreButton.styled";

class FeaturedMovies extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <FeaturedMoviesDiv>
            <FeaturedMoviesSectionTitle TitleText={this.props.TitleText}/>
            <MovieList MovieList={this.props.MovieList} ShowingSearchResults={this.props.ShowingSearchResults}/>
            <ShowMoreButton onClick={()=>{this.props.ExpandMovieList()}} >SHOW MORE</ShowMoreButton>
        </FeaturedMoviesDiv> );
    }
}
 
export default FeaturedMovies;