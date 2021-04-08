#Backend Calculadora
Backend simples para funcionamento de uma calculadora em node js utilizando type script.

Rotas
GET /soma: Responsável pela soma
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
GET /sub: Responsável pela subtração
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
GET /div: Responsável pela divisão
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
GET /mult: Responsável pela multiplicação
// Request(Query):
{
  numeroAtual: 0,
  numeroDigitado: 0
}
// Response: StatusCode: 200 (OK)
{
  resultado: 0
}
Logs
Toda requisição feita gera um log que fica disponível no diretorio: src/utils/logs/info.log

// Estrutura gerada do log
{
  level: 'info',
  rota: '',
  message: '',
  service: 'Calculadora'
}
Execução
Para executar o projeto use:(Projeto rodando na porta http://localhost:3333)

npm install
npm run start
Para executar os testes use:

npm run test
