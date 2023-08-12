import Message from '../models/message.js';
import { connectDB } from '../config/database.js';

export const newMessageGet = async (req, res) => {
  try {
    await connectDB();
    res.render('form', {
      resolutionMessage: 'Connected to database!',
    });
  } catch (error) {
    console.error(error);
    res.render('form', {
      resolutionMessage: 'Could not connect to database...',
    });
  }
};

export const newMessagePost = async (req, res) => {
  const { author, message } = req.body;
  const newMessage = new Message({ name: author, message: message });
  try {
    await newMessage.save();
    res.render('form', {
      resolutionMessage: 'collection item successfully added!',
    });
  } catch (error) {
    console.error(error);
    res.render('form', {
      resolutionMessage: 'Error inputting data into database',
    });
  }
};
