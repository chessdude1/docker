const express = require('express');
const router = require('./router/router.js')
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(
  cors({
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    origin: 'https://test-heroku-yml-rs.herokuapp.com',
    credentials: true,
  })
)
app.use('/api', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start()