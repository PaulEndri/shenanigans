import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import history from '../history'
import ENV from '../env';
import qs from 'qs'

const CLIENT_AUTH = btoa(`${ENV.CLIENT_ID}:${ENV.CLIENT_SECRET}`)
const TOKEN_ARGS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${CLIENT_AUTH}`
  }
}

export default class Receiever extends Component {
  handleSuccess = async (accessToken, { response, state }) => {
    console.log('Successfully authorized');

    document.cookie `PXPAUTHCLAN=${JSON.stringify(response)}`

    history.push('/clan')
  }

  handleError = error => {
    console.error('An error occured', error);
    console.error(error.message);
  };
 
  tokenFn = (url) => {
    const urlParts = url.split('?');
    const base = urlParts[0]
    const query = urlParts[1];
    const params = qs.parse(query)
    const fetchUrl = `${base}?grant_type=authorization_code&code=${params.code}`

    return fetch(fetchUrl, TOKEN_ARGS)
  }

  render() {
    return (
      <OauthReceiver
        tokenUrl={'https://www.bungie.net/platform/app/oauth/token/'}
        clientId={'007'}
        redirectUri={'https://admin.pixelpubgaming.com/clan'}
        tokenFn={this.tokenFn}
        clientSecret={'ITSASECRET'}
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
          </div>
        )}
      >
          {({ processing, state, error }) => (
      <div>
        {processing && <p>Authorization in progress</p>}
        {state && <p>Will redirect you to {state.from}</p>}
        {error && <p className="error">Error: {error.message}</p>}
      </div>
    )}
      </OauthReceiver>
    );
  }
}