import express from 'express';
import compression from 'compression';  // compresses requests
import bodyParser from 'body-parser';

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * App routes.
 */
app.get('/', (req, res) => {
  res.send('Welcome to typescript!');
});

app.get('/status', (req, res) => {
  res.send('Application online!');
});

export default app