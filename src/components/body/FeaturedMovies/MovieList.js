import { Component } from "react";
import VerticalCard from "./VerticalCard";
import { MovieListDiv } from "../../styles/MovieListDiv.styled";

class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        FeaturedMoviesList:[]
     }

    isntOnTop(element,index)
    {
        let isBigger = index > 4?  true:false;
        return isBigger;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.MovieList !== this.props.MovieList) {
            let featuredMovies = this.props.MovieList.filter(this.isntOnTop)
            this.setState({ FeaturedMoviesList: featuredMovies });
            console.log(featuredMovies);
        }
    }


    render() { 
        return ( 
        <MovieListDiv>
                {this.state.FeaturedMoviesList.map((element,index)=><VerticalCard key={index} Movie={element}/>)}
        </MovieListDiv> );
    }
}
 
export default MovieList;