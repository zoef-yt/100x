# Portfolio Design Guide

This document summarizes the design direction for the portfolio site that showcases weekly technical progress.

## Site Goals & Audience
- **Hiring managers & technical recruiters (40%)** – looking for quick competency signals.
- **Fellow developers & bootcamp peers (35%)** – deep dive on technical growth.
- **Potential collaborators & networking contacts (25%)** – understand journey and interests.

Key actions for visitors:
- Browse weekly assignments chronologically.
- Explore specific projects that interest them.
- Reach out for opportunities or collaboration.
- Share work within their networks.

## Recommended Design Concept: "Terminal Aesthetic"
The terminal-inspired style immediately signals a developer focus and is distinctive without being distracting.

### Mood & Style
- Dark theme reminiscent of code editors.
- Minimal, high‑contrast interface using a blue accent (#58a6ff) and purple secondary (#7c3aed).
- Terminal and ASCII art references with typewriter animations.

### Typography
- Headers: `JetBrains Mono`.
- Body: `Inter` sans-serif.

### Layout & Interactions
- Grid of commit‑style cards showing each week as a repository.
- Hover states reveal code snippets.
- Terminal‑style loading animations and keyboard navigation support.

## Component Overview
### Hero Section
- Animated gradient or particle background.
- Title: **"Week by Week, Skill by Skill"**.
- Subtitle describing the 12‑week journey.
- Call to action button scrolling to the grid of weekly cards.

### Week Card
- Thumbnail image or demo GIF.
- Overlay badge showing the week number.
- Short description and tech stack icons.
- Expanded hover state with a "View Details" button and code stats.

### Detail Page
- Breadcrumb navigation.
- Hero image or GIF.
- Overview with a "What I Learned" callout.
- Code samples with syntax highlighting.
- Links to live demo and GitHub repo.
- Navigation to next/previous week.

### Footer
- Contact prompt and email address.
- Social links (GitHub, LinkedIn, Twitter).
- Copyright with current year and a back‑to‑top button.

## Design System & Tooling
- **Animations**: [Framer Motion](https://www.framer.com/motion/).
- **Code Display**: React Syntax Highlighter.
- **Scroll Animations**: Intersection Observer API.
- **Data Fetching**: React Query (if dynamic data is needed).

### Accessibility & Performance
- Maintain at least a 4.5:1 contrast ratio.
- Preload critical fonts and images.
- Skeleton loading states and focus indicators.
- Semantic HTML and descriptive alt text for all images.

### Responsive Breakpoints
- **Mobile (320–768px)**: single-column layout.
- **Tablet (768–1024px)**: two-column grid.
- **Desktop (1024px and up)**: three or four columns with hover interactions.

### Performance Optimizations
- Lazy load images below the fold in WebP format with fallbacks.
- Service worker for offline browsing.
- Critical CSS inlined for above-the-fold content.

This guide provides the core direction for building a developer-focused portfolio that highlights technical growth while remaining accessible and performant.
