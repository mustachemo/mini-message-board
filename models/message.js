import mongoose from 'mongoose';

const message = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: 'message', versionKey: false }
);

const Message = mongoose.model('message', message);

export default Message;
