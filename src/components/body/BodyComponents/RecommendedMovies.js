import { Component } from "react";
import HorizontalCard from "../RecommendedComponents/HorizontalCard";
import { HorizontalCardDivOrganizer } from "../../styles/HorizontalCardDivOrganizer.styled";
import { HorizontalCardContainerDiv } from "../../styles/HorizontalCardContainerDiv.styled";

class RecommendedMovies extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    componentDidUpdate(prevProps) {
        if (prevProps.MovieList !== this.props.MovieList) {

        }
    }

    render() { 
        return ( <HorizontalCardContainerDiv>
            <HorizontalCardDivOrganizer>
                <HorizontalCard Movie={this.props.MovieList[0]}/>
            </HorizontalCardDivOrganizer>
            <HorizontalCardDivOrganizer>
                <HorizontalCard Movie={this.props.MovieList[1]}/>
                <HorizontalCard Movie={this.props.MovieList[2]}/>
            </HorizontalCardDivOrganizer>
            <HorizontalCardDivOrganizer>
                <HorizontalCard Movie={this.props.MovieList[3]}/>
                <HorizontalCard Movie={this.props.MovieList[4]}/>
            </HorizontalCardDivOrganizer>
        </HorizontalCardContainerDiv> );
    }
}
 
export default RecommendedMovies;