import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Task = mongoose.model('Task', taskSchema);
