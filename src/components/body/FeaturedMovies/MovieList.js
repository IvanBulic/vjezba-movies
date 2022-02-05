import { Component } from "react";
import VerticalCard from "./VerticalCard";
import { MovieListDiv } from "../../styles/MovieListDiv.styled";

class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        FeaturedMoviesList:[],
        moviesLoaded:false
     }

    //skips elements that are already shown by list in recommended movies
    isntOnTop(element,index)
    {
        let isBigger = index > 4?  true:false;
        return isBigger;
    }

    //triggers when movieList prop updates
    componentDidUpdate(prevProps) {
        if (prevProps.MovieList !== this.props.MovieList) {
            //filter list if the list is not used for searching results
            let featuredMovies = this.props.ShowingSearchResults? this.props.MovieList: this.props.MovieList.filter(this.isntOnTop);
            this.setState({ 
                FeaturedMoviesList: featuredMovies,
                moviesLoaded:true
             });
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