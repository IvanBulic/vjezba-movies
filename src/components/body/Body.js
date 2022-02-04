import { Component } from "react";
import RecommendedMovies from "./BodyComponents/RecommendedMovies";
import FeaturedMovies from "./BodyComponents/FeaturedMovies";
import { BodyDiv } from "../styles/BodyDiv.styled";

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <BodyDiv>
            <RecommendedMovies MovieList={this.props.MovieList}/>
            <FeaturedMovies MovieList={this.props.MovieList}/>
        </BodyDiv> );
    }
}
 
export default Body;