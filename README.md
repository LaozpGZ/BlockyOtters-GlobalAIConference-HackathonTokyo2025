# BlockyOtters API Server MCP

> 🏆 **WaytoAGI Global AI Conference & Hackathon 2025 Submission**

## Project Overview

Blocky Otters API Server MCP is a cryptocurrency data API server based on Node.js and Express, implementing the MCP (Marketplace Component Program) protocol, allowing AI systems (such as Claude) to access Blocky Otters' cryptocurrency market data through standardized interfaces.

This project is a submission for **WaytoAGI Global AI Conference & Hackathon Tokyo 2025**, aiming to build a complete cryptocurrency data service ecosystem, including frontend display, backend API services, and comprehensive technical documentation.

## 🏗️ Project Architecture

This project adopts a modern full-stack architecture, containing the following three core modules:

```
BlockyOtters-GlobalAIConference-HackathonTokyo2025/
├── backend/          # Backend API Service (NestJS)
├── frontend/         # Frontend Display Application (Next.js)
└── docs-site/        # Technical Documentation Site (Fumadocs)
```

### 🔧 Tech Stack

#### Backend Service
- **Framework**: NestJS 11.x
- **Runtime**: Node.js
- **Language**: TypeScript
- **Testing**: Jest
- **Code Standards**: ESLint + Prettier
- **Protocol**: MCP (Marketplace Component Program)

#### Frontend Application
- **Framework**: Next.js 15.x (App Router)
- **UI Library**: React 19.x
- **Styling**: Tailwind CSS 4.x
- **Components**: Lucide React Icons
- **Language**: TypeScript
- **Build**: Turbopack

#### Documentation Site
- **Framework**: Next.js 15.x + Fumadocs
- **Content**: MDX
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript

## 🚀 Quick Start

### Requirements

- Node.js 18.x or higher
- pnpm 8.x or higher

### Install Dependencies

```bash
# Install dependencies for all modules
pnpm install --recursive
```

### Start Development Environment

#### 1. Start Backend Service

```bash
cd backend
pnpm run start:dev
```

Backend service will start at `http://localhost:3000`

#### 2. Start Frontend Application

```bash
cd frontend
pnpm run dev
```

Frontend application will start at `http://localhost:3001`

#### 3. Start Documentation Site

```bash
cd docs-site
pnpm run dev
```

Documentation site will start at `http://localhost:3002`

## 📁 Module Details

### Backend - API Server

High-performance API server built with NestJS, implementing MCP protocol standards:

- **MCP Protocol Support**: Standardized AI system interfaces
- **Cryptocurrency Data**: Real-time market data acquisition and processing
- **RESTful API**: Complete REST API interfaces
- **Type Safety**: Complete TypeScript type definitions
- **Test Coverage**: Unit tests and E2E tests

### Frontend - User Interface

Modern React application providing intuitive user interaction interface:

- **Responsive Design**: Multi-device access support
- **Real-time Data**: Real-time synchronization with backend API
- **Modern UI**: Beautiful interface based on Tailwind CSS
- **Performance Optimization**: Next.js App Router + Turbopack

### Docs Site - Technical Documentation

Professional technical documentation site based on Fumadocs:

- **MDX Support**: Rich documentation writing experience
- **Search Functionality**: Built-in document search
- **Responsive Layout**: Adapts to various devices
- **API Documentation**: Complete API interface documentation

## 🔗 MCP Protocol Integration

Blocky Otters API Server is fully compatible with MCP (Marketplace Component Program) protocol, supporting:

- **Standardized Interfaces**: Follows MCP protocol specifications
- **AI System Integration**: Supports direct calls from AI systems like Claude
- **Data Standardization**: Unified data formats and response structures
- **Error Handling**: Comprehensive error handling and status codes

## 🏆 WaytoAGI Global AI Conference & Hackathon

This project is a submission developed for **WaytoAGI Global AI Conference & Hackathon Tokyo 2025**, showcasing:

- **AI Integration Capabilities**: Seamless AI system integration through MCP protocol
- **Full-Stack Development**: Complete frontend-backend separation architecture
- **Modern Tech Stack**: Adopting the latest web development technologies
- **Comprehensive Documentation**: Professional technical documentation and API specifications
- **Scalability**: Modular design, easy to extend and maintain

## 📝 Development Guide

### Code Standards

All modules are configured with unified code standards:

- **ESLint**: Code quality checking
- **Prettier**: Code formatting
- **TypeScript**: Type safety

### Testing

```bash
# Backend testing
cd backend
pnpm run test          # Unit tests
pnpm run test:e2e      # E2E tests
pnpm run test:cov      # Test coverage

# Frontend testing
cd frontend
pnpm run lint          # Code checking

# Documentation site testing
cd docs-site
pnpm run build         # Build testing
```

### Build & Deployment

```bash
# Build all modules
cd backend && pnpm run build
cd frontend && pnpm run build
cd docs-site && pnpm run build

# Production startup
cd backend && pnpm run start:prod
cd frontend && pnpm run start
cd docs-site && pnpm run start
```

## 🤝 Contributing

Welcome to contribute code to this project! Please follow these steps:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Us

- **Project**: BlockyOtters API Server MCP
- **Conference**: WaytoAGI Global AI Conference & Hackathon Tokyo 2025
- **Team**: BlockyOtters Team
  - GZsam

---

*Built with ❤️ for WaytoAGI Global AI Conference & Hackathon Tokyo 2025*