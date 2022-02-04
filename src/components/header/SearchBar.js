import { Component } from "react";
import { SearchBarDiv } from "../styles/SearchBarDiv.styled";
import { SubmitInput } from "../styles/SubmitInput.styled";

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        value :""
    }

    render() { 
        return (<SearchBarDiv>
            <form>
                <input type = "text" name="movieSearch" placeholder="Search for a movie..." onChange={(e)=>{this.setState({value : e.target.value})}}></input>
                <SubmitInput  type="submit"  value ="Search" onClick={(e)=>{e.preventDefault();this.props.SearchForMovies(this.state.value)}}></SubmitInput>
            </form>
        </SearchBarDiv> );
    }
}
 
export default SearchBar;