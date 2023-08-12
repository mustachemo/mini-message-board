import Message from '../models/message.js';

export const newMessageGet = (req, res) => {
  res.render('form');
};

export const newMessagePost = async (req, res) => {
  const { author, message } = req.body;
  const newMessage = new Message({ author, message });
  try {
    await newMessage.save();
    res.render('form', {
      resolutionMessage: 'collection item successfully added!',
    });
  } catch (error) {
    console.error(error);
    res.render('form', {
      resolutionMessage: 'Error creating message',
    });
  }
};
