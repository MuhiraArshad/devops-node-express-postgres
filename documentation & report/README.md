

Project: Node.js + Express + PostgreSQL CI/CD Pipeline
Developed by:

Muhira Arshad (Reg. No: FA22-BCS-132)

Maryam Asim (Reg. No: FA22-BCS-141)

Project Overview

This project is a backend application built using Node.js and Express, connected to a PostgreSQL database. It demonstrates containerization with Docker, multi-service orchestration with Docker Compose, and automated CI/CD pipeline using GitHub Actions.

Key functionalities implemented so far:

Application connects to a PostgreSQL database

Supports CRUD operations for your data

Dockerized setup for both Node.js app and PostgreSQL

CI/CD pipeline to automate build, test, and Docker image deployment

DevOps best practices applied: secrets management, testing, and pipeline automation

Project Structure
node-express-postgresql/
│
├── app/                        # Application source code
│   ├── controllers/            # Controller logic
│   ├── models/                 # Sequelize models
│   ├── routes/                 # API routes
│   ├── config/                 # Database and app configuration
│   └── server.js               # Entry point of the app
│                # Docker-related files
│   ├── Dockerfile              # Multi-stage Dockerfile
│   └── docker-compose.yml      # Compose file for app + database
│
│
├── devops_report.md            # DevOps documentation & pipeline report
├── package.json
├── package-lock.json
└── README.md

Technologies Used
Category	Technology	Version	Purpose
Runtime	Node.js	18	Backend runtime
Framework	Express.js	Latest	REST API framework
Database	PostgreSQL	15-alpine	Persistent data storage
ORM	Sequelize	Latest	Database abstraction
Containerization	Docker	Latest	Containerizing the application
Orchestration	Docker Compose	3.8	Multi-container management
CI/CD	GitHub Actions	Latest	Automating build, test, and deploy
Registry	Docker Hub	-	Docker image hosting

Supporting tools: ESLint, npm audit, Docker Buildx, GitHub Secrets

Setup Instructions
Prerequisites

Node.js (v18 recommended)

PostgreSQL (local or Docker)

Docker & Docker Compose

Git

Steps to Run Locally

Clone the repository

git clone https://github.com/MuhiraArshad/devops-node-express-postgres.git
cd devops-node-express-postgres


Install dependencies

npm install


Configure environment variables

Create a .env file in the root directory:

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_PORT=5432
PORT=3000


Run the application using Docker Compose

docker-compose up -d


Stop containers

docker-compose down

Docker Implementation
Dockerfile

Multi-stage build to optimize image size

Base image: node:18-alpine

Production stage includes only required dependencies

Docker Compose

Defines two services:

app: Node.js application

db: PostgreSQL database

Bridge network used for internal communication

Persistent volume for database data (postgres_data)

CI/CD Pipeline (GitHub Actions)
Stages Implemented

Build & Install – Install dependencies across Node versions

Lint & Security Scan – ESLint and npm audit

Test with Database – Integration tests using PostgreSQL container

Build Docker Image – Multi-stage Docker build, cache optimization

Deploy – Push Docker image to Docker Hub (only main branch)

Benefits of Pipeline

Detects weak points in code automatically

Runs tests to catch errors before deployment

Builds and deploys Docker images automatically

Ensures code consistency and reproducibility

Usage

After running Docker Compose, the API is accessible at:

http://localhost:3000


CRUD endpoints available as per your routes in app/routes/

Interact using Postman, cURL, or frontend app

Lessons Learned

Automation through pipelines saves time and reduces human errors

Docker Compose simplifies multi-service development

Secrets management prevents sensitive data exposure

Multi-stage Docker builds reduce image size

CI/CD ensures consistent and tested deployments

Future Improvements

Add health check endpoints

Implement logging & monitoring (e.g., ELK, Prometheus)

Increase test coverage and add load testing

Implement advanced CI/CD strategies (canary, blue-green)

Deploy to Kubernetes with Helm

DevOps Documentation

See devops_report.md for full documentation, including:

CI/CD pipeline diagram

Secrets management strategy

Performance metrics

Lessons learned and recommendations

License

This project is licensed under the MIT License.

Contributing

Fork the repo, create a feature branch, commit changes, and submit a pull request

Report issues via GitHub Issues