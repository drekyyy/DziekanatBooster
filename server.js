const app = require('./app');

app.set('port', 4321);
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on localhost:${ server.address().port }`);
});