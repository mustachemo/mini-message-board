import express from 'express';
import {
  newMessageGet,
  newMessagePost,
} from '../controllers/newMessageController.js';

const newMessageRouter = express.Router();

newMessageRouter.route('/').get(newMessageGet).post(newMessagePost);

export default newMessageRouter;
