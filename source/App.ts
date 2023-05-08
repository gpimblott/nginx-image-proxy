import express from 'express';
import bodyParser from 'body-parser';
import * as path from "path";

const PORT = 8090;
const HOST = "127.0.0.1";

require('console-stamp')(console, 'HH:MM:ss.l');

const app = express();

app.use(bodyParser.json());

// Get all of the requests to /image_* for processing
// The pattern matching uses rehular expressions so you could be more precise
// The * is a wild card meaning any number of characters.
app.get('/image_*', (req, res) => {
    console.log("Retrieving path " + req.url);
    //res.send("Hello World");
    // If I use this to send a file it disables caching ?
    res.sendFile(path.join(__dirname,"/test-file.png"));
});

app.listen(PORT, "127.0.0.1",() => {
    console.log(`Server listening on port ${PORT}`);
});
