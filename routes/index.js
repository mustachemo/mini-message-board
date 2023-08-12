import express from 'express';
import getMessageGet from '../controllers/getMessageController.js';

const indexRouter = express.Router();

indexRouter.route('/').get(getMessageGet);

export default indexRouter;
