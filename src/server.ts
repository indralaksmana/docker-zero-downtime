import app from './app'

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${app.get('port')}`);
});

export default server;