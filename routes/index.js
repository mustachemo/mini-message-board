import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('base');
});

export default indexRouter;
