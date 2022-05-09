const mongoose = require('mongoose');
const app = require('./app');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

mongoose
  .connect('mongodb://localhost:27017/subPlatform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection has been done!!'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Here I am listening you at port:${port}. Date: ${new Date().toLocaleString()}`);
});
