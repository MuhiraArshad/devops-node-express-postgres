DevOps Implementation Report

Course: DevOps for Cloud Computing (CSC418)
Project: Node.js + Express + PostgreSQL CI/CD Pipeline
Date: October 28, 2025
Group Members:

Muhira Arshad (Reg. No: FA22-BCS-132)

[Add second member name & Reg. No]

1. Executive Summary

This report documents the DevOps implementation of a Node.js + Express application connected to a PostgreSQL database.
The project includes full containerization, automated CI/CD pipeline, testing, and deployment to Docker Hub.

Key Achievements:

Automated 5-stage CI/CD pipeline

Multi-version Node.js testing (18, 20, 22)

Dockerized application with persistent database volume

Security and lint checks integrated

Zero hardcoded secrets

Docker Hub deployment verified

2. Technologies Used
Category	Technology	Version	Purpose
Runtime	Node.js	18, 20, 22	Application runtime
Framework	Express.js	Latest	Backend API
Database	PostgreSQL	15-alpine	Data storage
ORM	Sequelize	Latest	DB abstraction
Containerization	Docker	Latest	Package app
Orchestration	Docker Compose	3.8	Multi-container management
CI/CD	GitHub Actions	Latest	Pipeline automation
Registry	Docker Hub	-	Image storage

Supporting Tools: ESLint, npm audit, Docker Buildx, GitHub Secrets

3. Pipeline Design

The CI/CD pipeline consists of five stages:

Build & Install – Installs dependencies across Node versions

Lint & Security Scan – Checks code quality and vulnerabilities

Test with Database – Runs tests against PostgreSQL container

Build Docker Image – Multi-stage Docker build and optimization

Deploy – Push image to Docker Hub (only on main branch)

4. Secret Management

All sensitive information is stored as GitHub Secrets

Database credentials are never hardcoded

.env files are gitignored; .env.example contains dummy values

Docker Hub login uses a token stored in GitHub Secrets

5. Docker Implementation

Services:

db (PostgreSQL)

Persistent volume: postgres_data

Health check configured

app (Node.js)

Depends on db health

Ports: 8080:3000

Log volume: ./logs:/app/logs

Auto-restart unless stopped

Network: app_network for internal communication

6. Testing

Unit tests for individual functions

Integration tests with PostgreSQL container

Matrix testing for Node 18, 20, 22

7. Deployment

Docker Hub used for storing images

Conditional deployment: only if tests pass and branch = main

Verified by pulling image and running locally:

docker pull muhira/node-express-app:latest
docker-compose up -d

8. Lessons Learned

Automation saves time and prevents human errors

Testing with production-like containers ensures reliability

Secrets management is critical for security

Multi-stage builds reduce image size significantly

Team collaboration using Git feature branches and PR reviews

9. Performance Metrics
Metric	Value
Pipeline Duration	8-12 mins
Build Stage	2-3 mins
Test Stage	3-4 mins
Docker Build	2-3 mins
Deployment	1-2 mins
Pipeline Success Rate	95%+
Test Pass Rate	100%