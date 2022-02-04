import { Component } from "react";
import { NavigationButtonsDiv } from "../../styles/NavigationButtonsDiv.styled";
import { NavigationButton } from "../../styles/NavigationButton.styled";

class NavigationButtons extends Component {
    state = {  } 

    render() { 
        return (<NavigationButtonsDiv>            
            <NavigationButton onClick={(e)=>{this.props.ChangeShowTypeAndGenre(true,"")}}>Home</NavigationButton> 
            <NavigationButton onClick={(e)=>{this.props.ChangeShowType(true)}}>Movies</NavigationButton> 
            <NavigationButton onClick={(e)=>{this.props.ChangeShowType(false)}}>TV Shows</NavigationButton> 
            <NavigationButton>News</NavigationButton> 
            <NavigationButton>Contact</NavigationButton> 
            </NavigationButtonsDiv>);
    }
}
 
export default NavigationButtons;