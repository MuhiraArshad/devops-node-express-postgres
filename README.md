Node.js + Express + PostgreSQL DevOps Pipeline

Course: DevOps for Cloud Computing (CSC418)
Project Date: October 28, 2025
Group Members:

Muhira Arshad (Reg. No: FA22-BCS-132)

[Add second member name & Reg. No]

Project Structure
node-express-postgresql-sequelize/
│
├── app/
│   ├── models/                  # Sequelize models for DB tables
│   ├── routes/                  # Express routes for APIs
│   ├── controllers/             # Route logic and controllers
│   └── app.js                   # Main entry point for Express app
│
├── config/
│   ├── config.js                # App configuration (DB, ports)
│             
│
│
│── Dockerfile               # Multi-stage Dockerfile
│── docker-compose.yml       # Compose file for app + PostgreSQL
│                     
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml  # GitHub Actions pipeline
├── .env.example                 # Environment variables template
├── package.json                 # Node dependencies
├── package-lock.json
└── README.md

Features

Containerized Application: Runs Node.js app with PostgreSQL using Docker Compose.

Automated CI/CD: GitHub Actions pipeline with build, test, security scan, Docker build, and deployment stages.

Multi-Version Node Testing: Ensures compatibility across Node.js 18, 20, and 22.

Persistent Database: PostgreSQL data stored in Docker volumes.

Security & Linting: ESLint and npm audit integrated in the pipeline.

Docker Hub Deployment: CI/CD pipeline automatically pushes Docker images.

Installation
Prerequisites

Node.js & npm

PostgreSQL

Docker & Docker Compose

Git

Setup

Clone the repository:

git clone https://github.com/YourUsername/node-express-postgresql-sequelize.git
cd node-express-postgresql-sequelize


Install dependencies:

npm install


Set up environment variables:

cp .env.example .env
# Update .env with DB credentials and ports


Start Docker containers:

docker-compose up -d --build


Verify services are running:

docker-compose ps