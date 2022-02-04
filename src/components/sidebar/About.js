import { Component } from "react";
import { AboutDiv } from "../styles/AboutDiv.styled";
import { AboutTitle } from "../styles/AboutTitle.styled";
import { AboutText } from "../styles/AboutText.styled";

class About extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <AboutDiv>
            <AboutTitle>
                About
            </AboutTitle>
            <AboutText>Reprehenderit Lorem reprehenderit enim exercitation anim ad consequat. Nisi deserunt et dolore magna proident veniam ullamco esse ad veniam voluptate. Proident aute ex laborum aliquip non. Velit est duis ea duis irure ipsum excepteur.</AboutText>
        </AboutDiv>);
    }
}
 
export default About;