import express from  'express'
//import  db from ".env";
//import from  routes "../models/user/index"
const app = express()
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
