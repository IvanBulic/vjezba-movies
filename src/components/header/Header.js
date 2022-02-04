import { Component } from "react";
import SearchBar from "./SearchBar";
import NavigationBar from "./NavigationBar/NavigationBar";
import {HeaderContainer} from "../styles/HeaderContainer.styled";    

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    render() { 
        return (<HeaderContainer>
            <SearchBar SearchForMovies={this.props.SearchForMovies}/>
            <NavigationBar ChangeGenre={this.props.ChangeGenre} ChangeShowType={this.props.ChangeShowType} ChangeShowTypeAndGenre={this.props.ChangeShowTypeAndGenre}/>
        </HeaderContainer> );
    }
}
 
export default Header;