const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL (contenedor 2)
const pool = new Pool({
  host: 'db',  // Nombre del contenedor de PostgreSQL
  port: 5432,
  user: 'admin',
  password: 'admin123',
  database: 'dashboard_db'
});

// Rutas API
app.get('/api/gastos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gastos ORDER BY fecha DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/gastos', async (req, res) => {
  const { concepto, monto, categoria, fecha } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO gastos (concepto, monto, categoria, fecha) VALUES ($1, $2, $3, $4) RETURNING *',
      [concepto, monto, categoria, fecha]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => {
  console.log('API corriendo en puerto 4000');
});
