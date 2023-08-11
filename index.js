import express from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');
app.set('env', process.env.NODE_ENV);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(cors());

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
