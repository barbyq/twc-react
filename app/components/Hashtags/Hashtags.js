'use strict';

import React, { Component } from 'react';
import mui, { Card, List } from 'material-ui';
import Hashtag from './Hashtag';

class Hashtags extends Component {
  constructor(props) {
    super(props);
  }

  renderHashtags() {
    let hashtags = [];
    this.props.hashtags.forEach((hashtag) => {
      hashtags.push((
        <Hashtag
          key={hashtag.id}
          name={hashtag.name}
          clickHandler={this.props.clickHandler} />
      ));
    });
    return hashtags;
  }

  render() {
    return (
      <Card>
        <h3>Trending</h3>
        <List>{this.renderHashtags()}</List>
      </Card>
    );
  }
}

export default Hashtags;
