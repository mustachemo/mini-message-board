import Message from '../models/message.js';
import { connectDB } from '../config/database.js';

const getMessageGet = async (req, res) => {
  try {
    await connectDB();
    const messages = await Message.find();
    res.render('index', {
      title: 'Mini Messageboard',
      messages: messages,
    });
  } catch (error) {
    console.error(error);
    res.render('index', {
      title: 'Mini Messageboard',
      error: 'Error getting messages from database',
    });
  }
};

export default getMessageGet;
