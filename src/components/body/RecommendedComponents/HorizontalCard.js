import { Component } from "react";
import { HorizontalCardDiv } from "../../styles/HorizontalCardDiv.styled";
import { HorizontalCardTitle } from "../../styles/HorizontalCardTitle.styled";
import { HorizontalCardDescription } from "../../styles/HorizontalCardDescription.styled";

class HorizontalCard extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        BackgoundImage: "url(" + "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" + ")" ,
        Title:"Title",
        Description:"Description"
    }

    componentDidUpdate(prevProps) {
        if (prevProps.Movie !== this.props.Movie) {
            if(this.props.Movie["title"]){
                this.setState({
                    Title:this.props.Movie["title"],
                    Description: this.props.Movie["overview"].substring(0,80) + "...",
                    BackgoundImage: "url(" + "https://image.tmdb.org/t/p/w500"+ this.props.Movie["backdrop_path"] + ")" 
                })
            }else{
                this.setState({
                    Title:this.props.Movie["name"],
                    Description: this.props.Movie["overview"].substring(0,80) + "...",
                    BackgoundImage: "url(" + "https://image.tmdb.org/t/p/w500"+ this.props.Movie["backdrop_path"] + ")" 
                })
            }
        }
    }
    render() { 
        return (<HorizontalCardDiv  style={{backgroundImage : this.state.BackgoundImage}}>
            <HorizontalCardTitle>{this.state.Title}</HorizontalCardTitle>
            <HorizontalCardDescription></HorizontalCardDescription>
        </HorizontalCardDiv>);
    }
}
 

export default HorizontalCard;