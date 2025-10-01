![Logo](./images/logo.png)
<hr>


<br>

You can try the prototype here: https://twenty-min-connect.lovable.app/

For testing purposes, the following accounts are available:

#### BasicUser
- Email: usuario@example.com
- Password: Usuario1234

#### PremiumUser
- Email: premium@example.com
- Password: Premium1234

New users registering through the prototype will receive BasicUser permissions.
<hr>

# Project Folder Structure

``` bash
src/
├── assets/               # Images, fonts, static files
├── components/           # Atomic Design components
│   ├── atoms/            # Basic UI elements (Button, Input, Label)
│   ├── molecules/        # Groups of atoms (FormGroup, CardItem)
│   ├── organisms/        # Complex UI components (Header, CardList)
│   ├── templates/        # Page layout templates
│   └── auth/             # Auth-related UI components (LoginForm, SignupForm)
├── business/             # Business logic classes and coordinators
├── controllers/          # Handles API calls and orchestrates services
├── error/                # Global error handling (ExceptionHandler)
├── hooks/                # React hooks (useCoachSearch, useSessionManager)
├── lib/                  # Utilities and shared helper functions
│   └── api/              # API clients, fetch utilities, axios configs
├── listeners/            # Event and error listeners
├── logging/              # Logging utilities and classes
├── middleware/           # Middleware logic (auth, error, logging)
├── models/               # TypeScript interfaces and models
├── pages/                # Full page components
├── security/             # Security helpers (Auth, encryption)
├── stores/               # Zustand or other state management stores
├── utils/                # Utility functions (validation, dateUtils)
├── validators/           # Input and permission validators
└── __tests__/            # Test files
    ├── auth/             # Auth-related tests
    └── routes/           # API route tests

```


# 1 Proof of Concepts
## 1.1 Frontend Source Code

The repository includes the complete `src/` folder with the full project structure. Including Proof of Concepts, the source code created for the prototype, files and templates provided as guidance.

## 1.2 Prototype
The prototype was created using the AI-based tool [Lovable](https://lovable.dev/)

Two main screens were created as part of the prototype:

### 1.2.1 Coach Search Screen ([CoachSearch.tsx](./src/pages/CoachSearch.tsx))

- Allows users to enter their coaching needs via a search input or voice.
- Displays popular coaching categories for quick selection.
- Shows a premium benefits button if the user has the permission.

<br>

![Coach Search](./images/CoachSearch.png)

### 1.2.2 Coach Results Screen ([CoachResults.tsx](./src/pages/CoachResults.tsx))

- Displays information for a single coach at a time.
- Allows the user to request a session with the displayed coach.
- Allows the user to move to the next coach in the search results.

<br>

![Coach Results](./images/CoachResults.png)


## 1.3 UX Testing

The UX test is performed using [Maze](https://maze.co/), utilizing a Figma prototype of the screens created.

Link to perform the test: https://t.maze.co/445485876?guerilla=true

Test participants:
- Diego: 26 years old, Paint mixer - [Link to video evidence](https://app.maze.co/report/reels/480a7062-5775-4af1-a430-ddc70870c95c)
- Liseth: 40 years old, Preschool director - [Link to video evidence](https://app.maze.co/report/reels/961175cc-066d-4266-87ef-2de88dcd877d)
- Luz: 58 years old, Cashier - [Link to video evidence](https://app.maze.co/report/reels/798064af-8896-40f8-a9f0-ec3aca15cb7f)
- Didier: 61 years old, Independent vendor - [Link to video evidence](https://app.maze.co/report/reels/1d7e83d8-f944-4729-b7de-3fbdd2d9901d)

Two main tasks were defined for participants:

### Task #1: "Haz clic en el campo de búsqueda (el que dice “Describe qué necesitas y en qué te podemos ayudar...”)"
Description: "Estás en la página principal. El primer paso es buscar qué tipo de ayuda necesitas."
#### Heatmap showing user interactions during Task #1
![Heatmap Task 1](./images/heatmaptask1.jpg)

#### Key metrics from Task #1
![Metrics Task 1](./images/metricstask1.png)

### Task #2: "Haz clic en el botón “Solicitar sesión” del coach mostrado en el resultado."
Description: "Imagina que encontraste un coach que te interesa y quieres iniciar una sesión con él."
#### Heatmap showing user interactions during Task #2
![Heatmap Task 2](./images/heatmaptask2.jpg)
#### Key metrics from Task #2
![Metrics Task 2](./images/metricstask2.png)

### 1.3.1 How to Create a UX Test

1. Create a [Figma](https://www.figma.com/es-es/) Prototype of the screens

	- Make sure screens are linked and interactive.

2. Go to [Maze](https://maze.co/)

3. Start a **New Maze Project**

4. Click “**Create Maze**” → “**Prototype Test**”.

5. Import Your Figma Prototype

6. Set Up **Tasks**

	- Define clear tasks for users, e.g., “Sign up for an account.”
	- Select the start screen and success criteria.

7. Enable camera and screen recording for the tests.

8. Preview

	- Use the Preview button to check that all links work correctly.

9. Share Your Test

	- Click “Share” to generate a link and send it to users for testing.

10. Collect and Analyze Results



## 1.4 Authentication & Authorization
Use [Auth0](https://auth0.com/) as the authentication and authorization provider.

![Login](./images/login.png)

### 1.4.1 How to Create an Application in Auth0
1. Log in to the **Auth0 Dashboard**.

2. Go to **Applications** → **Applications**.

3. Click **+ Create Application**.

4. Enter the Name and choose an application type (20minCoach it's a **Single Page Application (SPA)**).

5. Click Create

6. Configure the **Allowed Callback URLs** and **Logout URLs** to point to the local environment and deployed app.

<br>

To Configure the Allowed Callback URLs go to the **Auth0 Dashboard** → **Applications** → **Applications**, select your newly created application and open the **Settings** tab.

![URL Callback](./images/urlcallbacks.png)

### 1.4.2 Roles & Permissions
Two actions from the prototype screens are assigned to role-based permissions. In the **Auth0 Management Console**, go to **User Management** → **Roles**. The following roles are set up:

![Roles](./images/roles.png)

**Auth0 Dashboard** → **User Management** → **Users** → **basicUser:** 

basicUser is allowed to perform only "read: content".

![Basic Rol](./images/basicrol.png)

**Auth0 Dashboard** → **User Management** → **Users** → **premiumUser:** 

premiumUser is allowed to perform both "read: content" and "read: premium_content".

![Premium Rol](./images/premiumrol.png)

### 1.4.3 How to Create a Permission
1. Go to the **Auth0 Dashboard** → **Applications** → **APIs**.

2. Select your API, then open the **Permissions** tab.

3. Enter: 
      - **Permission** → e.g., `read: appointments` 
      - **Description** → e.g., `Read your appointments`
4. Click **+ Add**.

### 1.4.4 How to Create a Role

1. Go to the **Auth0 Dashboard** → **User Management** → **Roles**.

2. Click **+ Create Role**.

3. Enter Name, Description and click Create.

4. Assign permissions.
    - Select your newly created Role and open the Permissions tab. 
    - Click Add Permissions.

5. Assign users to the role.

### 1.4.5 How to Create a User and Assign Roles

1. Go to the **Auth0 Dashboard** → **User Management** → **Users**.

2. Click **+ Create User**.

3. Enter **Email**, **Password** and **Connection** (e.g., “Username-Password-Authentication”).

4. Click Create.

5. After the user is created, open the user profile.

6. Go to the **Roles** tab.

7. Click **Assign Roles**.

8. Select the desired role (e.g., BasicUser or PremiumUser).

9. Click **Assign**.


### 1.4.6 How to Create an API
1. Go to the **Auth0 Dashboard** → **Applications** → **APIs**.

2. Click **+ Create API**.

3. Enter: 
      - **Name** → e.g., `20MinCoachUsersAPI` 
      - **Identifier** → a unique URI, e.g., `https://twenty-min-connect.lovable.app/users`. This value will be used as the **audience** parameter on authorization calls
      - **Signing Algorithm** → leave as **RS256**
4. Click **Create**.

5. Select your newly created API and open the Settings tab.
      - **Enable RBAC**
      - **Enable Add Permissions in the Access Token**


### 1.4.7 How to Customize the Login
1. Go to the **Auth0 Dashboard** → **Branding** → **Universal Login**.

2. Options to customize:
    - **Logo and Background** → upload your app logo and set background image or color.
    - **Primary Colors** → set theme colors to match your app.
    - **Custom Text** → modify headings, placeholders, and button text.

3. Save the changes.

#### 1.4.7.1 How to Change Default Language
1. Go to the **Auth0 Dashboard** → **Settings**

2. Open the **General** tab.

3. Scroll down to the **Languages** section.

4. Select your desired **default language**.

5. Save the changes.

### 1.4.8 How to Enable Two-Factor Authentication
1. Go to the **Auth0 Dashboard** → **Security** → **Multi-factor Auth**.

2. You will see this page, choose the factors to enable.

![MFA](./images/mfa.png)

3. Scroll down and define policies.

![MFA2](./images/mfa2.png)

4. Save the changes.

5. Test by logging in with a user account to verify that MFA is prompted.

![MFA screen](./images/mfascreen.png)

**Note:** After performing the tests, **MFA was disabled** to simplify login and sign-up for users who want to test the prototype.

You can test the authentication and prototype using the following link: https://twenty-min-connect.lovable.app/

### 1.4.9 How to Integrate Auth0 in React

##### Installation:
``` bash
npm install @auth0/auth0-react
```
1. Create an [.env](./.env) file in the root of the project to save the credentials
``` ts
	REACT_APP_AUTH0_DOMAIN=dev-dwut2n5nvuu4bl0n.us.auth0.com
	REACT_APP_AUTH0_CLIENT_ID=h5wipav5LmusIRE1kBUFUu4VNxbHTlD7
	REACT_APP_AUTH0_AUDIENCE=https://twenty-min-connect.lovable.app/users
```
  - **Domain** and **Client ID** are provided by Auth0 when you create your application.
- **Audience** refers to the API you created in Auth0 and is used to request access tokens for that API.

  To find your **Domain** and **Client ID** in Auth0: Go to the **Auth0 Dashboard** → **Applications** → **Applications**, Select your application and Open the **Settings** tab.

![Auth Domain](./images/authdomain.png)

2. Create an ([auth.ts](./src/lib/auth.ts)) file in `src/lib/` with the configuration

``` ts
export const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  audience: process.env.REACT_APP_AUTH0_AUDIENCE || "",
  redirectUri: window.location.origin,
};
```

3. Wrap your app with `Auth0Provider` in [App.tsx](./src/App.tsx):

``` tsx
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Config } from "@/lib/auth";

const App = () => (
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: auth0Config.redirectUri,
      audience: auth0Config.audience,
      scope: "read:content read:premium_content",
    }}
  >
    <YourApp />
  </Auth0Provider>
);
```

4. Use the **Auth0 hooks** (like [usePermissions.ts](./src/hooks/usePermissions.ts)) to manage authentication in your components:

``` ts
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Sign In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <button onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</button>;
};
```

5. Protect routes or components using authentication state:

``` ts
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <p>Please log in.</p>;
  return <div>Welcome, {user.name}</div>;
};
```

**Note:** Avoid storing credentials in `localStorage` or any client-side storage. Always rely on Auth0 for secure token handling.

### 1.4.10 Testing the Authentication & Authorization Implementation

Test users were created and assigned to the corresponding roles.
To see the users go to the **Auth0 Dashboard** → **User Management** → **Users**

![Auth Test](./images/authtest.png)

#### BasicUser
- Email: usuario@example.com
- Password: Usuario1234

When logging in with a **BasicUser** account and scrolling to the bottom of the page, the **Premium User button is not visible**.

![Auth Basic](./images/basic.png)

#### PremiumUser
- Email: premium@example.com
- Password: Premium1234

When logging in with a **PremiumUser** account and scrolling to the bottom of the page, the **Premium User button is visible**.

![Auth Premium](./images/premium.png)

## 1.5 Testing 

### 1.5.1 Strategy
Apply **unit testing** as the main testing approach. Focus on testing small, isolated units of code (components, hooks, and utilities).\
Additionally, end-to-end testing using Cypress must be employed to validate full user flows and interactions in the running application.

### 1.5.2 Technology
- **Jest:** As the test runner and assertion library.
- **React Testing Library:** For React component testing.
- **ts-jest:** To integrate Jest with TypeScript.
- **Cypress:** End-to-end testing framework for simulating user interactions and verifying full application flows, including authentication, navigation, and API integration.

### 1.5.3 Test Folder Structure
Tests are organized by module/area at `src/__tests__/`
```
src/
 └─ __tests__/
      ├─ auth/
      │    ├─ AuthLib.test.ts
      │    └─ AuthContext.test.ts
      ├─ routes/
      │    └─ ProtectedRoute.test.tsx
      ├─ controllers/
      │    └─ SearchController.test.tsx
      └─ pages/
           └─ CoachSearch.test.tsx
```

### 1.5.4 Example Implemented Unit Tests

Three unit tests are implemented across two different classes/modules:

#### 1.  ProtectedRoute component 
See the full test implementation here: [ProtectedRoute.test.tsx](./src/__tests__/routes/ProtectedRoute.test.tsx)
- Validates loading state (isLoading).
- Validates unauthenticated state (redirect to login).
- Validates authenticated state (renders children).

#### 2 Auth configuration and utilities
See the full test implementation here: [AuthLib.test.ts](./src/__tests__/auth/AuthLib.test.ts)
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

### 1.5.5 Example of Unit Test Results
#### Passing test:
![Passing test](./images/test1.png)
#### Failing test:
When expected default audience was missing, the test failed (Expected: ... Received: undefined), shows how Jest reports mismatches.
<br>

![Failing test](./images/test2.png)

### 1.5.6 How to Add New Unit Tests
1. **Create a new test file** inside the corresponding module folder in `src/__tests__/` with the suffix `.test.ts` or `.test.tsx`.  

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

### 1.5.7 Component testing methodology

All components must be tested once implemented. Further below are the testing steps for different type of components. Steps affected by different browsers or devices must be tested for all compatible ones. After any step or test they must be reported in the project testing backlog.


#### 1.5.7.1 Format
##### 1.5.7.1.1 Step:
	<Step_performed>
	<Date_of_test>. Performed by <tester_name>
    
	Contextual information:
		(Here goes the information of the device/s and browser/s used, any external factors or relevant configuration on these must be pointed out)
        
	Process:
		(Here goes a detailed description of how the step was tested, including any observations and middle steps).
        
	Result:
		(Here goes a conclusion over the state of the component, including how well it fulfills its responsibility, how well it is integrated into the system and needed or potential changes)

##### 1.5.7.1.2 Test:
    <Component_name>, <component hierarchy> [the hierarchy, as for example, layer/module/component]. Test No°<number_of_test_over_the_component>
    From <Start_date_of_test> to <Ending_date_of_test>.
    
    Testers:
        List of tester names

	<list of steps>

	Summary:
		(Here goes a summary of all conclusions)

#### 1.5.7.2 Steps to perform
##### 1.5.7.2.1 Visual components:

   1. Revise functionality
       - **Test colocation:** Is it shown in the expected position? Is it shown when expected? Does its colocation follow design after interactions, visual updates or processes? Do screen readers access it as expected?
       - **If it has available interactions, test all of them based on their responsibility:** Do interactions behave as expected? Do they work with different control devices (touch, mice, keyboards)? Do they work the amount of time they should? Do they keep working after interactions, visual updates or processes?
       - **If it needs code from another layer, ensure that code is already working as intended:** Is the data sent to the controller correct? Is the data received from the controller correct? Is the data being handled as expected on the component?
   3. Revise appearance
       - **Confirm its appearance matches design:** Does it render as on the design? Does it stay visually matching after interactions, visual updates or processes?
       - **Test different styles compatibility:** Does the shown style match the style applied? Does the component behave functionally the same with the different style?

##### 1.5.7.2.2 Model components:

   - **Internal functions:** Do functions fulfill their design? Are all functions implemented?
   - **Data types:** Do data types match design?
   - **Data format:** Is data format or structure as designed?
   - **Access methods:** Do access methods work? Are all methods implemented?
##### 1.5.7.2.3 Other components:

   - **Execution:** Does it work as design? Do they receive and return the correct values?
   - **Data:** Are values and data types correct, if any? Is data managed correctly? 
   - **Access methods:** Do access methods follow design? Are all methods implemented?
   - **If it needs code from another layer, make sure that code is already working as intended:** Is the data sent correct? Is the data received correct? Is the data being handled as on design?


---

---

# 2 Tech Decision - 20minCoach (Frontend)



---

## 2.1 Frontend Framework

React + TypeScript



- TypeScript helps catch errors before running the app.
- Makes code easier to understand and maintain.
- Works well with React components.

Considerations:

- You need to learn TypeScript basics, slightly steep learning curve.
- Slightly more setup than plain React.

---
#### Technology Selection & Justification 

Frontend Framework & Architecture
Selected: React 18 + TypeScript, built with Vite



React
- The standard used for its massive ecosystem and proven stability. Its component-based model perfectly suits the interactive UI of elements needed in a 20 min coach.
- Alternatives considered: Vue.js: Excellent framework but React's larger community and ecosystem give it a slight edge for long-term maintainability. Angular: Too heavy for this project's scale. Its complexity is unnecessary for a primarily UI-driven application.


Typescript
-  Essential for catching errors at compile time, safely defining data structures, and ensuring maintainability as the codebase grows.
- Alternatives considered: Plain JavaScript: Rejected due to the high potential for runtime errors, difficulty in scaling, and lack of self-documenting code, which would slow down development and increase bug-fixing time.


Vite
-  Selected for its development experience and optimized production builds.
- Alternatives considered: Next.js: Amazing for its built-in routing, API routes, and SEO benefits. However, rejected because the core application functionality (video calls, authenticated dashboards) is behind a login wall, negating SEO benefits for key flows.





## 2.2 Application Architecture
 ### 2.2.1 Vite Setup & Configuration
 - For dev server + bundler to run/build the React SPA quickly.
How to set up the development environment:

How to install:

``` bash
npm create vite@latest 20mincoach 
cd 20mincoach
npm install
```

How to run:
``` bash
npm run dev
```
	
#### Vital files:

[vite.config.ts](./src/vite.config.ts) -> Main build configuration

[tsconfig.json](./src/tsconfig.json) --> TypeScript rules

[index.html](./src/index.html) --> Entry point (single HTML file)

### 2.2.2 What developers need to know:

- Npm run build creates files in /dist folder

#### Adding environment variables: Create .env files:

.env.development - For local development

.env.production - For live app

### 2.2.3 Routing file structure:


	src/
	  pages/
	    CoachSearch.tsx
		CoachResults.tsx
	    VideoCall.tsx
	    Profile.tsx


## 2.3 State Management Implementation
### 2.3.1 Server State with React Query
 - For fetch, cache, and update server/API data.

#### 2.3.1.1 Setup:


	npm install @tanstack/react-query


#### 2.3.1.2 Configuration file in `src/lib/queryClient.ts` ([queryClient.ts](./src/lib/queryClient.ts))

``` ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
	queries: {
		staleTime: 5 * 3, 
		retry: 2,
	},
	},
});
```

#### 2.3.1.3 Example usage in components:


Hook: `src/hooks/useCoaches.ts` ([useCoaches.ts](./src/hooks/useCoaches.ts))
``` ts
import { useQuery } from '@tanstack/react-query';
import { coachApi } from '../services/coachApi';

export const useCoaches = (searchTerm: string) => {
	return useQuery({
	queryKey: ['coaches', searchTerm],
	queryFn: () => coachApi.search(searchTerm),
	enabled: !!searchTerm,
	});
};
const { data: coaches, isLoading, error } = useCoaches('mechanic');
```

Service: `src/services/coachApi.ts` ([coachApi.ts](./src/services/coachApi.ts))
``` ts
import apiClient from '../lib/api/client';

export const coachApi = {
  search: async (term: string) => {
    const response = await apiClient.get('/coaches', { params: { search: term } });
    return response.data;
  },
};
```

### 2.3.2 Client State with Zustand
- For simple local/global state for UI and user session.

		npm install zustand

#### Example:	

- Store examples: `src/stores/`

#### Theme store: `src/stores/themeStore.ts` ([themeStore.ts](./src/stores/themeStore.ts))
``` ts
  import { create } from 'zustand';
  
  interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
  }
  
  export const useThemeStore = create<ThemeState>((set) => ({
    isDark: false,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  }));
  ```

#### User session store: `src/stores/sessionStore.ts` ([sessionStore.ts](./src/stores/sessionStore.ts))
```ts
interface SessionState {
  user: User | null;
  currentCoach: Coach | null;
  setUser: (user: User) => void;
  setCurrentCoach: (coach: Coach) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  currentCoach: null,
  setUser: (user) => set({ user }),
  setCurrentCoach: (coach) => set({ currentCoach: coach }),
}));
```

#### Usage in components:
``` ts
const { isDark, toggleTheme } = useThemeStore();
const { user, setUser } = useSessionStore();
```


## 2.4 Real-Time Communication Setup
### Socket.IO for Notifications
#### Installation:


	npm install socket.io-client


#### Configuration: `src/services/socketService.ts` ([socketService.ts](./src/services/socketService.ts))

``` ts
import { io, Socket } from 'socket.io-client';

class SocketService {
	private socket: Socket | null = null;
	
	connect(userId: string) {
	this.socket = io(import.meta.env.VITE_SOCKET_URL, {
		auth: { userId }
	});
	
	this.socket.on('coach-request', (data) => {
		// Handle incoming coach requests
	});
	}
	
	sendCoachRequest(coachId: string) {
	this.socket?.emit('request-coach', { coachId });
	}
}

export const socketService = new SocketService();
```

### PeerJS for Video Calls
#### Installation:


	npm install peerjs


#### Video call setup: `src/services/videoService.ts` ([videoService.ts](./src/services/videoService.ts))

``` ts
import Peer from 'peerjs';

export class VideoCallService {
	private peer: Peer | null = null;
	
	initialize(userId: string) {
	this.peer = new Peer(userId, {
		host: import.meta.env.VITE_PEER_HOST,
		port: import.meta.env.VITE_PEER_PORT,
	});
	}
	
	startCall(coachPeerId: string): MediaStream {
	navigator.mediaDevices.getUserMedia({ video: true, audio: true })
		.then((stream) => {
		const call = this.peer?.call(coachPeerId, stream);
		return stream;
		});
	}
}
```
	

	
## 2.5 Styling Implementation
### Tailwind CSS Setup
 - For utility-first CSS for fast, consistent styling.
### Configuration file: src/[tailwind.config.js](./src/tailwind.config.ts)

``` js
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	extend: {
		colors: {
		primary: '#3B82F6',
		secondary: '#1E40AF',
		},
	},
	},
	plugins: [],
};
```
	
#### Main CSS file: src/[index.css](./src/index.css)

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### shadcn/ui Components
 - For ready-made React components styled with Tailwind.
#### Installation and setup:


	npx shadcn-ui@latest init
	npx shadcn-ui@latest add button card input

#### Using components:

``` js
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CoachCard = ({ coach }) => (
	<Card>
	<CardContent>
		<h3>{coach.name}</h3>
		<Button onClick={requestSession}>
		Request Session
		</Button>
	</CardContent>
	</Card>
);
``` 
	
## 2.6 Development Tools
### ESLint & Prettier Setup
 - ESLint – For linting to catch errors and enforce code rules.

 - Prettier – For automatic code formatting for consistent style.
#### Configuration files:

[eslint.config.js](./src/eslint.config.js) -> Linting rules

.prettierrc -> Code formatting rules

#### ESLint rules example:

``` js
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ /* options */ });

export default [
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'),
  {
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-const': 'error',
    },
  },
];
```

#### [Package.json](./src/package.json) scripts:
``` json
{
	"scripts": {
	"lint": "eslint src --ext .ts,.tsx",
	"lint:fix": "eslint src --ext .ts,.tsx --fix",
	"format": "prettier --write src/"
	}
}
```

#### VS Code setup: Create .vscode/settings.json

``` json
{
	"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
	},
	"editor.formatOnSave": true
}
```


---

# 3 N-Layer Architecture Design


## 3.1 Detailed Layer Design



### 3.1.1 Models


 - Location: scr/[models](./src/models/)/
 
 ### Example:

 #### `src/models/Category.ts` ([Category.ts](./src/models/Category.ts))
 

 #### `src/models/Coach.ts` ([Coach.ts](./src/models/Coach.ts))
 
 ####  `src/models/user.ts`:
``` ts
export interface User {
	id: string;
	email: string;
	name: string;
	role: 'basic' | 'premium';
	credits: number;
}

export type UserRole = 'basic' | 'premium';
```

#### `src/models/api.ts`
- Data from backend API:


``` ts	
export interface CoachDTO {
	id: string;
	user_name: string;
	specialty_area: string;
	average_rating: number;
	is_available: boolean;
}
```
 - Data to sent to API:
``` ts
export interface SessionRequestDTO {
	coach_id: string;
	user_id: string;
}
```
#### `src/models/index.ts`
``` ts
export * from './user';
export * from './coach';
export * from './api';
```

#### Usage example:
``` ts
	import type { Coach, User } from '../models';

	const MyComponent = ({ coach }: { coach: Coach }) => {
	
	}
```

### 3.1.2 API Client Layer

Location: src/lib/[api](./src/lib/api/)/

#### Configuration file: `src/lib/api/client.ts` ([client.ts](./src/lib/api/client.ts))
``` ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Optional: add interceptors if needed, e.g., for logging or global error handling
// Auth tokens are handled via Auth0 using getAccessTokenSilently() in the components/hooks that call the API

export default apiClient;
```
- This client centralizes all API calls to the backend.

- Authentication headers are added per request using **Auth0** tokens obtained with `getAccessTokenSilently()`.

- Common API errors can be handled in the components or hooks that use this client (e.g., 401 unauthorized, network errors).

### 3.1.3 Services Layer

Location: src/[services](./src/services/)/

#### `src/services/coachApi.ts` ([coachApi.ts](./src/services/coachApi.ts))
``` ts
import apiClient from '../lib/api/client';

export const coachApi = {
  search: async (term: string) => {
    const response = await apiClient.get('/coaches', { params: { search: term } });
    return response.data;
  },
};
```
#### `src/services/socketService.ts` ([socketService.ts](./src/services/socketService.ts))
``` ts
import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;

  connect(userId: string) {
    this.socket = io(import.meta.env.VITE_SOCKET_URL, {
      auth: { userId },
    });
    this.socket.on('coach-request', (data) => {
      console.log('Incoming coach request:', data);
      // Handle incoming coach requests here
    });
  }
  sendCoachRequest(coachId: string) {
    this.socket?.emit('request-coach', { coachId });
  }
  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}
export const socketService = new SocketService();
```

### 3.1.4 State Layer


Location: src/[stores](./src/stores/)/  -> Zustand

#### `src/stores/themeStore.ts` ([themeStore.ts](./src/stores/themeStore.ts))
``` ts
import { create } from 'zustand';

interface ThemeState {
	isDark: boolean;
	toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
	isDark: false,
	toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
```

#### `src/stores/sessionStore.ts` ([sessionStore.ts](./src/stores/sessionStore.ts))
``` ts
import { create } from 'zustand';
import type { Coach } from '../models';

interface SessionState {
	currentCoach: Coach | null;
	setCurrentCoach: (coach: Coach) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
	currentCoach: null,
	setCurrentCoach: (coach) => set({ currentCoach: coach }),
}));		
```

### 3.1.5 Controller Layer

Location: src/[hooks](./src/hooks/)/   -> React Query

#### `src/hooks/useCoachSearch.ts` ([useCoachSearch.ts](./src/hooks/useCoachSearch.ts))
``` ts
import { useQuery } from '@tanstack/react-query';
import { coachService } from '../services/coachService';
import type { CoachSearchFilters } from '../models';

export const useCoachSearch = (filters: CoachSearchFilters) => {
  return useQuery({
	queryKey: ['coaches', filters],
	queryFn: () => coachService.searchCoaches(filters),
  });
};
```
	
#### `src/hooks/useSessionManager.ts` ([useSessionManager.ts](./src/hooks/useSessionManager.ts))
``` ts
import { useMutation } from '@tanstack/react-query';
import { coachService } from '../services/coachService';

export const useSessionManager = () => {
  const requestSession = useMutation({
	mutationFn: (coachId: string) => coachService.requestSession(coachId),
  });

  return {
	requestSession: requestSession.mutate,
	isLoading: requestSession.isPending,
  };
};
```
 
### 3.1.6 Presentation Layer

Location: `src/components/` and `src/pages/`

- #### src/components/[atoms](./src/components/atoms/)/
- #### src/components/[molecules](./src/components/molecules/)/
- #### src/components/[organisms](./src/components/organisms/)/
- #### src/components/[templates](./src/components/templates/)/
- #### src/[pages](./src/pages/)/

#### `src/components/atoms/label.tsx` ([label.tsx](./src/components/atoms/label.tsx))
``` tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

#### `src/components/organisms/CoachCard.tsx` ([CoachCard.tsx](./src/components/organisms/CoachCard.tsx))

#### `src/pages/CoachResults.tsx` ([CoachResults.tsx](./src/pages/CoachResults.tsx))

### 3.1.7 Middleware

Location: src/[middleware](/src/middleware/)/

#### `src/middleware/authMiddleware.ts` ([authMiddleware.ts](./src/middleware/authMiddleware.ts))

``` ts
import { useAuth } from '../hooks/usePermissions';

export const usePermissionMiddleware = () => {
  const { hasPermission } = useAuth();

  const checkPermission = (permission: string): boolean => {
	return hasPermission(permission);
  };

  return { checkPermission };
};
```
#### `src/middleware/errorMiddleware.ts` ([errorMiddleware.ts](/src/middleware/errorMiddleware.ts))
```ts
export const useErrorMiddleware = () => {
  const handleApiError = (error: any) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
      return 'Please log in again';
    }
    
    if (error.response?.status === 403) {
      return 'You do not have permission for this action';
    }
    
    return error.response?.data?.message || 'Something went wrong';
  };

  return { handleApiError };
};
```

#### `src/middleware/logMiddleware.ts` ([logMiddleware.ts](/src/middleware/logMiddleware.ts))

``` ts
export const useLogMiddleware = () => {
  const logEvent = (event: string, data?: any) => {
    console.log(`[${new Date().toISOString()}] ${event}`, data);
    
    // Send to logging service in production
    if (import.meta.env.PROD) {
      // Add your logging service here
    }
  };

  return { logEvent };
};
```


### 3.1.8 Business

Location: src/[business](/src/business/)/

#### `src/business/sessionCoordinator.ts` ([sessionCoordinator.ts](/src/business/sessionCoordinator.ts))
``` ts
import { sessionService } from '../services/sessionService';
import { useLogMiddleware } from '../middleware/logMiddleware';

export class SessionCoordinator {
	private log = useLogMiddleware();
	async connectUserToCoach(userId: string, coachId: string): Promise<string> {
	try {
		this.log.logEvent('session_connect_attempt', { userId, coachId });
		const peerId = await sessionService.startVideoCall(`${userId}-${coachId}`);
	
		setTimeout(() => {
		this.endSession(userId, coachId);
		}, 20 * 60 * 1000);

		this.log.logEvent('session_connected', { userId, coachId, peerId });
		return peerId;
	} catch (error) {
		this.log.logEvent('session_connect_failed', { userId, coachId, error });
		throw error;
	}
	}
	async endSession(userId: string, coachId: string): Promise<void> {
	await sessionService.endSession(`${userId}-${coachId}`);
	this.log.logEvent('session_ended', { userId, coachId });
	}
}
export const sessionCoordinator = new SessionCoordinator();
```

#### `src/business/coachMatcher.ts` ([coachMatcher.ts](/src/business/coachMatcher.ts))
``` ts
import type { Coach, CoachSearchFilters } from '../models';

export class CoachMatcher {
	findBestMatch(coaches: Coach[], filters: CoachSearchFilters): Coach | null {
	let filteredCoaches = coaches.filter(coach => 
		coach.available && 
		coach.rating >= (filters.minRating || 0)
	);
	if (filters.specialty) {
		filteredCoaches = filteredCoaches.filter(coach =>
		coach.specialty.toLowerCase().includes(filters.specialty!.toLowerCase())
		);
	}
	// Sort by rating (highest first)
	filteredCoaches.sort((a, b) => b.rating - a.rating);
	return filteredCoaches[0] || null;
	}
	calculateMatchScore(coach: Coach, userNeeds: string): number {
	let score = coach.rating;
	// Boost score if specialty matches user needs
	if (coach.specialty.toLowerCase().includes(userNeeds.toLowerCase())) {
		score += 2;
	}
	return score;
	}
}
export const coachMatcher = new CoachMatcher();
```
### 3.1.9 Listeners

Location: src/[listeners](/src/listeners/)/

#### `src/listeners/errorListeners.ts` ([useEventListeners.ts](/src/listeners/useEventListeners.ts))

``` ts
import { useLogMiddleware } from '../middleware/logMiddleware';

export const useEventListeners = () => {
  const log = useLogMiddleware();
  const setupUIListeners = (onUserAction: (action: string, data: any) => void) => {
	// Listen for page visibility changes
	document.addEventListener('visibilitychange', () => {
	  onUserAction('visibility_change', { 
		isVisible: !document.hidden 
	  });
	});
	// Listen for online/offline status
	window.addEventListener('online', () => {
	  onUserAction('connection_restored', {});
	});
	window.addEventListener('offline', () => {
	  onUserAction('connection_lost', {});
	});
  };
  return { setupUIListeners };
};
```
	
#### `src/listeners/errorListeners.ts` ([errorListeners.ts](/src/listeners/errorListeners.ts))
``` ts
export const useErrorListeners = () => {
  const setupErrorListeners = (onError: (error: Error, context: string) => void) => {
    // Global error handler
    window.addEventListener('error', (event) => {
      onError(event.error, 'window_error');
    });
// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  onError(event.reason, 'unhandled_rejection');
});
  };
  return { setupErrorListeners };
};
```

### 3.1.10  Validators

Location: src/[validators](/src/validators/)/

#### `src/validators/permissionValidator.ts` ([permissionValidator.ts](/src/validators/permissionValidator.ts))

``` ts
import { usePermissionMiddleware } from '../middleware/authMiddleware';

export const usePermissionValidator = () => {
  const { checkPermission } = usePermissionMiddleware();
  const validatePermission = (permission: string): boolean => {
	const hasPerm = checkPermission(permission);
	if (!hasPerm) {
	  console.warn(`Permission denied: ${permission}`);
	  return false;
	}
	return true;
  };
  return { validatePermission };
};
```

#### `src/validators/inputValidator.ts` ([inputValidator.ts](/src/validators/inputValidator.ts))

``` ts
export const useInputValidator = () => {
  const validateSearchInput = (input: string): { isValid: boolean; message: string } => {
	if (input.length < 2) {
	  return { isValid: false, message: 'Search term must be at least 2 characters' };
	}
	if (input.length > 100) {
	  return { isValid: false, message: 'Search term too long' };
	}
	// Check for potentially harmful characters
	const harmfulPattern = /[<>{}]/;
	if (harmfulPattern.test(input)) {
	  return { isValid: false, message: 'Invalid characters in search' };
	}
	return { isValid: true, message: '' };
  };
  const validateSessionRequest = (coachId: string, userId: string): boolean => {
	return !!coachId && !!userId;
  };
  return { validateSearchInput, validateSessionRequest };
};
```
	
#### `src/validators/connectionValidator.ts` ([connectionValidator.ts](/src/validators/connectionValidator.ts))

``` ts
export const useConnectionValidator = () => {
  const checkConnectionQuality = async (): Promise<'good' | 'fair' | 'poor'> => {
    if (!navigator.onLine) {
      return 'poor';
    }
    // Simple connection check - in real app, use more sophisticated method
    try {
      const start = performance.now();
      await fetch('https://www.google.com/favicon.ico', { 
        mode: 'no-cors',
        cache: 'no-cache'
      });
      const latency = performance.now() - start;
      if (latency < 100) return 'good';
      if (latency < 500) return 'fair';
      return 'poor';
    } catch {
      return 'poor';
    }
  };
  return { checkConnectionQuality };
};
```

### 3.1.11 Styles


Location: src/[styles](/src/styles/)/

#### `src/styles/themeManager.ts` ([themeManager.ts](/src/styles/themeManager.ts))

``` ts
export class ThemeManager {
  private currentTheme: 'light' | 'dark' = 'light';

  setTheme(theme: 'light' | 'dark') {
	this.currentTheme = theme;
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
  }
  getTheme(): 'light' | 'dark' {
	const saved = localStorage.getItem('theme') as 'light' | 'dark';
	return saved || this.currentTheme;
  }
  toggleTheme() {
	const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
	this.setTheme(newTheme);
  }
  // Apply theme to specific component
  applyComponentTheme(componentId: string, theme: 'light' | 'dark') {
	const element = document.getElementById(componentId);
	if (element) {
	  element.setAttribute('data-theme', theme);
	}
  }
}
export const themeManager = new ThemeManager();
```
	
#### Update Tailwind config: [tailwind.config.js](/src/tailwind.config.ts)

``` ts
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
	extend: {
	  colors: {
		primary: '#3B82F6',
		secondary: '#1E40AF',
	  },
	},
  },
};
```
#### Add to main CSS: [index.css](/src/index.css)

``` ts
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
  [data-theme="dark"] {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}
```

### 3.1.12 Utilities

Location: src/[utils](/src/utils/)/

#### `src/utils/dateUtils.ts` ([dateUtils.ts](./src/utils/dateUtils.ts))

``` ts
export const formatSessionTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { 
	hour: '2-digit', 
	minute: '2-digit' 
  });
};
export const getSessionEndTime = (startTime: Date): Date => {
  return new Date(startTime.getTime() + 20 * 60000); // 20 minutes
};
```
	
	
#### `src/utils/validation.ts` ([validation.ts](/src/utils/validation.ts))

``` ts
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};
```

#### `src/utils/mathUtils.ts` ([mathUtils.ts](/src/utils/mathUtils.ts))

### 3.1.13 Exception Handling

Location: src/[error](/src/error/)/

#### `src/error/exceptionHandler.ts` ([exceptionHandler.ts](/src/error/exceptionHandler.ts))

``` ts
import { useLogMiddleware } from '../middleware/logMiddleware';

export class ExceptionHandler {
  private log = useLogMiddleware();
  handle(error: Error, context: string, severity: 'low' | 'medium' | 'high' = 'medium') {
	this.log.logEvent('exception_occurred', {
	  error: error.message,
	  context,
	  severity,
	  stack: error.stack
	});
	// Different handling based on severity
	switch (severity) {
	  case 'high':
		this.handleCriticalError(error, context);
		break;
	  case 'medium':
		this.handleRecoverableError(error, context);
		break;
	  case 'low':
		this.handleMinorError(error, context);
		break;
	}
  }
  private handleCriticalError(error: Error, context: string) {
	// Show error page or restart app
	console.error('Critical error:', error);
  }
  private handleRecoverableError(error: Error, context: string) {
	// Show user-friendly message
	console.warn('Recoverable error:', error);
  }
  private handleMinorError(error: Error, context: string) {
	// Just log it
	console.info('Minor error:', error);
  }
}
export const exceptionHandler = new ExceptionHandler();
```


### 3.1.14 Logging
Location: src/[logging](/src/logging/)/

#### `src/logging/logger.ts` ([logger.ts](/src/logging/logger.ts))

``` ts
export class Logger {
  private logLevel: 'debug' | 'info' | 'warn' | 'error' = 'info';
  setLogLevel(level: 'debug' | 'info' | 'warn' | 'error') {
	this.logLevel = level;
  }
  debug(message: string, data?: any) {
	if (this.shouldLog('debug')) {
	  console.debug(`[DEBUG] ${message}`, data);
	}
  }
  info(message: string, data?: any) {
	if (this.shouldLog('info')) {
	  console.info(`[INFO] ${message}`, data);
	}
  }
  warn(message: string, data?: any) {
	if (this.shouldLog('warn')) {
	  console.warn(`[WARN] ${message}`, data);
	}
  }
  error(message: string, data?: any) {
	if (this.shouldLog('error')) {
	  console.error(`[ERROR] ${message}`, data);
	}
  }
  private shouldLog(level: string): boolean {
	const levels = ['debug', 'info', 'warn', 'error'];
	return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}
export const logger = new Logger();
```

### 3.1.15 Security
Location: src/[security](/src/security/)/
#### `src/security/authManager.ts` ([authManager.ts](/src/security/authManager.ts))

``` ts
import { useAuth0 } from '@auth0/auth0-react';

export const useAuthManager = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const getSecureToken = async (): Promise<string> => {
	try {
	  return await getAccessTokenSilently();
	} catch (error) {
	  throw new Error('Failed to get secure token');
	}
  };
  const hasRequiredRole = (requiredRole: string): boolean => {
	const roles = user?.['https://20mincoach.com/roles'] || [];
	return roles.includes(requiredRole);
  };
  const encryptSensitiveData = (data: string): string => {
	// Simple base64 encoding - in production use proper encryption
	return btoa(unescape(encodeURIComponent(data)));
  };
  const decryptSensitiveData = (encryptedData: string): string => {
	try {
	  return decodeURIComponent(escape(atob(encryptedData)));
	} catch {
	  throw new Error('Failed to decrypt data');
	}
  };
  return {
	getSecureToken,
	hasRequiredRole,
	encryptSensitiveData,
	decryptSensitiveData
  };
  ```

### 3.1.16 Linter Configuration

#### ESLint config: [eslint.config.js](/src/eslint.config.js)

``` js
module.exports = {
  extends: [
	'@tanstack/eslint-config-react',
	'@tanstack/eslint-config-query'
  ],
  rules: {
	'react-hooks/exhaustive-deps': 'error',
	'@typescript-eslint/no-unused-vars': 'error',
	'prefer-const': 'error',
	'no-console': ['warn', { allow: ['warn', 'error'] }],
	'react/prop-types': 'off' // We use TypeScript
  },
  ignorePatterns: ['dist/', 'node_modules/']
};
```
#### Prettier config: .prettierrc

``` json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true
}
```
### 3.1.17 Build and Deployment Pipelining

#### Vite config: [vite.config.ts](./src/vite.config.ts)

``` ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          auth: ['@auth0/auth0-react'],
          utils: ['axios', 'zustand']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
```

#### Enviroment files:

.env.development:
``` ts
VITE_API_URL=http://localhost:3001
VITE_AUTH0_DOMAIN=dev-dwut2n5nvuu4bl0n.us.auth0.com
VITE_AUTH0_CLIENT_ID=h5wipav5LmusIRE1kBUFUu4VNxbHTlD7
```

.env.production:
``` ts
VITE_API_URL=https://api.20mincoach.com
VITE_AUTH0_DOMAIN=prod-dwut2n5nvuu4bl0n.us.auth0.com
VITE_AUTH0_CLIENT_ID=prod-client-id-here
```
---
## 3.2 Practical Layer Separation - Developer Guidelines

### 3.2.1 How Developers Maintain Separation in Daily Work

#### File Organization Rules

src/:
   -  services/  -> only API calls & data transformation
   - hooks/      -> only state management & business logic
   - components/ -> only UI rendering & user interactions
   - models/      -> only models definitions
   - utils/      -> only pure helper functions
   - stores/     -> only global client state


#### Concrete Coding Rules Developers Follow in .ts:

 
#### 3.2 Communication Patterns and Data Flow

- No API Calls in Components like example:


		const CoachSearch = () => {
		  const [coaches, setCoaches] = useState([]);
		  
		  useEffect(() => {
		    axios.get('/api/coaches').then(setCoaches); 
		  }, []);
		}
  - API calls with service layer:
 
    
		const CoachSearch = () => {
	 	 const { data: coaches } = useCoachSearch(filters); 
		}										  


---

#### One responsability per file

- services/CoachService.ts -> only data operations:

		export class CoachService {
		  async searchCoaches(filters: CoachSearchFilters): Promise<Coach[]> {
		    const response = await apiClient.get('/coaches', { params: filters });
		    return this.transformCoachDTO(response.data); 
		  }
		}

- components/CoachSearch.tsx -> only UI:

		const CoachSearch = () => {
	  const { data: coaches } = useCoachSearch(filters); 
	  return coaches?.map(coach => <CoachCard coach={coach} />); 
		}


### 3.2.2  Real Development Workflow 

- Example: Adding Coach Rating

#### 1.Model: src/models/rating.ts
``` ts
export interface Rating {
  score: number;
  comment: string;
  userId: string;
  coachId: string;
}
```

#### 2. Service Method: src/services/ratingService.ts

``` ts
export class RatingService {
  async submitRating(rating: Rating): Promise<void> {
    return apiClient.post('/ratings', rating); 
  }
}
```

#### 3. Business Logic Hook: src/hooks/useRating.ts

``` ts
export const useRating = () => {
	const submitRating = useMutation({
	mutationFn: (rating: Rating) => ratingService.submitRating(rating)
	});
	return { submitRating }; 
}
```

#### 4.Build UI Component: src/components/RatingForm.tsx
``` tsx
const RatingForm = ({ coachId }) => {
	const { submitRating } = useRating();
	const [score, setScore] = useState(0);
	
	const handleSubmit = () => {
	submitRating({ score, comment: '', coachId, userId: '123' });
	};
	
	return (
	<div>
		<StarRating value={score} onChange={setScore} />
		<button onClick={handleSubmit}>Submit Rating</button>
	</div>
	);
}
```
### 3.2.3 Error Handling Pattern

 Not to do:
     - Error handling mixed with UI:


	const CoachSearch = () => {
	  try {
	    const coaches = await api.get('/coaches');
	  } catch (error) {
	    alert('Failed to load coaches');
	  }
	}

- Do like this, keep separated:

		  // services/CoachService.ts
		async searchCoaches(): Promise<Coach[]> {
		  const response = await apiClient.get('/coaches');
		  return response.data; // Throws error to caller
		}
		
		// hooks/useCoachSearch.ts  
		const useCoachSearch = () => {
		  return useQuery({
		    queryKey: ['coaches'],
		    queryFn: () => coachService.searchCoaches(),
		  }); // Error handled by React Query
		}
		
		// components/CoachSearch.tsx
		const CoachSearch = () => {
		  const { data: coaches, error } = useCoachSearch();
		  if (error) return <ErrorMessage message="Failed to load coaches" />;  //UI just display
		}


### 3.2.4 How to review code:

#### Verifiy that each pull request meets these conditions:

- No API calls in component files

- No UI rendering in service/hook files

- No business logic in component files

- Single responsibility per file

- Proper layer communication (Components → Hooks → Services)

- Type definitions separated in /models folder

- Pure functions in /utils without side effects

---

## Layer diagram


![Diagrama de layers](images/Darquitectura3.jpeg)






---

---

# 4 Visual Components Strategy (Atomic Design)


## 4.1 Component Organization Strategy 

The architecture is based on Atomic Design principles:

- **Atoms:** Basic UI elements (e.g., buttons, inputs, labels, icons)

- **Molecules:** Simple combinations of atoms that form functional components (e.g., input with label and icon)

- **Organisms:** Complex UI sections composed of molecules and/or atoms (e.g., a card with header, content, and action buttons)

- **Templates:** Page-level structures defining layout and placement of organisms

- **Pages:** Full screens that represent the final user interface
## 4.1.1 Technology-Driven Organization

- React + TypeScript: All will be function components with interfaces using strict TypeScript

- Tailwind CSS: Utility-first styling approach

- shadcn/ui: Base component library

## 4.1.2 Separation of Concerns

- **Atoms:** Purely visual, smallest building blocks

- **Molecules:** Combine atoms, handle small interactions

- **Organisms:** Combine molecules and atoms, may handle minor logic

- **Templates:** Arrange organisms in a layout

- **Pages:** Complete screens using templates
## 4.1.3 Scalability Approach

- Shared architecture: Components structured for reuse across multiple screens

- Progressive complexity: Start simple, increase complexity as needed

- Documentation: Each component folder must include usage examples

## 4.1.4 Organizational Principles:

- Single Responsibility: Each component performs one task

- Composition over Inheritance: Build complex components by combining simple ones

- Prop-Based Customization: Configure components through props, not CSS overrides


## 4.1.5 Folder Structure Strategy:

``` bash
src/components/
		atoms/       # Smallest, reusable UI elements
		molecules/   # Combinations of atoms
		organisms/   # Complex components combining molecules and atoms
		templates/   # Page-level layout structures
	pages/       # Full pages representing screens

```


   
## 4.2 Reusable Component Structure

Components are stored according to hierarchy:

- #### src/components/[atoms](./src/components/atoms/)/
- #### src/components/[molecules](./src/components/molecules/)/
- #### src/components/[organisms](./src/components/organisms/)/
- #### src/components/[templates](./src/components/templates/)/
- #### src/[pages](./src/pages/)/

Shared components used by multiple higher-level components should live in the lowest common folder in the hierarchy.

## 4.3 Component Development Workflow


### 4.3.1 Planning & Analysis
#### 4.3.1.1 Determine Component Level

Atom, Molecule, Organism, Template, Page

#### 4.3.1.2 Define the purpose for the component

- Explain briefly what the component does

- List all the information it needs to receive

- Identify which existing components it will use inside it

#### Step 4.3.1.3 Check Existing Components

- Look in the component library to see if something similar already exists

- Reuse existing atoms/molecules whenever possible

### 4.3.2 Implementation
#### 4.3.2.1 Create Folder & Files

Main component, test file, export file, and documentation

#### 4.3.2.2 Define Component Interface

-  Specify exactly what data the component expects to receive

-  Include accessibility requirements

#### 4.3.2.3 Build the Component

- Use Tailwind CSS classes for styling according to the design system

- The focus must be one main responsibility for the component

- If possible, compose it from smaller components

#### 4.3.2.4 Set Up Exports

Configure the export file for other components to use it

### 4.3.3 Integration & Review
#### 4.3.3.1 Use in Application

- Import the component where it's needed

- Test it in different real-world scenarios

#### 4.3.3.2 Submit for Review

- Create a pull request with the new component

- Include: the component code, tests, documentation, and screenshots

- Pending for team review revision

### 4.3.4 Special Cases
 #### 4.3.4.1 For Business Logic in Components:

- Minimal logic in organisms, separate hooks/services for data handling

- Keep the display component clean and focused on UI

#### 4.3.4.2 For Complex Components:

- Break into sub-components (atoms → molecules → organisms)

- Each sub-component follows the same workflow

 
