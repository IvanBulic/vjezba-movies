import { Component } from "react";
import CategoryList from "./CategoryList";
import About from "./About";
import { SideBarDiv } from "../styles/SideBarDiv.styled";

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <SideBarDiv>
            <CategoryList GenreListUrl={this.props.GenreListUrl} ChangeGenre={this.props.ChangeGenre}/>
            <About/>
        </SideBarDiv> );
    }
}
 
export default SideBar;