# CyberGuard Academy - Cybersecurity Education Platform

## Overview

CyberGuard Academy is an interactive cybersecurity education platform that provides safe, simulated learning experiences for students to understand and defend against common cyber threats. The application combines realistic threat simulations with educational content to create an engaging learning environment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom educational color scheme
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with PostgreSQL storage
- **API Design**: RESTful endpoints with structured error handling

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Well-defined tables for users, simulations, progress tracking, and quiz systems
- **Migration Strategy**: Drizzle Kit for database migrations

## Key Components

### Educational Simulations
- **Ransomware Simulation**: Interactive ransomware attack simulation with educational overlays
- **Phishing Recognition**: Email-based threat identification training
- **Social Engineering**: Scenario-based social engineering awareness training
- Each simulation includes real-time educational panels and safety indicators

### User Management
- **Dual Modes**: Student and Teacher mode switching
- **Progress Tracking**: Individual student progress monitoring
- **Session Management**: Active simulation session tracking

### Educational Features
- **Quick Quizzes**: Interactive knowledge checks with immediate feedback
- **Progress Visualization**: Color-coded progress indicators (green for good, orange for needs improvement)
- **Security Tips**: Daily educational content delivery
- **Safety Banners**: Clear indicators that all content is educational and safe

## Data Flow

1. **User Authentication**: Users authenticate and receive role-based access (student/teacher)
2. **Simulation Selection**: Students choose from available cybersecurity simulations
3. **Active Session Tracking**: System monitors and stores simulation progress
4. **Progress Recording**: Completion data, scores, and time spent are recorded
5. **Educational Content**: Contextual learning materials are displayed during simulations
6. **Teacher Dashboard**: Aggregated view of student activities and progress

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@radix-ui/***: Comprehensive UI component primitives
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **express**: Web application framework for API routes

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire application
- **Tailwind CSS**: Utility-first styling framework
- **ESBuild**: Fast JavaScript bundler for production builds

### Educational Integrations
- **Custom Color Scheme**: Educational-focused color palette (edu-blue, safe-green, warning-orange, danger-red)
- **Safety Indicators**: Visual cues that clearly mark educational vs. real content
- **Progress Gamification**: Achievement-style progress tracking to encourage learning

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon Database serverless PostgreSQL instance
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Static assets built with Vite and served by Express
- **Backend**: Node.js application with Express server
- **Database Migrations**: Automated with Drizzle Kit
- **Asset Management**: Static assets served from dist/public directory

### Replit Integration
- **Development Banner**: Automatic Replit development banner integration
- **Error Overlay**: Runtime error modal for development debugging
- **File System Security**: Strict file system access controls

The application emphasizes safety and education, ensuring all simulations are clearly marked as educational content while providing realistic learning experiences for cybersecurity awareness training.