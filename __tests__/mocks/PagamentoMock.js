const mongoose = require('mongoose');

const pagamentoArray = [];

exports.pagamentoMock = {
  create: obj => {
    return { ...obj, _id: mongoose.Types.ObjectId(), createdAt: new Date(), updatedAt: new Date() };
  },
  find: (param = {}) => {
    return [];
  },
};
