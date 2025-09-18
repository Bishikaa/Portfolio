# Portfolio Website Application

## Overview

This is a modern, responsive portfolio website built as a full-stack application using React for the frontend and Express.js for the backend. The application showcases a developer's personal brand, projects, skills, and contact information through a sleek, professional interface with dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both dark and light modes
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Forms**: React Hook Form with Hookform Resolvers for form validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload during development using Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless driver
- **Schema Management**: Shared schema definitions between frontend and backend
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Validation**: Drizzle-Zod integration for runtime schema validation

### Styling and Theming
- **Design System**: Custom CSS variables for consistent theming across components
- **Theme Management**: Context-based theme provider with localStorage persistence
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Typography**: Custom font stack with Google Fonts integration (Inter, custom font families)
- **Component Variants**: Class Variance Authority (CVA) for component variant management

### Development and Build
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Code Quality**: ESLint and TypeScript for code quality and type safety
- **Development Server**: Integrated Vite development server with Express backend
- **Asset Management**: Vite handles static assets and code splitting

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Lucide React**: Modern icon library for consistent iconography
- **React Icons**: Additional icon sets including Simple Icons for technology logos
- **Embla Carousel**: Lightweight carousel component for image galleries

### Development Tools
- **Drizzle Kit**: Database schema management and migration tool
- **TanStack Query**: Powerful data synchronization for React applications
- **Wouter**: Minimalist router for React applications
- **Date-fns**: Modern JavaScript date utility library

### Database and Backend
- **Neon Database**: Serverless PostgreSQL platform for scalable database hosting
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Drizzle ORM**: TypeScript ORM with excellent PostgreSQL support

### Replit-Specific Integrations
- **Replit Vite Plugins**: Runtime error overlay, cartographer, and development banner for enhanced Replit development experience
- **Development Environment**: Optimized for Replit's cloud development platform

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Class Variance Authority**: Utility for creating component variants
- **CLSX**: Utility for constructing className strings conditionally