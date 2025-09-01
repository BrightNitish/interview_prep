// this is just a routes path when a api is called it just shows in which file your api was there 


//  What happens when a request comes in:
// You hit POST http://localhost:5000/api/auth/register using Postman or frontend.

// It goes to server.js, which sees:
// app.use('/api/auth', authRoutes);
// This sends the request to authRoutes.js, which maps /register to registerUser in authControllers.js.

// Your logic runs, and sends back a response to the client.


import express from 'express';
import { signup, login, logout } from '../controllers/authcontrollers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
