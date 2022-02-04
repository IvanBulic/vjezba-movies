import { Component } from "react";
import { FeaturedMoviesTitleDiv } from "../../styles/FeaturedMoviesTitleDiv.styled";
import { FeaturedMoviesTitle } from "../../styles/FeaturedMoviesTitle.styled";

class FeaturedMoviesSectionTitle extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <FeaturedMoviesTitleDiv>
            <FeaturedMoviesTitle>WATCH FEATURED MOVIES</FeaturedMoviesTitle>
        </FeaturedMoviesTitleDiv> );
    }
}
 
export default FeaturedMoviesSectionTitle;