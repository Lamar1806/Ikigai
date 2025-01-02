import express from 'express';
import { testing } from './testing';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API 555' + testing });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
