![Logo](./images/logo.png)
<hr>

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