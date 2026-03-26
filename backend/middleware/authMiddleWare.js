import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Admin from '../models/adminModel.js'; // Import your Admin model

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 1. Try to find the user in the User model first
      let foundUser = await User.findById(decoded.id)
        .select('-password')
        .populate('department', '_id departmentName');

      // 2. If not found in User, check the Admin model
      if (!foundUser) {
        foundUser = await Admin.findById(decoded.id).select('-password');
      }

      if (!foundUser) {
        res.status(401);
        throw new Error('User/Admin not found');
      }

      // 3. Attach whoever was found to req.user
      req.user = foundUser;
      next();
    } catch (error) {
      console.error("Auth Error:", error.message);
      res.status(401);
      throw new Error('Not authorized');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };