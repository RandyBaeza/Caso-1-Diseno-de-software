![Logo](./images/logo.png)
<hr>

## Frontend Source Code

- The repository includes the complete `src/` folder with the full project structure, including the source code created for the prototype.
- All Proof of Concepts (PoCs) and requested classes are stored inside the `src/` folder.
- All files, templates, and source code provided as guidance are placed in the appropriate layer folder where they are used in the final implementation.

## Prototype
The prototype was created using the AI-based tool [Lovable](https://lovable.dev/)

Two main screens were created as part of the prototype:

### 1. Coach Search Screen ([CoachSearch.tsx](./src/src/pages/CoachSearch.tsx))

- Allows users to enter their coaching needs via a search input or voice.
- Displays popular coaching categories for quick selection.
- Shows a premium benefits button if the user has the permission.

<br>

![Coach Search](./images/CoachSearch.png)

### 2. Coach Results Screen ([CoachResults.tsx](./src/src/pages/CoachResults.tsx))

- Displays information for a single coach at a time.
- Allows the user to request a session with the displayed coach.
- Allows the user to move to the next coach in the search results.

<br>

![Coach Results](./images/CoachResults.png)

Both screens follow the selected frontend technologies (React, TypeScript, Tailwind, shadcn/ui) and were used for a UX test.

## Testing 

### Strategy
For this project we apply **unit testing** as the main testing approach. Focusing on testing small, isolated units of code (components, hooks, and utilities).

### Technology
- **Jest:** As the test runner and assertion library.
- **React Testing Library:** For React component testing.
- **ts-jest:** To integrate Jest with TypeScript.

### Implemented Tests

Three unit tests were implemented across two different classes/modules:

#### 1. ProtectedRoute component 
See the full test implementation here: [ProtectedRoute.test.tsx](./src/src/__tests__/ProtectedRoute.test.tsx)
- Validates loading state (isLoading).
- Validates unauthenticated state (redirect to login).
- Validates authenticated state (renders children).

#### 2. Auth configuration and utilities
See the full test implementation here: [AuthLib.test.ts](./src/src/__tests__/AuthLib.test.ts)
- Validates default values (domain, clientId, audience, redirectUri).
- Validates override via window variables.
- Validates override via localStorage.

The following npm scripts were added to [package.json:](./src/package.json)

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

### Example of Test Results
#### Passing test:
![Passing test](./images/test1.png)
#### Failing test:
When expected default audience was missing, the test failed (Expected: ... Received: undefined), shows how Jest reports mismatches.
<br>

![Failing test](./images/test2.png)

### How to Add New Unit Tests
1. **Create a new test file** inside `src/__tests__/` with the suffix `.test.ts` or `.test.tsx`.  

2. **Import the module/component** to test.

3. **Write tests** using Jest’s `test` or `it` blocks, and `expect` assertions.
```tsx
import { myFunction } from "../lib/myModule";

test("returns correct value", () => {
  expect(myFunction(2, 3)).toBe(5);
});
```
4. Run tests with:
``` bash
npm test    # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```








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
Technology Selection & Justification 
1. Frontend Framework & Architecture
Selected: React 18 + TypeScript, built with Vite


Choice:
React
-Why: The standard used for its massive ecosystem and proven stability. Its component-based model perfectly suits the interactive UI of elements needed in a 20 min coach.
-Alternatives considered: Vue.js: Excellent framework but React's larger community and ecosystem give it a slight edge for long-term maintainability. Angular: Too heavy for this project's scale. Its complexity is unnecessary for a primarily UI-driven application.

Choice:
Typescript
-Why: Essential for catching errors at compile time, safely defining data structures, and ensuring maintainability as the codebase grows.
-Alternatives considered: Plain JavaScript: Rejected due to the high potential for runtime errors, difficulty in scaling, and lack of self-documenting code, which would slow down development and increase bug-fixing time.

Choice:
Vite
-Why: Selected for its development experience and optimized production builds.
-Alternatives considered: Next.js: Amazing for its built-in routing, API routes, and SEO benefits. However, rejected because the core application functionality (video calls, authenticated dashboards) is behind a login wall, negating SEO benefits for key flows.

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




Choice:
Server State
-Why: React Query handles caching, background updates, loading/error states, and pagination out-of-the-box, eliminating the need for repetitive code.
-Alternatives considered: Manual useEffect fetching: Rejected as it is error-prone and requires building a complex caching and update logic from scratch. Redux: React Query is a more focused and simpler tool for the specific job of data fetching.

Choice:
UI/Client State
-Why: Zustand offers a minimalistic, unopinionated API, perfect for lightweight global state that isn't server-related, such as theme preferences.
-Alternatives considered: Redux: Rejected due to its conceptual overhead. For global state needs, it is overkill.








