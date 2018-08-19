// import DataLoader from 'dataloader';
import logger from '../config/logger'
import fetch from 'node-fetch';
import config from '../config/appconfig'

function fetchResponseByURL(relativeURL) {

  return fetch(`${config.MERCHANT_APP_URL}${relativeURL}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .catch(error => { console.log('request failed', error); });

}

// const merchantLoader = new DataLoader(
//   urls => Promise.all(urls.map(fetchPersonByURL))
// );
//
// function fetchPersonByURL(relativeURL) {
//   return fetchResponseByURL(relativeURL).then(json => json.person);
// }

const rest = {
  fetchResponseByURL
}

export default rest
