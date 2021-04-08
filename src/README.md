# #Api de Pagamentos
Backend simples para funcionamento de uma apí de pagamentos em node js.

## Rotas

- `POST /api/debito`: Responsável pela criação de salvar um método de pagamento em débito
```js
// Request(Body):
{
  dia: "01"
  mes: "01"
  ano: "2021"
  valor: "22.50"
  tipo_pagamento: "Débito"
}
// Response: StatusCode: 200 (OK)
{
  "valor": 22.5,
  "tipo_pagamento": "Crédito",
  "dia": "05",
  "mes": "04",
  "ano": "2021"
 }
```

- `POST /api/credito`: Responsável pela criação de salvar um método de pagamento em crédito
```js
// Request(Body):
{
  dia: "01"
  mes: "01"
  ano: "2021"
  valor: "22.50"
  tipo_pagamento: "Crédito"
}
// Response: StatusCode: 200 (OK)
{
  "valor": 22.5,
  "tipo_pagamento": "Crédito",
  "dia": "05",
  "mes": "04",
  "ano": "2021"
 }
```

- `GET /mult`: Responsável pela multiplicação
```js
// Request(Query):
{
  ano: "2021,
  mes: "04"
}
// Response: StatusCode: 200 (OK)
{
{
  "saldo_credito": 0,
  "saldo_debito": 0
}
```

## Execução
Para executar o projeto use:(Projeto rodando na porta http://localhost:3333)
```js
npm install
npm run dev
```
Para executar os testes use:
```js
npm run test
```
