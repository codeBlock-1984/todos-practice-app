import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import todoRoute from './routes/todos.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/todos/', todoRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
