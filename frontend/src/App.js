import './App.css'
import Logo from './profile.jpg' ;
import TestPost from './test-post.jpg';
import StorySlider from './components/StorySlider/StorySlider';
import Publication from './components/Publication/Publication';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserContext from './context/user.context';
import Login from './views/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './views/Profile/Profile';

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
  const [userContext, setUserContext] = useState(null)

  useEffect(() => {
    if(document.cookie["token"] !== undefined){
      axios.get("http://localhost:5000/me", {
        headers: {
          authorization: document.cookie["token"],
        }
      }).then((res) => {
        console.log(res)
        if(res.data.status === 403){
          localStorage.token = null
          return
        }
        setUserContext({
          username: res.data.user.username,
          email: res.data.user.email,
          profileImage: res.data.user.profileImage,
          token: res.data.user.token,
        })
        axios.defaults.headers['authorization'] = localStorage.token
      
      })
    }
  }, [])
  return (
    <div className="App">
      <h1>InstaClone</h1>
      <UserContext.Provider value={{userContext, setUserContext}}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {userContext === null ? <Redirect to="/login"/> : ""}
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
              {userContext === null ? <Redirect to="/login"/> : ""}
              ASD
            </Route>
            <Route path="/profile" exact>
              {userContext === null ? <Redirect to="/login"/> : ""}
              <Profile/>
            </Route>
            <Route path="/login" exact>
              {userContext !== null ? <Redirect to="/"/> : ""}
              <Login/>
            </Route>
          </Switch>
          <NavBar/>
        </Router>
        
      </UserContext.Provider>
    </div>
  );
}

export default App;
