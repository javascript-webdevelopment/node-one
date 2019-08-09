const express = require('express');
const app = express();

const users = [
    {
        id: 1,
        name: 'Tayte',
        height: 6
    },
    {
        id: 2,
        name: 'Kyle',
        height: 5.5
    }
];

// Endpoints
app.get('/api/users', (req, res) => {
    res.status(200).send(users);
})


app.listen(3005, () => {
    console.log('Server running!')
});