//const mongoose = require('mongoose');
//const { MongoClient } = require('mongodb');
//const client = new MongoClient('mongodb://mongo:27017/cinema');

//const connectionString = 'mongodb://mongo:27017/cinema';

//mongoose.connect(client, { useNewUrlParser: true }).catch((e) => {
//  console.error('Connection error', e.message);
//});

//const db = mongoose.connection;

//module.exports = db;
const mongoose = require('mongoose');

// Define the MongoDB connection string
const connectionString = 'mongodb://mongo:27017/cinema';

// Connect to MongoDB using Mongoose
mongoose.connect(connectionString, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true // Ensures compatibility with newer MongoDB drivers
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((e) => {
    console.error('Connection error:', e.message);
  });

// Access the Mongoose connection instance
const db = mongoose.connection;

// Export the connection for use in other parts of the application
module.exports = db;


