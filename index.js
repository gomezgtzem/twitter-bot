const Twit = require('twit');

var T = new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // cada cuando va a estar solicitando datos a Twitter
    strictSSL:            true,     // solo conexión certificada SSL
  })