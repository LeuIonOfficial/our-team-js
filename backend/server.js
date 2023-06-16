const express = require('express');
const moment = require('moment');

const app = express();
const port = 6000;

app.use(express.static('public'));

app.get('/time', (req, res) => {
  const currentTime = moment().format('HH:mm:ss');
  const isDaytime = moment().isBetween('06:00:00', '18:00:00');

  res.json({ currentTime, isDaytime });
});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

 
