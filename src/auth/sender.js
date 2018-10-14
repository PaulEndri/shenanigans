import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import ENV from '../env';

export default class Sender extends Component {
  render() {
    return (
      <OauthSender
        authorizeUrl="https://www.bungie.net/en/OAuth/Authorize"
        clientId={ENV.CLIENT_ID}
        redirectURL={'https://admin.pixelpubgaming.com/success'}
        state={{ from: '/' }}
        render={({ url }) => <a href={url}>Authorize me Cap'n</a>}
      />
    );
  }
}