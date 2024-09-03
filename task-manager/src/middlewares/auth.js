// Import the necessary modules
const jwt = require('jsonwebtoken'); // JWT library for signing and verifying tokens
const mongoose = require('mongoose'); // Mongoose for MongoDB interaction
const User = require('../models/user.model'); // User model for interacting with the users collection

// Authentication middleware function
const auth = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header and remove the 'Bearer ' prefix
    const token = req.header('Authorization').replace('Bearer ', '');
    
    // Verify the JWT using the secret key 'thisismynewcode'
    // This decodes the token and retrieves the payload (which includes the user ID)
    const decoded = jwt.verify(token, 'thisismynewcode');
    
    // Log the decoded JWT to see the contents
    console.log('Decoded JWT:', decoded);

    // Log the query being made to find the user in the database
    console.log('Querying user with ID:', decoded.id);
    
    // Search for the user in the database using the decoded user ID
    // Also ensure that the token is part of the user's tokens array
    const user = await User.findOne({ _id: new mongoose.Types.ObjectId(decoded.id), 'tokens.token': token });
    
    // If no user is found with the given ID and token, log an error message and throw an error
    if (!user) {
      console.log('User not found with the given token and ID.');
      throw new Error('User not found');
    }

    // If the user is found, attach the user object to the request object
    // This makes the user information available to subsequent middleware and route handlers
    req.user = user;
    
    // Call the next middleware or route handler
    next();
  } catch (e) {
    // If an error occurs during the process (e.g., token is invalid), send a 401 Unauthorized response
    res.status(401).send({ error: 'Please authenticate.' });
    
    // Log the error message for debugging purposes
    console.log('Error:', e.message);
  }
};

// Export the auth middleware function so it can be used in other parts of the application
module.exports = auth;
