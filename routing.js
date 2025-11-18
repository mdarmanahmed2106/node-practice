const express = require('express');
const app = express();
const port = 3030;//port number

//home
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});
//about
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});
//contact
app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
}); 
