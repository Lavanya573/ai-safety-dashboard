# AI Safety Incident Dashboard

A modern web application for tracking and managing AI safety incidents. Built with React, TypeScript, and Vite.

![Dashboard Screenshot](screenshot.png)

## Features

- 📊 View and manage AI safety incidents
- 🔍 Filter incidents by severity (Low, Medium, High)
- 📅 Sort incidents by date (Newest/Oldest)
- 📝 Report new incidents with detailed information
- 🎨 Modern, responsive design
- 🚀 Fast and efficient performance

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-safety-dashboard.git
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

The build files will be created in the `dist` directory.

## Deployment

### Option 1: Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm install -g vercel
```
3. Deploy:
```bash
vercel
```

### Option 2: Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```
3. Deploy:
```bash
netlify deploy
```

### Option 3: GitHub Pages

1. Update the `vite.config.ts` file:
```typescript
export default defineConfig({
  base: '/ai-safety-dashboard/',
  // ... other config
})
```

2. Add a deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
ai-safety-dashboard/
├── public/
│   └── logo.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── mockData.ts
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Live Demo

Access the live demo at: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## Support

For support, email support@example.com or open an issue in the repository.
