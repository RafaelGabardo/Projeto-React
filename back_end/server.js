// Constantes e configurações iniciais do servidor
const express = require('express');
const app = express();
const PORT = 3001;

// Rota de teste para verificar se o servidor está respondendo
app.get('/', (req, res) => {
  res.send('Servidor rodando na porta ' + PORT);
});

// Iniciando o servidor na porta especificada
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});