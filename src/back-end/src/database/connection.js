/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');

const mongoDb = process.env.MONGO_DB_URL;

const connectToDatabase = () => {
  mongoose.connect(mongoDb)
      .then(() => console.log('Conectamos ao MongoDb'))
      .catch((err) => console.error(err));
};

module.exports = connectToDatabase;
