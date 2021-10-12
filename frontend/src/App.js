import './App.css'
import Logo from './profile.jpg' ;
import TestPost from './test-post.jpg';
import StorySlider from './components/StorySlider/StorySlider';
import Publication from './components/Publication/Publication';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import userContext from './context/user.context';
import Login from './components/Login/Login';


const stories = [{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},{
  username: "rgramblado",
  image: Logo,
  seen: false
},]

function App() {
  return (
    <div className="App">
      <h1>InstaClone</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <StorySlider stories={stories}/>
            <Publication data={
              {profile: {
                username: "rgramblado",
                image: Logo
              },
              publication: {
                image: TestPost,
                likes: 20,
                likedByMe: false,
                title: "El mejor framework del mundo #react",
                comments: [{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },]
              }
            }}/>
            <Publication data={
              {profile: {
                username: "rgramblado",
                image: Logo
              },
              publication: {
                image: TestPost,
                likes: 20,
                likedByMe: true,
                title: "El mejor framework del mundo #react",
                comments: [{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },]
              }
            }}/>
            <Publication data={
              {profile: {
                username: "rgramblado",
                image: Logo
              },
              publication: {
                image: TestPost,
                likes: 20,
                likedByMe: false,
                title: "El mejor framework del mundo #react",
                comments: [{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },]
              }
            }}/>
            <Publication data={
              {profile: {
                username: "rgramblado",
                image: Logo
              },
              publication: {
                image: TestPost,
                likes: 20,
                likedByMe: false,
                title: "El mejor framework del mundo #react",
                comments: [{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },{
                  username: "dark_programming",
                  content: "Toda la razón monstro"
                },]
              }
            }}/>
          </Route>
          <Route path="/search" exact>
            ASD
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
        </Switch>
        <NavBar/>
      </Router>
      
      
    </div>
  );
}

export default App;
