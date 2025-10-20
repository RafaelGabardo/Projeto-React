// Importando módulos necessários
import { Pool } from 'pg';
require('dotenv').config();

// Configurando a conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  //database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});
