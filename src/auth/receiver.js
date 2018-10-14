import React, { Component } from 'react';
import { Receiver } from './flow';
import history from '../history'

const TOKEN_ARGS = {
  method: 'POST',
  headers: {
    'COntent-Type': 'application/x-www-form-urlencoded'
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
      <Receiver
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
      </Receiver>
    );
  }
}