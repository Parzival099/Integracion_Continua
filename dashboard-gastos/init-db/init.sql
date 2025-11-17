CREATE TABLE IF NOT EXISTS gastos (
    id SERIAL PRIMARY KEY,
    concepto VARCHAR(255) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO gastos (concepto, monto, categoria, fecha) VALUES
('Supermercado Éxito', 125.50, 'Alimentación', '2024-11-01'),
('Gasolina Terpel', 80.00, 'Transporte', '2024-11-02'),
('Netflix', 15.99, 'Servicios', '2024-11-01'),
('Almuerzo', 25.00, 'Alimentación', '2024-11-03');
