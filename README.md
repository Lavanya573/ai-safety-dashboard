# AI Safety Incident Dashboard

A React TypeScript application for managing and displaying AI safety incidents. This dashboard allows users to view, filter, sort, and report AI safety incidents.

## Features

- Display list of AI safety incidents with title, severity, and reported date
- Filter incidents by severity (All, Low, Medium, High)
- Sort incidents by reported date (Newest First, Oldest First)
- View detailed description of each incident
- Report new incidents with title, description, and severity level
- Responsive design that works on desktop and mobile devices

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS (Flexbox/Grid)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `https://lavanya573.github.io/ai-safety-dashboard/`

## Design Decisions

- Used React hooks for state management (useState)
- Implemented responsive design using CSS Flexbox and Grid
- Used TypeScript for type safety and better developer experience
- Created a clean, intuitive user interface with clear visual hierarchy
- Implemented form validation for new incident submissions
- Used color-coded severity badges for quick visual identification
- Added hover effects and transitions for better user interaction

## Challenges

- Managing state for multiple features (filtering, sorting, form data)
- Ensuring responsive design works well across different screen sizes
- Implementing smooth transitions for expanding/collapsing incident details
- Maintaining clean and maintainable code structure 
