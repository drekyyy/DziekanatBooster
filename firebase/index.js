const firebase = require('firebase')

// TODO: add credentials to env variables
const config = {
    apiKey: "AIzaSyBWnZr2wGHpnGTSJbzXXsrQdceBeNnI-Z8",
    authDomain: "dziekanatbooster.firebaseapp.com",
    databaseURL: "https://dziekanatbooster.firebaseio.com",
    projectId: "dziekanatbooster",
    storageBucket: "dziekanatbooster.appspot.com",
    messagingSenderId: "911805179723",
    appId: "1:911805179723:web:40ee7e9159c29bb837aace"
}

firebase.initializeApp(config)

module.exports = {
    Auth: require('./auth')
}