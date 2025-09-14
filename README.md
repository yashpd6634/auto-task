# AutoTask - Webhook-Driven Automation Platform

[![TypeScript](https://img.shields.io/badge/typescript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.11.1-green.svg)](https://www.prisma.io/)
[![Kafka](https://img.shields.io/badge/Apache%20Kafka-2.2.4-orange.svg)](https://kafka.apache.org/)

AutoTask is a powerful microservice-based automation platform that enables users to create and manage automated workflows triggered by webhooks. Built with a modern tech stack, it provides seamless integration capabilities for automating repetitive tasks like sending emails and messages.

## 🏗️ Architecture Overview

AutoTask follows a **microservice architecture** with the following key components:

```
                            AutoTask Architecture

    ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
    │   Frontend      │────►│ Primary Backend │     │  Hooks Server   │
    │   (Next.js)     │     │   (Express)     │     │   (Express)     │
    │   Port: 3001    │     │   Port: 3000    │     │   Port: 3002    │
    └─────────────────┘     └─────────────────┘     └─────────────────┘
            │                        │                        │
            │                        ▼                        ▼
            │               ┌─────────────────────────────────────────┐
            │               │           PostgreSQL Database           │
            │               │            (Docker Container)          │
            │               └─────────────────────────────────────────┘
            │                        │                        │
            │                        ▼                        ▼
            │               ┌─────────────────┐     ┌─────────────────┐
            │               │ Trigger Migrator│────►│ Apache Kafka    │
            │               │   (Outbox)      │     │ (Docker:9092)   │
            │               └─────────────────┘     └─────────────────┘
            │                                                │
            │                                                ▼
            │                                       ┌─────────────────┐
            └──────────────────────────────────────►│     Worker      │
                                                    │   (Processor)   │
                                                    └─────────────────┘
                                                             │
                                                             ▼
                                                    ┌─────────────────┐
                                                    │  External APIs  │
                                                    │ (Resend, etc.)  │
                                                    └─────────────────┘
```

**Data Flow:**

1. Users create automation workflows via the Frontend
2. Primary Backend stores workflow configurations in PostgreSQL
3. External services trigger webhooks to the Hooks Server
4. Hooks Server creates AutoRun records with Outbox pattern
5. Trigger Migrator polls outbox and publishes to Kafka
6. Worker consumes Kafka messages and executes actions
7. Worker integrates with external services (Email, WhatsApp, etc.)

### Service Breakdown

| Service              | Technology                          | Port | Purpose                                                       |
| -------------------- | ----------------------------------- | ---- | ------------------------------------------------------------- |
| **Frontend**         | Next.js 15, TypeScript, TailwindCSS | 3001 | User interface for creating and managing automation workflows |
| **Primary Backend**  | Express.js, Prisma ORM              | 3000 | Authentication, user management, and autoTask CRUD operations |
| **Hooks Server**     | Express.js, Prisma ORM              | 3002 | Webhook endpoint receiver that triggers automation workflows  |
| **Trigger Migrator** | Node.js, KafkaJS                    | -    | Implements outbox pattern for reliable message publishing     |
| **Worker**           | Node.js, KafkaJS, Resend            | -    | Processes automation actions (email, WhatsApp, etc.)          |

## 🚀 Key Features

- **🎯 Webhook-Driven Triggers**: Create automations triggered by external webhook calls
- **📧 Multi-Channel Actions**: Support for email (via Resend) and WhatsApp notifications
- **🔄 Reliable Processing**: Implements outbox pattern with Kafka for guaranteed message delivery
- **👥 User Management**: Complete authentication system with JWT tokens
- **📊 Workflow Management**: Create, read, and manage complex automation workflows
- **⚡ Real-time Processing**: Event-driven architecture for immediate action execution
- **🎨 Modern UI**: Responsive Next.js frontend with TailwindCSS

## Screenshots

### Home Page

<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/1ed68475-984e-42e0-a222-7fa9bfbc8b63" />

### Signup

<img width="1543" height="1007" alt="image" src="https://github.com/user-attachments/assets/ab493bd0-8b88-4e8c-93d9-2a81d75ae234" />

### Auto-Task Creatation

<img width="1530" height="721" alt="image" src="https://github.com/user-attachments/assets/f6d1d7ba-a22e-4847-86e2-3f892eea38ee" />
<img width="787" height="409" alt="image" src="https://github.com/user-attachments/assets/c65aed6a-d4d3-4aa4-845a-293f1194a40d" />
<img width="783" height="576" alt="image" src="https://github.com/user-attachments/assets/bbe02ab3-74a9-413c-a9d9-c9125e971b4a" />

### Auto-Task List

<img width="1543" height="543" alt="image" src="https://github.com/user-attachments/assets/d8ac1b22-166a-4433-a1ec-728a574e8d64" />

### Web-Hook call

<img width="1373" height="941" alt="image" src="https://github.com/user-attachments/assets/8d20b2ed-c035-4190-aa69-f48d0ad93f47" />

### Email

<img width="1511" height="407" alt="image" src="https://github.com/user-attachments/assets/ff2a41cb-41e4-4261-af22-c76ac499bad7" />

## 🛠️ Technology Stack

### Backend

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Message Queue**: Apache Kafka
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Resend API

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **HTTP Client**: Axios
- **State Management**: React Hooks

### DevOps & Tools

- **Database Migrations**: Prisma Migrate
- **API Validation**: Zod schemas
- **Code Quality**: ESLint, TypeScript strict mode

## 📁 Project Structure

```
auto-task/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── dashboard/       # User dashboard
│   │   ├── login/          # Authentication pages
│   │   └── autoTask/       # Automation workflow creation
│   ├── components/         # Reusable React components
│   └── public/            # Static assets
├── primary-backend/        # Main API server
│   ├── src/
│   │   ├── router/        # API route handlers
│   │   ├── db/           # Database configuration
│   │   └── middleware.ts  # Authentication middleware
│   └── prisma/           # Database schema and migrations
├── hooks/                 # Webhook receiver service
│   ├── src/index.ts      # Webhook endpoint handler
│   └── prisma/          # Database schema
├── worker/               # Action processor service
│   ├── src/
│   │   ├── parser.ts    # Metadata parsing utility
│   │   └── sendEmail.ts # Email sending logic
│   └── prisma/         # Database schema
└── trigger-migrator/    # Outbox pattern implementation
    ├── src/index.ts    # Kafka message publisher
    └── prisma/        # Database schema
```

## 🗄️ Database Schema

The application uses a well-structured PostgreSQL database with the following key entities:

- **User**: User authentication and profile information
- **Auto**: Automation workflows created by users
- **Trigger**: Webhook triggers that start automations
- **Action**: Actions to be performed (email, WhatsApp, etc.)
- **AutoRun**: Execution instances of automations
- **AutoRunOutbox**: Outbox pattern for reliable message processing

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker (for PostgreSQL and Kafka)
- npm or yarn package manager

### Quick Start with Docker

1. **Start PostgreSQL with Docker**

   ```bash
   docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
   ```

2. **Start Kafka with Docker**
   ```bash
   docker run -p 9092:9092 -d apache/kafka:latest
   ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashpd6634/auto-task.git
   cd auto-task
   ```

2. **Install dependencies for all services**

   ```bash
   # Frontend
   cd frontend && npm install

   # Primary Backend
   cd ../primary-backend && npm install

   # Hooks Server
   cd ../hooks && npm install

   # Worker
   cd ../worker && npm install

   # Trigger Migrator
   cd ../trigger-migrator && npm install
   ```

3. **Set up environment variables**
   Create `.env` files in each service directory:

   **primary-backend/.env**

   ```env
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/autotask_primary"
   JWT_SECRET="your-jwt-secret-key"
   ```

   **hooks/.env**

   ```env
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/autotask_hooks"
   ```

   **worker/.env**

   ```env
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/autotask_worker"
   RESEND_API_KEY="your-resend-api-key"
   ```

   **trigger-migrator/.env**

   ```env
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/autotask_migrator"
   ```

4. **Set up databases**

   ```bash
   # Run migrations for each service
   cd primary-backend && npx prisma migrate dev
   cd ../hooks && npx prisma migrate dev
   cd ../worker && npx prisma migrate dev
   cd ../trigger-migrator && npx prisma migrate dev
   ```

5. **Seed the database**

   ```bash
   # Seed the primary backend database with initial data
   cd primary-backend && npx prisma db seed
   ```

6. **Create Kafka topic**

   ```bash
   # Get Kafka container ID
   docker ps

   # Access Kafka container
   docker exec -it {kafka-container-id} /bin/bash

   # Navigate to Kafka bin directory
   cd /opt/kafka/bin

   # Create the required topic
   ./kafka-topics.sh --create --topic autoTask-events --bootstrap-server localhost:9092

   # Verify topic creation
   ./kafka-topics.sh --list --bootstrap-server localhost:9092

   # Exit container
   exit
   ```

   **Quick one-liner:**

   ```bash
   docker exec -it $(docker ps -q --filter ancestor=apache/kafka) /opt/kafka/bin/kafka-topics.sh --create --topic autoTask-events --bootstrap-server localhost:9092
   ```

### Running the Application

Start each service in separate terminals:

```bash
# Frontend (Terminal 1)
cd frontend && npm run dev

# Primary Backend (Terminal 2)
cd primary-backend && npm run dev

# Hooks Server (Terminal 3)
cd hooks && npm start

# Worker (Terminal 4)
cd worker && npm start

# Trigger Migrator (Terminal 5)
cd trigger-migrator && npm start
```

The application will be available at:

- Frontend: http://localhost:3001
- Primary Backend API: http://localhost:3000
- Hooks Server: http://localhost:3002

## 📖 API Documentation

### Authentication Endpoints

- `POST /api/user/signup` - User registration
- `POST /api/user/signin` - User login
- `GET /api/user/` - Get user profile (authenticated)

### AutoTask Management

- `POST /api/autoTask` - Create new automation workflow
- `GET /api/autoTask` - List user's automation workflows
- `GET /api/autoTask/:id` - Get specific automation workflow

### Webhook Endpoints

- `POST /hooks/catch/:userId/:autoId` - Trigger automation via webhook

## 🎯 Usage Example

1. **Create an Account**: Sign up through the frontend interface
2. **Create an AutoTask**: Define triggers and actions for your automation
3. **Get Webhook URL**: Use the generated webhook URL in external services
4. **Trigger Automation**: Send a POST request to your webhook URL
5. **Monitor Execution**: View automation runs and their status

### Example Webhook Trigger:

```bash
curl -X POST \
  http://localhost:3002/hooks/catch/user123/auto456 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Welcome to our service!"
  }'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Built with modern microservice architecture principles
- Implements reliable messaging patterns for distributed systems
- Inspired by automation platforms like Zapier and IFTTT

---

**Developed by [Yash P Dewangan](https://github.com/yashpd6634)**
