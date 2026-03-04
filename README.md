# Cybersecurity Dashboard

A simple web dashboard for a cybersecurity scanner. It has a login page, a main scan list, and a detailed view for individual scans.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Lucide React & React Icons for SVG icons

## Setup

To run this locally, clone the repo and run:

1. Install all dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and go to `http://localhost:3000`

## Structure

The codebase uses Next.js Route Groups `(app)` to share the sidebar layout across the dashboard and scan pages without affecting the login page.
