# 💰 Expense Tracker App - Integración Continua

Dashboard de Gastos con arquitectura de contenedores Docker y pipeline CI/CD.

## 👥 Equipo

- Brayan Javier Alvarez Mahecha
- Roman Gomez Diaz
- Alfonso Leonel Palacio Perez
- Juan David Pineda Ovalle
- David Quevedo Beltran

**Tutor:** Juan Carlos Ceballos Mendoza

## 🏗️ Arquitectura

Sistema con arquitectura de microservicios usando Docker Compose:

### Contenedores:
1. **PostgreSQL (db)** - Base de datos
2. **Aplicación Web (app)** - Frontend (Nginx) + Backend (Node.js/Express)

## 🚀 Instalación y Ejecución
```bash
# Clonar repositorio
git clone https://github.com/Parzival099/Integracion_Continua.git
cd Integracion_Continua

# Levantar contenedores
docker-compose up --build

# Acceder a:
# Frontend: http://localhost
# API Backend: http://localhost:4000
```

## 📁 Estructura
```
dashboard-gastos/
├── docker-compose.yml
├── app/
│   ├── Dockerfile
│   ├── index.html
│   ├── server.js
│   ├── package.json
│   └── start.sh
└── init-db/
    └── init.sql
```

## 🔧 Tecnologías

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Base de Datos: PostgreSQL 15
- Servidor Web: Nginx
- Contenedores: Docker, Docker Compose

## 📝 Entregas

- ✅ **Entrega 1** - Docker y comunicación entre contenedores
- 🚧 **Entrega 2** - Jenkins CI/CD
- ⏳ **Entrega 3** - Travis CI y Codeship

## 📄 Licencia

Proyecto académico - Politécnico Grancolombiano 2025
