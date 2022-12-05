const products = require('../data/products');

const getProducts = async (request, response, next) => {
  try {
    response.status(200).send({ data: products });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const getProduct = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const product = products.find(item => id === item.id);
    if (id && product) {
      response.status(200).send({ data: product });
    } else {
      throw new Error("Cann't found product by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
};
