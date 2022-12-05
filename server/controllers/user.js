const users = require('../data/users');

const getUsers = (request, response, next) => {
  //SELECT * FROM users
  try {
    response.status(200).send({ data: users });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const getUser = (request, response, next) => {
  // SELECT * FROM users WHERE id = "id"
  try {
    const id = Number(request.params.id);
    const user = users.find(item => id === item.id);
    if (id && user) {
      response.status(200).send({ data: user });
    } else {
      throw new Error("Cann't found user by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const addUser = (request, response, next) => {
  //INSERTS user TO users
  try {
    console.log(request.body);
    const { login, rules } = request.body;
    if (login && rules) {
      const user = { id: Math.floor(Math.random() * 1000000), login, rules };
      users.push(user);
      response.status(201).send({ status: 'created', data: user });
    } else {
      throw new Error("Cann't find login or rules keys");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const addOrUpdateUser = (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const { login, rules } = request.body;
    if (login && rules) {
      if (id) {
        const user = users.find(item => id === item.id);
        user.login = login;
        user.rules = rules;
        response.status(200).send({ status: 'updated', data: user });
      } else {
        const user = { id: Math.floor(Math.random() * 1000000), login, rules };
        users.push(user);
        response.status(201).send({ status: 'created', data: user });
      }
    } else {
      throw new Error("Cann't find login or rules keys");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const updateUser = (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const { login, rules } = request.body;
    const user = users.find(item => id === item.id);
    if (id && user) {
      user.login = login;
      user.rules = rules;
      response.status(200).send({ status: 'updated', data: user });
    } else {
      throw new Error("Cann't found user by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const deleteUser = (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const userIndex = users.findIndex(item => id === item.id);
    if (id && userIndex > -1) {
      const removed = users.splice(userIndex, 1);
      response.status(200).send({ status: 'deleted', data: removed });
    } else {
      throw new Error("Cann't found user by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  addOrUpdateUser,
  updateUser,
  deleteUser,
};
