const axios = require('axios');

const API_SECRET = ';
const MEASUREMENT_ID = '';

const config = {
  baseURL: 'https://www.google-analytics.com',
};

const theAxios = axios.create(config);

const sendEvent = async (clientId, eventName) => {
  const payload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: {},
      },
    ],
  };

  return theAxios
    .post(
      `/mp/collect?api_secret=${API_SECRET}&measurement_id=${MEASUREMENT_ID}`,
      payload
    )
    .then((response) => {
      console.log('SUCCESS');
      console.log(response);
    })
    .catch((error) => {
      console.log('ERROR');
      console.log(error);
    });
};

const CLIENT_ID = '';
const EVENT_NAME = '';

sendEvent(CLIENT_ID, EVENT_NAME);
