'use strict';

import React, { Component } from 'react';
import mui, { ListItem, Avatar } from 'material-ui';

class Hashtag extends Component {
  constructor(props) {
    super(props);
  }

  clickHandler() {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <ListItem
        onClick={this.clickHandler.bind(this)}
        primaryText={this.props.name}>
      </ListItem>
    );
  }
}

export default Hashtag;
