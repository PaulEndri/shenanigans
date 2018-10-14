import { createAuthFlow } from 'react-router-dom';
import ENV from '../env';

const {Sender, Receiver} = createAuthFlow({
    authorizeUrl:'https://www.bungie.net/en/OAuth/Authorize',
    tokenUrl: 'https://www.bungie.net/platform/app/oauth/token/',
    redirectUrl: 'https://admin.pixelpubgaming.com/clan',
    clientId: ENV.CLIENT_ID,
    clientSecret: ENV.CLIENT_SECRET
});

export {Sender, Receiver};