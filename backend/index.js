const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

const PORT = 4000;
const dateTime = new Date();
const hour = dateTime.getHours();
console.log(typeof hour);
app.get("/", (req, res) => res.send(hour.toString()));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));