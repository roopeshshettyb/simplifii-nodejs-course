const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { handlePutRequest, handleCreateUserRequest } = require('./controllers/putController');

/**
 * Controllers
 * Routes
 * Models
 */

app.use(bodyParser.json());

function handleGetRequest(req, res) {
    /**try-catch blocks */
    // try {
    //     console.log(myName);
    // } catch (err) {
    //     console.log(err);
    //     console.log('There was an error');
    // }
    console.log(myName);
    res.send('Hello World!!');
}

function handlePostRequest(req, res) {
    const body = req.body;
    console.log(body);
    body.name = 'Server';
    res.send(body);
}

app.get('/', handleGetRequest);
app.post('/', handlePostRequest);
app.put('/', handlePutRequest);
app.post('/user/create', handleCreateUserRequest);

app.listen(3000, () => {
    console.log('Our server has started');
})
