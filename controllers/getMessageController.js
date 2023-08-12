import Message from '../models/message.js';
import { connectDB } from '../config/database.js';
import { format } from 'date-fns';

const getMessageGet = async (req, res) => {
  try {
    await connectDB();
    const messages = await Message.find();
    const plainMessages = messages.map(message => message.toObject());

    plainMessages.forEach(message => {
      const date = new Date(message.createdAt);
      message.createdAt = format(date, 'dd/MM/yyyy');
    });
    res.render('index', {
      messages: plainMessages,
    });
  } catch (error) {
    console.error(error);
    res.render('index', {
      connectionMessage: 'Error getting messages from database',
    });
  }
};

export default getMessageGet;
