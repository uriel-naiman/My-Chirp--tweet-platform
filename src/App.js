import React from 'react';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProfileForm from './components/ProfileForm';
import TweetContext from './TweetContext';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyDnzrkMZpCWV5PlXSjnCrW916vjuGKwDqA",
  authDomain: "react-project-2-1fd5d.firebaseapp.com",
  projectId: "react-project-2-1fd5d",
  storageBucket: "react-project-2-1fd5d.appspot.com",
  messagingSenderId: "284205667699",
  appId: "1:284205667699:web:540844415295b92d9c6106",
  measurementId: "G-TZ8ECGC3K9"
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: [],
      loading: false,
      profileName: JSON.parse(localStorage.getItem('myProfileName')),
      interval: null, 
    }
  }

  async addTweet(tweet) {
      await firebase.firestore()
      .collection('tweets')
      .add(tweet);
  }

  
  async getTweetList() {
    let tweets = [];
      await firebase.firestore()
      .collection('tweets').get()
      .then((snap) => {
        tweets = snap.docs.map(doc => doc.data());
      });
    return (tweets);
}
  
  componentWillMount() {
    this.setState({ loading: true })
    const tweets = this.getTweetList(); 
    console.log(tweets);
    this.setState({ tweetArray: tweets, loading: false });
  }

  handleProfileName(name) {
    this.setState({profileName: name});
    localStorage.setItem('myProfileName', JSON.stringify(name));
  }

  render() {
    if (this.state.loading) {
      return (
        <h3 className="loading">Loading...</h3>
      );
    } else {
  return (
    <TweetContext.Provider value={{
      tweetArray: this.state.tweetArray,
      onAddTweet: (tweet) => this.addTweet(tweet),
      }}>
      <Router>
      <div className="bg-dark text-white background pb-5">
        <NavBar />
        </div>
        <Switch>
          <Route path="/profile">
              <ProfileForm 
                updateProfileName={(name) => this.handleProfileName(name)}/>
          </Route>
           <Route path="/">
            <div className="bg-dark text-white background">
              <TweetForm 
                profileName={this.state.profileName}/>
              <TweetList updateList={() => this.updateTweetList}/>
            </div>
          </Route>
          </Switch>
      </Router>
    </TweetContext.Provider>
    );
    }
  }
}

export default App;
