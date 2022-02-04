import { Component } from "react";
import { VerticalCardDiv } from "../../styles/VerticalCardDiv.styled";
import { VerticalImg } from "../../styles/VerticalImg.styled";
import { Genre } from "../../styles/Genre.styled";
import { MovieTitle } from "../../styles/MovieTitle.styled";

class VerticalCard extends Component {
    constructor(props) {
        super(props);
    }

    state = { 
        image:"",
        genre:"",
        title :""      
    }

    async getGenreById(genreIdList,url)
    {
        let genreName;
        let listOfAllIds;

        var init = {
            method:'GET',
            cache:'no-cache'
          }
        
          var urlRequestNoCache = new Request(url,init);
        
          await fetch(urlRequestNoCache).then((res)=>res.json()).then((result) =>{
            listOfAllIds = result["genres"];
            
            for (let index = 0; index < listOfAllIds.length; index++) {
                const element = listOfAllIds[index];

                if(element["id"] === genreIdList[0]) 
                {
                    this.setState({ genre: element["name"] });
                }
            }
        });
        return genreName;
    }

    async componentDidMount(){
        let tempGenre,url;

        if(this.props.Movie["title"])
        {
            url = "https://api.themoviedb.org/3/genre/movie/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US"
            await this.getGenreById(this.props.Movie["genre_ids"],url);

            this.setState({ 
                image: "https://image.tmdb.org/t/p/w500" + this.props.Movie["poster_path"] ,
                title: this.props.Movie["title"]
            });
        }else{
            url = "https://api.themoviedb.org/3/genre/tv/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US";
            await this.getGenreById(this.props.Movie["genre_ids"],url);

            this.setState({ 
                image: "https://image.tmdb.org/t/p/w500" + this.props.Movie["poster_path"] ,
                title: this.props.Movie["name"]
            });
        }
    }

    async componentDidUpdate(prevProps)
    {
        if(prevProps.Movie !== this.props.Movie)
        {
            let tempGenre,url;

            if(this.props.Movie["title"])
            {
                url = "https://api.themoviedb.org/3/genre/movie/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US"
                await this.getGenreById(this.props.Movie["genre_ids"],url);

                this.setState({ 
                    image: "https://image.tmdb.org/t/p/w500" + this.props.Movie["poster_path"] ,
                    title: this.props.Movie["title"]
                });
            }else{
                url = "https://api.themoviedb.org/3/genre/tv/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US";
                await this.getGenreById(this.props.Movie["genre_ids"],url);

                this.setState({ 
                    image: "https://image.tmdb.org/t/p/w500" + this.props.Movie["poster_path"] ,
                    title: this.props.Movie["name"]
                });
            }
        }
    }

    render() { 
        return ( <VerticalCardDiv>
            <VerticalImg  src= {this.state.image}/>
            <Genre>{this.state.genre}</Genre>
            <MovieTitle>{this.state.title}</MovieTitle>
        </VerticalCardDiv> );
    }
}
 
export default VerticalCard;