import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Landing from './src/screens/landing';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      loading: false,
      ascending: false,
      initiallySorted: false
    }
  }

  getTweets = () => {
    //set loading true for waiting period. heroku can be slow. 
    this.setState({loading: true})
    fetch('https://nameless-journey-97021.herokuapp.com/', {
      method: 'GET'
    })
    .then(res => {
      return res.json()
    })
    .then(tweets=>{
      console.log(tweets)
      this.setState({ tweets, loading: false })
    }) 
  }

  setAscending = () => {
    let { tweets } = this.state
    tweets.sort((a, b) => {return (a.tweet > b.tweet) ? 1: ((b.tweet > a.tweet) ? -1 : 0)})
    this.setState({tweets, ascending: true, initiallySorted: true})
  }

  setDescending = () => {
    let { tweets } = this.state
    tweets.sort((a, b) => {return (a.tweet > b.tweet) ? -1: ((b.tweet > a.tweet) ? 1 : 0)})
    this.setState({tweets, ascending: false, initiallySorted: true})
  }

  render = () => {
    return (
      <View style={{flex: 1}}>
        <Header />
          <Landing loading={this.state.loading} tweets={this.state.tweets} />
        <Footer getTweets={this.getTweets} tweetsLoaded={this.state.tweets.length} initiallySorted={this.state.initiallySorted} setAscending={this.setAscending} setDescending={this.setDescending} ascending={this.state.ascending} />
      </View>
    );
  }
}

