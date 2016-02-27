'use strict';

import React, { Component } from 'react';
import mui, { Paper } from 'material-ui';
import Tweet from './Tweet';

class Tweets extends Component {
  constructor(props) {
    super(props);
  }

  renderTweets() {
    let tweets = [];
    this.props.tweets.forEach((tweet) => {
      tweets.push((
        <Tweet
          key={tweet.id}
          data={tweet} />
      ));
    });

    if(tweets.length === 0) {
      tweets.push((
        <Paper className="no-tweets" key="no_tweets">
          <p>No tweets here.</p>
        </Paper>
      ));
    }
    return tweets;
  }

  render() {
    return (
      <div>
        {this.renderTweets()}
      </div>
    );
  }
}

export default Tweets;
