const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Choose your desired port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// MongoDB connection URI (replace with your actual MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/your-database-name';

// Connect to MongoDB
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(); // Use your specific database name if different

  // Your route to handle PATCH requests
  app.patch('/book/:id', async (req, res) => {
    const { id } = req.params;
    const filter = { _id: new ObjectId(id) };

    // Example: Update a document in the 'books' collection
    try {
      const updateBookObj = req.body; // Assuming your request body contains the updated book data

      // Perform your MongoDB update operation using the 'filter' and 'updateBookObj'
      const result = await db.collection('books').updateOne(filter, { $set: updateBookObj });

      res.json({ success: true, message: 'Book updated successfully', result });
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ success: false, message: 'Error updating book' });
    }
  });

  // Start the Express server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
