const Oreder = require('../models/order');

module.exports.getOrders = (req, res) => {
  Oreder.find()
    .then( order => res.send({ order }))
    .catch((e) => res.status(500).send({ message: e }));
};

module.exports.createOrder = (req, res) => {
  const { orderItems,
  totalOrder,
  email,
  name,
  city,
  address,
  phone } = req.body;
  Oreder.create({ orderItems,
    totalOrder,
    email,
    name,
    city,
    address,
    phone })
    .then( order => res.send({ order }) )
    .catch((e) => res.status(500).send({ message: e }))
};