const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ service: 'ms1', time: new Date() }));
app.listen(3000, () => console.log('MS1 listening on 3000'));