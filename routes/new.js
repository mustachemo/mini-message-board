import express from 'express';

const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
  res.render('form', { title: 'New Message' });
});

export default newMessageRouter;
