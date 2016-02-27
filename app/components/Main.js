'use strict';

import React, { Component } from 'react';
import styles from '../styles.scss';
import mui, { AppBar, TextField, RaisedButton } from 'material-ui';
import Tweets from './Tweets/Tweets';
import Hashtags from './Hashtags/Hashtags';
import TweetApi from '../TweetApi';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      hashtags: [],
      tweets: [],
      search: ''
    }
  }

  componentDidMount() {
    TweetApi.getHashtags( (err, res) => {
      let hashtags = JSON.parse(res.text);
      this.setState({hashtags});
    });

    TweetApi.getTweets( (err, res) => {
      let tweets = [];
      if (!err && res.text) {
        tweets = JSON.parse(res.text);
      }
      this.setState({tweets});
    });
  }

  clickHashtag(name) {
    // Tweet api call to get results and update state
    TweetApi.searchByHashtag(name, (err, res) => {
      let tweets = [];
      if (!err && res.text) {
        tweets = JSON.parse(res.text);
      }
      this.setState({tweets});
    })

  }

  onSubmit(e) {
    e.preventDefault();
    TweetApi.search(this.state.search, (err, res) => {
      let tweets = [];
      if (!err && res.text) {
        tweets = JSON.parse(res.text);
      }
      this.setState({ search: '', tweets});
    })
  }

  updateSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div>
        <AppBar title="TWC Tweet App" />
        <div className="content">
          <div className="sidebar">
            <Hashtags
              hashtags={this.state.hashtags}
              clickHandler={this.clickHashtag.bind(this)}/>
          </div>

          <div className="main">
            <form
              className="search"
              onSubmit={this.onSubmit.bind(this)} >
              <TextField
                className="searchInput"
                type="text"
                name="search"
                hintText="Search"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} />
              <RaisedButton
                primary={true}
                label="Search"
                onClick={this.onSubmit.bind(this)} />
            </form>
            <Tweets tweets={this.state.tweets} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
