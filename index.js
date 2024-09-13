import express from 'express'

const PORT = 5000;

const app = express();
app.get('/', (req, res) => {
  console.log(req.query)
  res.status(200).json('Сервер работает')
})
app.listen(PORT, () => console.log('server working'));
