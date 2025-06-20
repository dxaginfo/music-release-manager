# Music Release Campaign Manager

A comprehensive web application for musicians, record labels, and music marketers to plan, schedule, execute, and track music release campaigns. The platform streamlines the complex process of releasing music by providing tools for task management, team coordination, timeline visualization, and automated reminders.

## Features

- **Campaign Dashboard**: Centralized view of all active and upcoming release campaigns
- **Release Planning & Timeline**: Interactive timeline creation with customizable templates
- **Task Management**: Detailed task creation, assignment, and tracking
- **Team Collaboration**: Role-based access and communication tools
- **Automated Reminders**: Email and in-app notifications for upcoming deadlines
- **Asset Management**: Centralized storage for release assets (artwork, audio files, press materials)
- **Distribution Integration**: Connection with music distribution platforms
- **Performance Analytics**: Campaign success metrics and reporting
- **Budget Tracking**: Financial planning and expense tracking
- **Integration with Music Platforms**: API connections with Spotify, Apple Music, and other services

## Technology Stack

### Frontend
- React.js with Redux for state management
- Material-UI for consistent, professional design
- Chart.js for analytics and reporting
- React Big Calendar for campaign timeline visualization

### Backend
- Node.js with Express.js
- JWT with OAuth for third-party integrations
- Mongoose ODM for database access

### Database
- MongoDB (NoSQL) for flexible schema evolution
- Redis for performance optimization

### DevOps & Infrastructure
- AWS (Amazon Web Services) for hosting
- GitHub Actions for CI/CD
- Docker for consistent deployment
- Sentry for error tracking

## System Architecture

The Music Release Campaign Manager follows a modern microservices architecture with the following components:

1. **Client Application Layer**
   - Web application (React.js)
   - Mobile-responsive design
   - Progressive Web App capabilities for offline functionality

2. **API Gateway**
   - Routes requests to appropriate microservices
   - Handles authentication and authorization
   - Manages rate limiting and API security

3. **Microservices**
   - User Service: Manages user accounts, authentication, and permissions
   - Campaign Service: Handles campaign creation, management, and timelines
   - Task Service: Manages task creation, assignment, and status updates
   - Notification Service: Processes and delivers reminders and alerts
   - Analytics Service: Collects and processes performance metrics
   - Integration Service: Communicates with third-party platforms and APIs

4. **Data Layer**
   - MongoDB clusters for primary data storage
   - Redis for caching and real-time updates
   - S3 for asset storage (images, audio files, documents)

5. **Background Processing**
   - Message queue system (RabbitMQ) for asynchronous tasks
   - Scheduled jobs for recurring tasks and notifications

6. **External API Integrations**
   - Music platforms (Spotify, Apple Music, etc.)
   - Distribution services
   - Marketing platforms
   - Email delivery services

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)
- Redis (v6 or higher)
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/music-release-manager.git
   cd music-release-manager
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory based on `.env.example`
   - Configure MongoDB connection, Redis, JWT secret, and external API keys

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev
   
   # Start frontend server (in a separate terminal)
   cd client
   npm start
   ```

5. Access the application at `http://localhost:3000`

### Docker Deployment

To run the application using Docker:

1. Build the Docker images:
   ```bash
   docker-compose build
   ```

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access the application at `http://localhost:3000`

## Project Structure

```
music-release-manager/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   └── src/                 # React components and logic
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page components
│       ├── redux/           # Redux store configuration
│       ├── services/        # API service clients
│       └── utils/           # Helper functions
├── server/                  # Backend Node.js application
│   ├── config/              # Configuration files
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Express middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── services/            # Business logic
├── docker/                  # Docker configuration
├── docker-compose.yml       # Docker Compose configuration
└── README.md                # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the needs of independent musicians and record labels
- Built with best practices from the music industry
- Special thanks to all contributors and early adopters