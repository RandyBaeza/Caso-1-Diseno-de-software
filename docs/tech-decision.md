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

Next.js (App Router) with Server Side Rendering(SSR)/Static site generator(SSG)

Why:

- Server-Side Rendering helps SEO(Search Engine Optimization) and initial page load.
- It's very nice cause it lets us hide parts of UI based on user roles safely.
- Includes built-in optimizations (images, fonts,splitting).

Considerations:

- App Router is new, some learning needed.
- Requires Node.js, which needs server or serverless hosting.

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

Tailwind CSS

Why:

- Fast prototyping and consistent design.
- Works nicely with Next.js and TypeScript.

Considerations:

- Classes can get long, but easy to learn.

---

## 8. Additional Tools

ESLint + Prettier

Why:

- Keeps code style consistent.
- Built-in support for TypeScript.

Considerations:

- Extra config, but improves team workflow.
