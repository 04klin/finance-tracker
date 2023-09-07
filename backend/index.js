const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

//Enable cors
app.use(cors());


app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(port, () => {
  console.log(`Application is open on http://localhost:${port}`);
});