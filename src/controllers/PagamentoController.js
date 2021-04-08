const validation = require('../validation/pagamento');
const Validator = require('validatorjs');

exports.pagamentoControllerFactory = ({ Pagamento } = {}) => {
  return {
    async pagar_debito(request, response) {
      try {
        const rules = validation.rules;
        const validationFields = new Validator(request.body, rules);
        if (validationFields.fails()) {
          return response.status(400).json({ erros: validationFields.errors.all() });
        }

        const { valor, tipo_pagamento, dia, mes, ano } = request.body;

        pagamento = await Pagamento.create({
          valor,
          tipo_pagamento,
          dia,
          mes,
          ano,
        });

        return response.status(200).json(pagamento);
      } catch (erro) {
        return response.status(500).json({ Erro: `Erro ao gravar o pagamento!: ${erro}.` });
      }
    },

    async pagar_credito(request, response) {
      try {
        const rules = validation.rules;
        const validationFields = new Validator(request.body, rules);
        if (validationFields.fails()) {
          return response.status(400).json({ erros: validationFields.errors.all() });
        }

        const { valor, tipo_pagamento, dia, mes, ano } = request.body;

        pagamento = await Pagamento.create({
          valor,
          tipo_pagamento,
          dia,
          mes,
          ano,
        });

        return response.status(200).json(pagamento);
      } catch (erro) {
        console.log(erro);
        return response.status(500).json({ Erro: `Erro ao gravar o pagamento!: ${erro}.` });
      }
    },

    async extrato_pagamento(request, response) {
      try {
        if (!request.query.ano || !request.query.mes) {
          throw new Error('Os dados estão incorretos!');
        }

        const pagamento = await Pagamento.find({ ano: request.query.ano, mes: request.query.mes });

        let valor = 0;
        let saldo_credito = 0;
        let saldo_debito = 0;
        for (const pag of pagamento) {
          if (pag.tipo_pagamento == 'Débito') {
            valor += +pag.valor;
            saldo_debito = +valor.toFixed(2);
          } else if (pag.tipo_pagamento == 'Crédito') {
            valor += +pag.valor;
            saldo_credito = +valor.toFixed(2);
          }
        }
        return response.status(200).json({ saldo_credito, saldo_debito });
      } catch (erro) {
        return response.status(500).json({ Erro: `Erro ao buscar saldo!: ${erro}.` });
      }
    },
  };
};
