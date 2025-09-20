# Tech Decision - 20minCoach (Frontend)

This document explains the main technology choices for the frontend of 20minCoach.

---

## 1. Frontend Framework

React + TypeScript

Why:

- TypeScript helps catch errors before running the app.
- Makes code easier to understand and maintain.
- Works well with React components.

Considerations:

- You need to learn TypeScript basics, slightly steep learning curve.
- Slightly more setup than plain React.

---

## 2. Application Architecture

Vite (Single Page Application - SPA)

Why:

Extremely fast development server and optimized builds.

Simple setup, lighter than full frameworks like Next.js.

Works seamlessly with React and TypeScript.

Considerations:

No built-in Server-Side Rendering (SSR) or Static Site Generation (SSG).

SEO may be limited compared to SSR solutions.

Requires a separate backend (API) for server-side functionality.

---

## 3. State Management

React Query + Zustand

Why:

- React Query handles server data fetching and caching.
- Zustand is simple for global UI state (theme, filters).

Considerations:

- Two libraries to learn, but simpler than alternatives like Redux.

---

## 4. Real-Time Communication

Socket.IO + PeerJS

Why:

- Socket.IO works just fine for notifications.
- PeerJS ideal for video calls.
- Both support TypeScript.

Considerations:

- Some setup required for real-time features.

---

## 5. Authentication

Auth0 (with Next.js SDK)

Why:

- Easy login setup with roles and multi factor authentication.
- Works with Next.js Server Components.

Considerations:

- Dependence on external service.
- Some features may require a premium, paid plan.

---

## 6. Testing

Jest + React Testing Library (+ optional Cypress)

Why:

- Unit and component tests work well with TypeScript.
- Cypress can test full workflows in the browser.

Considerations:

- Needs some initial setup.

---

## 7. Styling & UI

Tailwind CSS + shadcn-ui

Why:

Fast prototyping and consistent design.

shadcn-ui provides prebuilt, accessible components styled with Tailwind.

Works nicely with Vite, React, and TypeScript.

Considerations:

Tailwind classes can get long, but easy to learn.

## 8. Additional Tools

ESLint + Prettier

Why:

- Keeps code style consistent.
- Built-in support for TypeScript.

Considerations:

- Extra config, but improves team workflow.
