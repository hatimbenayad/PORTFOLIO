# Portfolio Website

A modern portfolio website built with React, TypeScript, and Tailwind CSS, optimized for deployment on Vercel.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Vite for fast development
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd newportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`.

## Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Environment Variables

If your site uses any environment variables, add them in the Vercel dashboard:

- `DATABASE_URL` - PostgreSQL database URL (if using database features)

## Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utility libraries
├── api/                 # Serverless API functions (Vercel)
├── shared/              # Shared types and schemas
├── attached_assets/     # Static assets and images
└── vercel.json         # Vercel configuration
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel
- **UI Components**: Radix UI primitives
- **Animation**: Framer Motion
- **Routing**: Wouter

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Type check with TypeScript

## License

MIT License