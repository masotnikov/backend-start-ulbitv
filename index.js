import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://motrunich2011:P2PPtAgOTMuRg9vs@cluster0.b0wcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express();
app.use(express.json());
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('server working'));
  } catch (e) {
    console.log(e);
  }
}

startApp()

