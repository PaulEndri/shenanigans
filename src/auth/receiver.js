import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import history from '../history'
import ENV from '../env';

const CLIENT_AUTH = atob(`${ENV.CLIENT_ID}:${ENV.CLIENT_SECRET}`)
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
 
  render() {
    return (
      <OauthReceiver
        tokenUrl={'https://www.bungie.net/platform/app/oauth/token/'}
        clientId={''}
        redirectUri={'https://admin.pixelpubgaming.com/clan'}
        clientSecret={'ENV.CLIENT_SECRET'}
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        tokenFetchArgs={TOKEN_ARGS}
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