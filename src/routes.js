const { Router } = require('express');
const Pagamento = require('./models/Pagamento');

const { pagamentoControllerFactory } = require('./controllers/PagamentoController');

const routes = Router();

const { pagar_debito } = pagamentoControllerFactory({ Pagamento });
const { pagar_credito } = pagamentoControllerFactory({ Pagamento });
const { extrato_pagamento } = pagamentoControllerFactory({ Pagamento });

routes.post('/api/debito', pagar_debito);
routes.post('/api/credito', pagar_credito);
routes.get('/api/extrato', extrato_pagamento);

module.exports = routes;
