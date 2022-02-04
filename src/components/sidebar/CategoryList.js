import { Component } from "react";
import { GenresDiv } from "../styles/GenresDiv.styled";
import { GenreButton } from "../styles/GenreButton.styled";

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }

    state = { 
        genreNameList:[],
        genreIdList:[]
    }

    async componentDidMount(){
        var init = {
            method:'GET',
            cache:'no-cache'
        }

        var urlRequestNoCache = new Request(this.props.GenreListUrl,init);
            
        await fetch(urlRequestNoCache).then((res)=>res.json()).then((result) =>{
            let genreNames = [];
            let genreIds = [];

            for (let index = 0; index < result["genres"].length; index++) {
                const element = result["genres"][index];

                if(element["name"] === "Soap" || element["name"] === "Western" ){
                    continue;
                }
                genreNames= [...genreNames ,element["name"]];
                genreIds = [...genreIds ,element["id"]];
            }
            
            this.setState({
                genreNameList:genreNames,
                genreIdList:genreIds
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.GenreListUrl !== this.props.GenreListUrl) {
            var init = {
            method:'GET',
            cache:'no-cache'
            }
                var urlRequestNoCache = new Request(this.props.GenreListUrl,init);
            console.log("ree");
            fetch(urlRequestNoCache).then((res)=>res.json()).then((result) =>{
                let genreNames = [];
                let genreIds = [];

                for (let index = 0; index < result["genres"].length; index++) {
                    const element = result["genres"][index];

                    if(element["name"] === "Soap" || element["name"] === "Western"){
                        continue;
                    }

                    genreNames= [...genreNames ,element["name"]];
                    genreIds = [...genreIds ,element["id"]];
                }
            
                this.setState({
                    genreNameList:genreNames,
                    genreIdList:genreIds
                })
            })
        };
    }

    render() { 
        return ( <GenresDiv>
             {this.state.genreNameList.map((element,index)=><GenreButton key={index} onClick={()=>{this.props.ChangeGenre(this.state.genreIdList[index])}}>{element}</GenreButton>)}
        </GenresDiv>);
    }
}
 
export default CategoryList;