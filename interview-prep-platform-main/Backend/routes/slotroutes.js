// routes/slotRoutes.js
import express from 'express';
import {
  createSlot,
  bookSlot,
  getMyBookedSlots,
  cancelSlot,
  getAvailableSlots,
  getCreatedAndBookedSlots
} from '../controllers/slotcontroller.js';
import protect from '../middlewares/authmiddlewares.js';

const router = express.Router();

router.post('/create', protect, createSlot);
router.post('/book/:slotId', protect, bookSlot);
router.get('/booked', protect, getMyBookedSlots);
router.delete('/cancel/:slotId', protect, cancelSlot);
router.get('/available', protect, getAvailableSlots);
router.get('/slots/created-and-booked', protect, getCreatedAndBookedSlots);

export default router;

