const card = require('../data/card');
const products = require('../data/products');

const getCard = async (request, response, next) => {
  try {
    response.status(200).send({ data: card });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const addToCard = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const product = products.find(item => id === item.id);
    if (id && product) {
      card.push(product);
      response.status(201).send({ status: 'added', data: card });
    } else {
      throw new Error("Cann't find login or rules keys");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const deleteFromCard = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const inCard = card.findIndex(item => id === item.id);
    if (id && inCard > -1) {
      const removed = card.splice(inCard, 1);
      response.status(200).send({ status: 'deleted', data: removed });
    } else {
      throw new Error("Cann't found user by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

module.exports = {
  getCard,
  addToCard,
  deleteFromCard,
};
