const mongoose = require('mongoose');


// mongoose.connect(' // nsza baza dancyh z mongo ', {
//     useNewUrlParser: true
// });


// mongoose.Promise = global.Promise;  // to use es6 promises in mongoose
// mongoose.connection.on('error', (e) => {
//     console.error(`${e.message}`);
// });


// tu  mozna dodac modele z mongo
// require('./models/ - - - ');


const app = require('./app');

app.set('port', 4321);
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on localhost:${ server.address().port }`);
});