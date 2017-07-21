// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '119061422051039', // your App ID
        'clientSecret'    : 'add8b5aa77f6f4f87b4da6defedb4b7e', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'XuPAbfMdnKM9CmwjJd7SF08x8',
        'consumerSecret'     : 'FxahJ63NZUS2tUOyTHV4pe4kxRWxCgMw1PqO7ZQVQGOAm2YBU9',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
