import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  picture: {type: String}
})

// {
//   "author": 'Decimus',
//   "title": "maks",
//   "content": "wqr234",
// }
export default mongoose.model('Post', Post)