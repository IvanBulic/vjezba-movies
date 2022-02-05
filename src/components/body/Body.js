import { Component } from "react";
import RecommendedMovies from "./BodyComponents/RecommendedMovies";
import FeaturedMovies from "./BodyComponents/FeaturedMovies";
import { BodyDiv } from "../styles/BodyDiv.styled";

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        let body;

        if(this.props.ShowingSearchResults)
        {
            body = <BodyDiv> <FeaturedMovies ExpandMovieList ={this.props.ExpandMovieList} MovieList={this.props.MovieList}  TitleText={"SEARCH RESULTS FOR: " + this.props.SearchInput} ShowingSearchResults={this.props.ShowingSearchResults}/></BodyDiv>
        }else{
            body = <BodyDiv> <RecommendedMovies MovieList={this.props.MovieList}/><FeaturedMovies ExpandMovieList ={this.props.ExpandMovieList}  MovieList={this.props.MovieList} TitleText="WATCH FEATURED MOVIES" ShowingSearchResults={this.props.ShowingSearchResults}/></BodyDiv>
        }

        return ( body );
        


    }
}
 
export default Body;