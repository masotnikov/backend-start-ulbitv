import express from 'express'
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://motrunich2011:P2PPtAgOTMuRg9vs@cluster0.b0wcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express();
app.use(express.json());
app.post('/', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body;
    const post = await Post.create({author, title, content, picture})
    res.json(post);
  } catch (e) {
    res.status(500).json(e)
  }
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('server working'));
  } catch (e) {
    console.log(e);
  }
}

startApp()

