import { StyledHeader } from './components/styles/MainAppComponents/StyledHeader.styled';
import { StyledBody } from './components/styles/MainAppComponents/StyledBody.styled';
import { StyledFooter } from './components/styles/MainAppComponents/StyledFooter.styled';
import { AppContainer } from './components/styles/MainAppComponents/AppContainer.styled';
import Body from './components/body/Body';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Footer from './components/footer/Footer';
import { Component } from 'react';
import MovieList from './components/body/FeaturedMovies/MovieList';


class App extends Component {

state = { 
  MovieList : {},
  PickedGenreId: 0,
  ShowingMovies: true,
  GenreListUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US",
  ShowingSearchResults: false,
  SearchInput:"",
  PageIndex:1
} 

//gets movie list from a specified url
async fetchMovieList(url)
{
  //sets up the header properties
  var init = {
    method:'GET',
    cache:'no-cache'
  }

  //sets up the request
  var urlRequestNoCache = new Request(url,init);
  console.log(url);

  //gets movie list and saves it to MovieList state
  await fetch(urlRequestNoCache).then((res)=>res.json()).then((result) =>{
    this.setState({MovieList: result["results"]});
  })
}

// sets new url based on picked genre and and show type(movie/TV show) then fetches the movie list
getNewMovieList = async() =>{
  let url;
  let temp;

  //sets new url based on picked genre and and show type (movie/TV show)
  if(this.state.ShowingMovies)
  {
    if(this.state.PickedGenreId===0)
    {
      url ="https://api.themoviedb.org/3/movie/popular?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&page=1";
      temp=1;
    }else
    {
      url ="https://api.themoviedb.org/3/discover/movie?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+this.state.PickedGenreId+"&with_watch_monetization_types=flatrate";
      temp = 2;
    }
  }else{
    if(this.state.PickedGenreId===0)
    {
      url ="https://api.themoviedb.org/3/tv/popular?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&page=1";
      temp =3;
    }else
    {
      url = "https://api.themoviedb.org/3/discover/tv?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres="+this.state.PickedGenreId+"&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
      temp=4
    }
  }

  //calls function with generated url
  await this.fetchMovieList(url);
}

//Sets url of genre list based on type of show (movie/TV show)
ChangeGenreListUrl = () =>{
  if(this.state.ShowingMovies)
  {
    this.setState({ GenreListUrl:  "https://api.themoviedb.org/3/genre/movie/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US", PickedGenreId:0},this.getNewMovieList);
  }else{
    this.setState({GenreListUrl: "https://api.themoviedb.org/3/genre/tv/list?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US", PickedGenreId:0},this.getNewMovieList)
  }
}

//changes movie list based on genre parameter
changeGenre = async(genre) =>{
  this.setState({
    PickedGenreId:genre,
    ShowingSearchResults: false,
    SearchInput:""
  },this.getNewMovieList);
}

//changes movie list based on show type(movie/TV show) parameter(isShowingMovies)
changeShowType = async(isShowingMovies) =>{
  this.setState({
    ShowingMovies: isShowingMovies,
    ShowingSearchResults: false,
    SearchInput:""
  },this.ChangeGenreListUrl);
}

//Changes movie list based on new genre and show type parametre (isShowingMovies, genre)
changeShowTypeAndGenre = async(isShowingMovies,genre) =>{
  this.setState({
    ShowingMovies: isShowingMovies,
    PickedGenreId: genre,
    ShowingSearchResults: false,
    SearchInput:""
  },this.getNewMovieList);
}

//get new fresh list (just Movies of all genres by popularity) when entering the site
async componentDidMount(){
  await this.getNewMovieList();
}

//searches for a movie list by entering a string as a parameter
searchForMovies = (searchQuery)=>{
  let url;

  //return if empty string
  if(searchQuery==="")
  {
    return;
  }

  //other urls based on show type
  if(this.state.ShowingMovies)
  {
    url = "https://api.themoviedb.org/3/search/movie?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&query="+ searchQuery +"&page=1&include_adult=false";
  }else{
    url = "https://api.themoviedb.org/3/search/tv?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&page=1&query="+ searchQuery +"&include_adult=false";
  }

  this.setState({ 
    ShowingSearchResults: true,
    SearchInput: searchQuery
  });

  //fetchs list with new url
  this.fetchMovieList(url);
}

expandMovieList = async() =>{
  let nextPage = this.state.PageIndex+1;
  let url;
  let tempList = this.state.MovieList;

  if(this.state.ShowingMovies)
  {
    if(this.state.PickedGenreId===0)
    {
      url ="https://api.themoviedb.org/3/movie/popular?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&page="+nextPage;
    }else
    {
      url ="https://api.themoviedb.org/3/discover/movie?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+nextPage+"&with_genres="+this.state.PickedGenreId+"&with_watch_monetization_types=flatrate";
    }
  }else{
    if(this.state.PickedGenreId===0)
    {
      url ="https://api.themoviedb.org/3/tv/popular?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&page="+nextPage;
    }else
    {
      url = "https://api.themoviedb.org/3/discover/tv?api_key=c16bae1dd6141d4e67ff8b3d97e0cdf1&language=en-US&sort_by=popularity.desc&page="+nextPage+"&timezone=America%2FNew_York&with_genres="+this.state.PickedGenreId+"&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
    }
  }

  await this.fetchMovieList(url);
  
  this.setState({
    PageIndex:nextPage,
    MovieList:[...tempList,...this.state.MovieList]
  });

}

render(){
return (
  <AppContainer>
    <StyledHeader>
       <Header SearchForMovies={this.searchForMovies} ChangeGenre={this.changeGenre} ChangeShowType={this.changeShowType} ChangeShowTypeAndGenre={this.changeShowTypeAndGenre}/> 
    </StyledHeader>
    <StyledBody >
      <SideBar GenreListUrl={this.state.GenreListUrl} ChangeGenre={this.changeGenre}/>
      <Body MovieList={this.state.MovieList} ShowingSearchResults={this.state.ShowingSearchResults} SearchInput={this.state.SearchInput} ExpandMovieList ={this.expandMovieList}/>
    </StyledBody>
    <StyledFooter>
      <Footer/>
    </StyledFooter>
  </AppContainer>
);}
}
 
export default App;
