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

    //gets new genre list based on show type
    async GetGenreList(){
        //sets request properties
        var init = {
            method:'GET',
            cache:'no-cache'
        }
        var urlRequestNoCache = new Request(this.props.GenreListUrl,init);
        
        await fetch(urlRequestNoCache).then((res)=>res.json()).then((result) =>{
            let genreNames = [];
            let genreIds = [];

            //iterates throu genre list and adds them to the list with the exception of genres with no results
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

    //run when page opens
    componentDidMount(){
        this.GetGenreList();
    }

    //run if prop GenreListUrl changes
    componentDidUpdate(prevProps) {
        if (prevProps.GenreListUrl !== this.props.GenreListUrl) {
            this.GetGenreList();
        };
    }

    render() { 
        return ( <GenresDiv>
             {this.state.genreNameList.map((element,index)=><GenreButton key={index} onClick={()=>{this.props.ChangeGenre(this.state.genreIdList[index])}}>{element}</GenreButton>)}
        </GenresDiv>);
    }
}
 
export default CategoryList;