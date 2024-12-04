import {mongoose} from 'mongoose';

const userSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now 
  },
  article: {
    type: String,
  },
  imageurl: {
    type: String,
  },
});
const User = mongoose.model('User', userSchema);
export default User;