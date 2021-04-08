const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema(
  {
    dia: String,
    mes: String,
    ano: String,
    valor: Number,
    tipo_pagamento: String,
  },
  { timestamps: true, collection: 'pagamento' },
);

module.exports = mongoose.model('Pagamento', PagamentoSchema);
