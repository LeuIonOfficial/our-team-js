const express = require('express')

const app = express();
const PORT = 5000;
const dateTime = new Date();
const hour = dateTime.getHours();
console.log(typeof hour);
app.get("/", (req, res) => res.send(hour < 6 ? false : hour > 20 ? false : true));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));