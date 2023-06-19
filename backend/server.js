const express = require('express');
const moment = require('moment');
const fs = require('fs');


const app = express();
const port = 6010;

app.use(express.static('public'));

app.get('/time', (req, res) => {
  const currentTime = moment().format('HH:mm:ss');
  const isDaytime = moment().isBetween('06:00:00', '18:00:00');

  const data = { isDaytime };
  const jsonData = JSON.stringify(data);

  fs.writeFile('db.json', jsonData, (err) => {
    if (err) {
      console.error('Error saving data:', err);
    } else {
      console.log('Data saved successfully.');
    }
  });

  res.json({ currentTime, isDaytime });

});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

 
