import { Component } from "react";
import logo from "../../../logo.png"
import {NavigationBarDiv} from "../../styles/NavigationBarDiv.styled";
import NavigationButtons from "./NavigationButtons";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <NavigationBarDiv>
            <img src={logo} height="40vh" onClick={()=>{this.props.ChangeShowTypeAndGenre()}}/>
            <NavigationButtons ChangeGenre={this.props.ChangeGenre} ChangeShowType={this.props.ChangeShowType} ChangeShowTypeAndGenre={this.props.ChangeShowTypeAndGenre}/>
        </NavigationBarDiv> );
    }
}
 
export default NavigationBar;