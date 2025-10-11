# William Jordan Website - Replit Project

## Overview
This is a full-stack React + Express.js application that has been successfully imported and configured for the Replit environment. The application includes:

- **Frontend**: React with TypeScript, Tailwind CSS, and modern UI components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build System**: Vite for frontend bundling and development

## Project Architecture
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- Database configured with Drizzle ORM and PostgreSQL

## Current State
The application has been fully configured and is running successfully in the Replit environment:
- ✅ All dependencies installed
- ✅ TypeScript configuration fixed
- ✅ Server configured for port 5000 with proper host settings
- ✅ Database provisioned and schema deployed
- ✅ Development workflow configured
- ✅ Production deployment settings configured
- ✅ Application tested and working

## Development
- Run `npm run dev` to start the development server
- Access the application on port 5000
- Hot reload is configured and working
- Database migrations can be pushed with `npm run db:push`

## Deployment
Configured for VM deployment with:
- Build command: `npm run build`
- Start command: `npm start`
- Deployment target: VM (maintains server state)

## Business Model
**OMLM (Organic Marketing Lead Magnet) Consultation Service** helping businesses attract quality leads:
- **Service**: Teaching businesses how to create custom Organic Marketing Lead Magnets
- **Process**: Create free value propositions that capture prospect information and integrate with client's CRM
- **Pricing Model**: Free consultations with optional pay-what-you-think-it's-worth on the backend
- **Value Delivery**: Help companies market their lead magnets to attract leads and boost reputation
- **Approach**: No upfront cost, clients pay based on the value they believe they've received

## User Preferences
- **Minimalist approach**: Keep the website simple and direct
- **No payment processors**: Use wire transfer only, avoid PayPal/Stripe complexity
- **Cost-conscious**: Minimize dependencies and complexity to reduce operational costs

## Recent Changes
**October 9, 2025** - OMLM Theme Integration:
- Updated business model from web development agency to OMLM consultation service
- Transformed hero section to lead with OMLM lead magnet creation
- Emphasized free consultation with pay-what-you-think-it's-worth backend model
- Aligned all content to focus on teaching businesses to create custom lead magnets

**September 29, 2025** - Major simplification:
- Removed all PayPal integration (client components, server routes, dependencies)
- Removed Stripe tipping components
- Simplified service packages to show contact info and wire transfer instructions
- Updated all copy to remove payment processor references
- Reduced complexity: direct contact → wire transfer → project start

**September 25, 2025** - Initial setup:
- Imported GitHub project and configured for Replit environment
- Fixed server configuration (port 5000, host 0.0.0.0)
- Resolved all TypeScript/LSP errors
- Set up PostgreSQL database and pushed schema
- Configured development workflow and deployment settings