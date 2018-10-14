import React, { Component } from 'react';
import { Sender } from './flow';

export default class Sender extends Component {
  render() {
    return (
      <Sender
        state={{ from: '/' }}
        render={({ url }) => <a href={url}>Authorize me Cap'n</a>}
      />
    );
  }
}