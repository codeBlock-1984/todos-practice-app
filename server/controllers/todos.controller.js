import db from '../database/models/index';

const { Todo } = db;

class TodoController {
  static create(req, res) {
    const { title, description } = req.body;
    console.log(req.body);

    return Todo
      .create({
        title,
        description,
      })
      .then((todo) => {
        return res.status(201).send(todo);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  }
}

export default TodoController;
