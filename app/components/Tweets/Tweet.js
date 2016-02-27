'use strict';

import React, { Component } from 'react';
import mui, { Paper, Avatar } from 'material-ui';

class Tweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className="tweet">
        <div className="tweet-header">
          <Avatar
            src={this.props.data.user.profile_image_url_https} />
          <p>{this.props.data.user.screen_name}</p>
        </div>
        <p className="tweet-text">{this.props.data.text}</p>
      </Paper>
    );
  }
}

export default Tweet;
