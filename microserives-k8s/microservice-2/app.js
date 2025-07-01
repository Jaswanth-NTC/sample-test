const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ service: 'ms2', time: new Date() }));
app.listen(3001, () => console.log('MS2 listening on 3001'));