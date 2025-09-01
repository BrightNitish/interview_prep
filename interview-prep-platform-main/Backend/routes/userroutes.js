import express from 'express';
import protect from '../middlewares/authmiddlewares.js';

const router = express.Router();

router.get('/me', protect, (req, res) => {
    res.json(req.user); 
});

export default router;
