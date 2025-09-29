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

## 1.1 Frontend Source Code

- The repository includes the complete `src/` folder with the full project structure, including the source code created for the prototype.
- All Proof of Concepts (PoCs) and requested classes are stored inside the `src/` folder.
- All files, templates, and source code provided as guidance are placed in the appropriate layer folder where they are used in the final implementation.
## 1.2 Prototype
The prototype was created using the AI-based tool [Lovable](https://lovable.dev/)

Two main screens were created as part of the prototype:

### 1.2.1 Coach Search Screen ([CoachSearch.tsx](./src/src/pages/CoachSearch.tsx))

- Allows users to enter their coaching needs via a search input or voice.
- Displays popular coaching categories for quick selection.
- Shows a premium benefits button if the user has the permission.

<br>

![Coach Search](./images/CoachSearch.png)

### 1.2.2 Coach Results Screen ([CoachResults.tsx](./src/src/pages/CoachResults.tsx))

- Displays information for a single coach at a time.
- Allows the user to request a session with the displayed coach.
- Allows the user to move to the next coach in the search results.

<br>

![Coach Results](./images/CoachResults.png)

Both screens follow the selected frontend technologies (React, TypeScript, Tailwind, shadcn/ui) and were used for a UX test.

## 1.3 UX Testing
The UX test was performed using [Maze](https://maze.co/), utilizing a Figma prototype of the screens created.

Link to perform the test: https://t.maze.co/445485876?guerilla=true

Test participants:
- Diego: 26 years old, Paint mixer - [Link to video evidence](https://app.maze.co/report/reels/480a7062-5775-4af1-a430-ddc70870c95c)
- Liseth: 40 years old, Preschool director - [Link to video evidence](https://app.maze.co/report/reels/961175cc-066d-4266-87ef-2de88dcd877d)
- Luz: 58 years old, Cashier - [Link to video evidence](https://app.maze.co/report/reels/798064af-8896-40f8-a9f0-ec3aca15cb7f)
- Didier: 61 years old, Independent vendor - [Link to video evidence](https://app.maze.co/report/reels/1d7e83d8-f944-4729-b7de-3fbdd2d9901d)

Two main tasks were defined for participants:

### 1.3.1 Task #1: "Haz clic en el campo de búsqueda (el que dice “Describe qué necesitas y en qué te podemos ayudar...”)"
Description: "Estás en la página principal. El primer paso es buscar qué tipo de ayuda necesitas."
#### Heatmap showing user interactions during Task #1
![Heatmap Task 1](./images/heatmaptask1.jpg)

#### Key metrics from Task #1
![Metrics Task 1](./images/metricstask1.png)

### 1.3.2 Task #2: "Haz clic en el botón “Solicitar sesión” del coach mostrado en el resultado."
Description: "Imagina que encontraste un coach que te interesa y quieres iniciar una sesión con él."
#### Heatmap showing user interactions during Task #2
![Heatmap Task 2](./images/heatmaptask2.jpg)
#### Key metrics from Task #2
![Metrics Task 2](./images/metricstask2.png)

## 1.4 uthentication & Authorization
A login screen was implemented, using [Auth0](https://auth0.com/) as the authentication and authorization provider.

![Login](./images/login.png)

### 1.4.1 How to Create an Application in Auth0
1.4.1.1 Log in to the **Auth0 Dashboard**.

1.4.1.2 Create a new **Single Page Application (SPA)**.

1.4.1.3 Configure the **Allowed Callback URLs** and **Logout URLs** to point to the local environment and deployed app.

<br>

To Configure the Allowed Callback URLs go to the **Auth0 Dashboard** → **Applications** → **Applications**, select your newly created application and open the **Settings** tab.

![URL Callback](./images/urlcallbacks.png)

### 1.4.2 Roles & Permissions
Two actions from the prototype screens were assigned to role-based permissions. In the **Auth0 Management Console**, the following roles were set up:

![Roles](./images/roles.png)

**basicUser:** Allowed to perform only read: content.

![Basic Rol](./images/basicrol.png)

**premiumUser:** Allowed to perform both read: content and read: premium_content.

![Premium Rol](./images/premiumrol.png)

### 1.4.3 How to Create a Role

1.4.3.1 Go to the **Auth0 Dashboard** → **User Management** → **Roles**.

1.4.3.2 Click **+ Create Role**.

1.4.3.3 Enter Name, Description and click Create.

1.4.3.4 Assign permissions.
    - Select your newly created Role and open the Permissions tab. 
    - Click Add Permissions.

1.4.3.5 Assign users to the role.

### 1.4.4 How to Create an API
1.4.4.1 Go to the **Auth0 Dashboard** → **Applications** → **APIs**.

1.4.4.2 Click **+ Create API**.

1.4.4.3 Enter: 
      - **Name** → e.g., `20MinCoachUsersAPI` 
      - **Identifier** → a unique URI, e.g., `https://twenty-min-connect.lovable.app/users`. This value will be used as the **audience** parameter on authorization calls
      - **Signing Algorithm** → leave as **RS256**
1.4.4.4 Click **Create**.

1.4.4.5 Select your newly created API and open the Settings tab.
      - **Enable RBAC**
      - **Enable Add Permissions in the Access Token**

### 1.4.3 How to Create a Permission
1.4.5.1 Go to the **Auth0 Dashboard** → **Applications** → **APIs**.

1.4.5.2 Select your API, then open the **Permissions** tab.

1.4.5.3 Enter: 
      - **Permission** → e.g., `read: appointments` 
      - **Description** → e.g., `Read your appointments`
1.4.5.4 Click **+ Add**.

### 1.4.6 How to Customize the Login
1.4.6.1 Go to the **Auth0 Dashboard** → **Branding** → **Universal Login**.

1.4.6.2 Options to customize:
    - **Logo and Background** → upload your app logo and set background image or color.
    - **Primary Colors** → set theme colors to match your app.
    - **Custom Text** → modify headings, placeholders, and button text.

1.4.6.3 Save the changes.

#### 1.4.7 How to Change Default Language
1.4.7.1 Go to the **Auth0 Dashboard** → **Settings**

1.4.7.2 Open the **General** tab.

1.4.7.3 Scroll down to the **Languages** section.

1.4.7.4 Select your desired **default language**.

1.4.7.5 Save the changes.

### 1.4.8 How to Enable Two-Factor Authentication
1.4.8.1 Go to the **Auth0 Dashboard** → **Security** → **Multi-factor Auth**.

1.4.8.2 Choose the factors to enable.

![MFA](./images/mfa.png)

1.4.8.3 Define policies.

![MFA2](./images/mfa2.png)

1.4.8.4 Save the changes.

1.4.8.5 Test by logging in with a user account to verify that MFA is prompted.

![MFA screen](./images/mfascreen.png)

**Note:** After performing the tests, **MFA was disabled** to simplify login and sign-up for users who want to test the prototype.

You can test the authentication and prototype using the following link: https://twenty-min-connect.lovable.app/

### 1.4.9 How to Integrate Auth0 in React

1.4.9.1 Create an auth0Config file ([auth.ts](./src/src/lib/auth.ts)) with your credentials:

``` ts
const domain = w.__AUTH0_DOMAIN__ || localStorage.getItem("auth0Domain") || "dev-dwut2n5nvuu4bl0n.us.auth0.com";
const clientId = w.__AUTH0_CLIENT_ID__ || localStorage.getItem("auth0ClientId") || "h5wipav5LmusIRE1kBUFUu4VNxbHTlD7";
const audience = w.__AUTH0_AUDIENCE__ || localStorage.getItem("auth0Audience") || "https://twenty-min-connect.lovable.app/users";
```
  - **Domain** and **Client ID** are provided by Auth0 when you create your application.
- **Audience** refers to the API you created in Auth0 and is used to request access tokens for that API.

  To find your **Domain** and **Client ID** in Auth0: Go to the **Auth0 Dashboard** → **Applications** → **Applications**, Select your application and Open the **Settings** tab.

![Auth Domain](./images/authdomain.png)

1.4.9.2 Wrap your app with `Auth0Provider` in [App.tsx](./src/src/App.tsx):

``` tsx
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
    <App />
  </Auth0Provider>
);
```

1.4.9.3 Use the **Auth0 hooks** (like [usePermissions.ts](./src/src/hooks/usePermissions.ts)) to manage authentication in your components:

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

1.4.9.4 Protect routes or components using authentication state:

``` ts
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <p>Please log in.</p>;
  return <div>Welcome, {user.name}</div>;
};
```

### 1.4.10 Testing the Authentication & Authorization Implementation

Test users were created and assigned to the corresponding roles.

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
For this project we apply **unit testing** as the main testing approach. Focusing on testing small, isolated units of code (components, hooks, and utilities).

### 1.5.2 Technology
- **Jest:** As the test runner and assertion library.
- **React Testing Library:** For React component testing.
- **ts-jest:** To integrate Jest with TypeScript.

### 1.5.3 Implemented Tests

Three unit tests were implemented across two different classes/modules:

#### 1.5.3.1 ProtectedRoute component 
See the full test implementation here: [ProtectedRoute.test.tsx](./src/src/__tests__/ProtectedRoute.test.tsx)
- Validates loading state (isLoading).
- Validates unauthenticated state (redirect to login).
- Validates authenticated state (renders children).

#### 1.5.3.2 Auth configuration and utilities
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

### 1.5.4 Example of Test Results
#### Passing test:
![Passing test](./images/test1.png)
#### Failing test:
When expected default audience was missing, the test failed (Expected: ... Received: undefined), shows how Jest reports mismatches.
<br>

![Failing test](./images/test2.png)

### 1.5.5 How to Add New Unit Tests
1.5.5.1 **Create a new test file** inside `src/__tests__/` with the suffix `.test.ts` or `.test.tsx`.  

1.5.5.2 **Import the module/component** to test.

1.5.5.3 **Write tests** using Jest’s `test` or `it` blocks, and `expect` assertions.
```tsx
import { myFunction } from "../lib/myModule";

test("returns correct value", () => {
  expect(myFunction(2, 3)).toBe(5);
});
```
1.5.5.4 Run tests with:
``` bash
npm test    # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```




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
Technology Selection & Justification 
1. Frontend Framework & Architecture
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





## 2. Application Architecture
 ### 2.2 Vite Setup & Configuration
 - For dev server + bundler to run/build the React SPA quickly.
How to set up the development environment:

How to install:


	npm create vite@latest 20mincoach 
	cd 20mincoach
	npm install


How to run:

	npm run dev

	
#### Vital files:

vite.config.ts -> Main build configuration

tsconfig.json --> TypeScript rules

index.html --> Entry point (single HTML file)

### What developers need to know:

- Npm run build creates files in /dist folder

#### Adding environment variables: Create .env files:

.env.development - For local development

.env.production - For live app

### Routing file structure:


	src/
	  pages/
	    Home.tsx
	    CoachSearch.tsx
	    VideoCall.tsx
	    Profile.tsx


## 2.3 State Management Implementation
### 2.3.1 Server State with React Query
 - For fetch, cache, and update server/API data.

#### Setup:


	npm install @tanstack/react-query


#### Configuration file: queryClient.ts


	import { QueryClient } from '@tanstack/react-query';
	
	export const queryClient = new QueryClient({
	  defaultOptions: {
	    queries: {
	      staleTime: 5 * 3, 
	      retry: 2,
	    },
	  },
	});


#### How to use in components:


- src/hooks/useCoaches.ts:

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


### 2.3.2 Client State with Zustand
 - For simple global state for UI
Setup:


		npm install zustand

#### Example:	
- Store examples: src/stores/

- Theme store: src/stores/themeStore.ts


		import { create } from 'zustand';
		
		interface ThemeState {
		  isDark: boolean;
		  toggleTheme: () => void;
		}
		
		export const useThemeStore = create<ThemeState>((set) => ({
		  isDark: false,
		  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
		}));


#### User session store: src/stores/sessionStore.ts


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

	
#### Usage in components:


	const { isDark, toggleTheme } = useThemeStore();
	const { user, setUser } = useSessionStore();


## 2.4 Real-Time Communication Setup
### Socket.IO for Notifications
#### Installation:


	npm install socket.io-client


## Configuration: src/services/socketService.ts


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


### PeerJS for Video Calls
#### Installation:


	npm install peerjs


#### Video call setup: src/services/videoService.ts


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

	
## 2.5 Authentication Implementation
 - For user authentication, roles, and multi-factor login.
### Auth0 Setup:


#### Installation:


	npm install @auth0/auth0-react

#### Main configuration: src/main.tsx:



	import { Auth0Provider } from '@auth0/auth0-react';
	
	ReactDOM.render(
	  <Auth0Provider
	    domain="dev-dwut2n5nvuu4bl0n.us.auth0.com"
	    clientId="h5wipav5LmusIRE1kBUFUu4VNxbHTlD7"
	    authorizationParams={{
	      redirect_uri: window.location.origin,
	      audience: "https://twenty-min-connect.lovable.app/users"
	    }}
	    cacheLocation="localstorage"
	  >
	    <App />
	  </Auth0Provider>,
	  document.getElementById('root')
	);

	
#### Using Auth0 in components: src/components/LoginButton.tsx


	import { useAuth0 } from '@auth0/auth0-react';
	
	export const LoginButton = () => {
	  const { loginWithRedirect, isAuthenticated } = useAuth0();
	  
	  if (isAuthenticated) return null;
	  
	  return (
	    <button onClick={() => loginWithRedirect()}>
	      Sign In
	    </button>
	  );
	};
#### Protecting routes: src/components/ProtectedRoute.tsx


	import { withAuthenticationRequired } from '@auth0/auth0-react';
	
	const ProtectedRoute = ({ component }: { component: ComponentType }) => {
	  const Component = withAuthenticationRequired(component, {
	    onRedirecting: () => <div>Loading...</div>,
	  });
	  
	  return <Component />;
	};
	
## 2.6 Styling Implementation
### Tailwind CSS Setup
 - For utility-first CSS for fast, consistent styling.
### Configuration file: tailwind.config.js


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

	
#### Main CSS file: src/index.css


	@tailwind base;
	@tailwind components;
	@tailwind utilities;


#### shadcn/ui Components
 - For ready-made React components styled with Tailwind.
#### Installation and setup:


	npx shadcn-ui@latest init
	npx shadcn-ui@latest add button card input

#### Using components:


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

	
## 2.7 Development Tools
### ESLint & Prettier Setup
 - ESLint – For linting to catch errors and enforce code rules.

 - Prettier – For automatic code formatting for consistent style.
#### Configuration files:

	.eslintrc.cjs - Linting rules
	
	.prettierrc - Code formatting rules

#### ESLint rules example:


	module.exports = {
	  rules: {
	    'react-hooks/exhaustive-deps': 'error',
	    '@typescript-eslint/no-unused-vars': 'error',
	    'prefer-const': 'error'
	  }
	};
#### Package.json scripts:


	{
	  "scripts": {
	    "lint": "eslint src --ext .ts,.tsx",
	    "lint:fix": "eslint src --ext .ts,.tsx --fix",
	    "format": "prettier --write src/"
	  }
	}
	
#### VS Code setup: Create .vscode/settings.json


	{
	  "editor.codeActionsOnSave": {
	    "source.fixAll.eslint": true
	  },
	  "editor.formatOnSave": true
	}


---

# 3 N-Layer Architecture Design





# 3 N-Layer Architecture Design





## 3.1 Detailed Layer Design



### 3.1.1 Models


 - Location: scr/types/
 
 ### Example:
 
 ####  src/types/user.ts:
  
	  export interface User {
	  id: string;
	  email: string;
	  name: string;
	  role: 'basic' | 'premium';
	  credits: number;
	}

	export type UserRole = 'basic' | 'premium';

#### src/types/coach.ts


	export interface Coach {
	  id: string;
	  name: string;
	  specialty: string;
	  rating: number;
	  available: boolean;
	}

	export interface CoachSearchFilters {
	  specialty?: string;
	  minRating?: number;
	}

#### src/types/api.ts
- Data from backend API:



	export interface CoachDTO {
	  id: string;
	  user_name: string;
	  specialty_area: string;
	  average_rating: number;
	  is_available: boolean;
	}


 -Data to sent to API:

	export interface SessionRequestDTO {
	  coach_id: string;
	  user_id: string;
	}
	
#### src/types/index.ts

	export * from './user';
	export * from './coach';
	export * from './api';


#### Usage example:

	import type { Coach, User } from '../types';

	const MyComponent = ({ coach }: { coach: Coach }) => {
	  
	}


### 3.1.2 API Client Layer

Location: src/lip/api/

#### src/lib/api/client.ts

	import axios from 'axios';

	const apiClient = axios.create({
	  baseURL: import.meta.env.VITE_API_URL,
	  timeout: 10000,
	});

   - Add auth token automatically
   
	   apiClient.interceptors.request.use((config) => {
	  const token = localStorage.getItem('auth_token');
	  if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	  }
	  return config;
	});
	
	- Handle common errors:
	
		apiClient.interceptors.response.use(
	  (response) => response,
	  (error) => {
		if (error.response?.status === 401) {
		  window.location.href = '/login';
		}
		return Promise.reject(error);
	  }
	);

	export default apiClient;


### 3.1.3 Services Layer

Location: src/services/

#### src/services/CoachService.ts

	import apiClient from '../lib/api/client';
	import type { Coach, CoachSearchFilters } from '../types';
	import type { CoachDTO } from '../types/api';

	export class CoachService {
	  async searchCoaches(filters: CoachSearchFilters): Promise<Coach[]> {
		const response = await apiClient.get('/coaches', { params: filters });
		return response.data.map((dto: CoachDTO) => ({
		  id: dto.id,
		  name: dto.user_name,
		  specialty: dto.specialty_area,
		  rating: dto.average_rating,
		  available: dto.is_available,
		}));
	  }

	  async requestSession(coachId: string): Promise<void> {
		await apiClient.post('/sessions/request', { coach_id: coachId });
	  }
	}

	export const coachService = new CoachService();
	
	
#### src/services/sessionService.ts

	import apiClient from '../lib/api/client';

	export const sessionService = {
	  async startVideoCall(sessionId: string): Promise<string> {
		const response = await apiClient.post(`/sessions/${sessionId}/start-call`);
		return response.data.peerId;
	  },
	  
	  async endSession(sessionId: string): Promise<void> {
		await apiClient.post(`/sessions/${sessionId}/end`);
	  }
	};
	


### 3.1.4 State Layer


Location:  
      - src/stores/  -> Zustand
	 

#### src/stores/themeStore.ts

	import { create } from 'zustand';

	interface ThemeState {
	  isDark: boolean;
	  toggleTheme: () => void;
	}

	export const useThemeStore = create<ThemeState>((set) => ({
	  isDark: false,
	  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
	}));
	
#### src/stores/sessionStore.ts

	import { create } from 'zustand';
	import type { Coach } from '../types';

	interface SessionState {
	  currentCoach: Coach | null;
	  setCurrentCoach: (coach: Coach) => void;
	}

	export const useSessionStore = create<SessionState>((set) => ({
	  currentCoach: null,
	  setCurrentCoach: (coach) => set({ currentCoach: coach }),
	}));


### 3.1.5 Controller Layer

 - src/hooks/   -> React Query

#### src/hooks/useCoachSearch.ts

	import { useQuery } from '@tanstack/react-query';
	import { coachService } from '../services/coachService';
	import type { CoachSearchFilters } from '../types';

	export const useCoachSearch = (filters: CoachSearchFilters) => {
	  return useQuery({
		queryKey: ['coaches', filters],
		queryFn: () => coachService.searchCoaches(filters),
	  });
	};
	
#### src/hooks/useSessionManager.ts

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

 
### 3.1.6 Presentation Layer

Location: src/components/ and src/pages/

#### src/components/CoachCard.tsx

	import type { Coach } from '../types';

	interface CoachCardProps {
	  coach: Coach;
	  onSelect: (coach: Coach) => void;
	}

	export const CoachCard: React.FC<CoachCardProps> = ({ coach, onSelect }) => {
	  return (
		<div className="border p-4 rounded-lg">
		  <h3 className="font-bold">{coach.name}</h3>
		  <p>{coach.specialty}</p>
		  <button 
			onClick={() => onSelect(coach)}
			className="bg-blue-500 text-white px-4 py-2 rounded"
		  >
			Select Coach
		  </button>
		</div>
	  );
	};
	
#### src/pages/CoachSearch.tsx

	import { useState } from 'react';
	import { useCoachSearch } from '../hooks/useCoachSearch';
	import { CoachCard } from '../components/CoachCard';
	import { useSessionStore } from '../stores/sessionStore';

	export const CoachSearch: React.FC = () => {
	  const [specialty, setSpecialty] = useState('');
	  const { data: coaches, isLoading } = useCoachSearch({ specialty });
	  const { setCurrentCoach } = useSessionStore();

	  return (
		<div className="p-4">
		  <input
			type="text"
			placeholder="Search coaches..."
			value={specialty}
			onChange={(e) => setSpecialty(e.target.value)}
			className="border p-2 rounded w-full mb-4"
		  />
		  
		  {isLoading && <div>Loading...</div>}
		  
		  <div className="space-y-4">
			{coaches?.map((coach) => (
			  <CoachCard 
				key={coach.id} 
				coach={coach}
				onSelect={setCurrentCoach}
			  />
			))}
		  </div>
		</div>
	  );
	};


### 3.1.7 Middleware

Location: src/middleware/

#### src/middleware/authMiddleware.ts

	import { useAuth } from '../hooks/useAuth';

	export const usePermissionMiddleware = () => {
	  const { hasPermission } = useAuth();

	  const checkPermission = (permission: string): boolean => {
		return hasPermission(permission);
	  };

	  return { checkPermission };
	};
	
#### src/middleware/errorMiddleware.ts

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

#### src/middleware/logMiddleware.ts

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


### 3.1.8 Business

Location: src/business/

#### src/buisness/sessionCoordiantor.ts

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


#### src/business/coachMatcher.ts

	import type { Coach, CoachSearchFilters } from '../types';

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

### 3.1.9 Listeners

Location: src/listeners/

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
	
#### src/listeners/errorListeners.ts

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

### 3.1.10  Validators

Location: src/validators/

#### src/validators/permissionValidator.ts

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
	
#### src/validators/inputValidator.ts

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
	
#### src/validators/connectionValidator.ts

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

### 3.1.11 Styles


Location: src/styles/

#### src/styles/themeManager.ts


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
	
#### Update Tailwind config: tailwind.config.js

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
	
#### Add to main CSS: src/index.css

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


### 3.1.12 Utilities

Location: src/utils/

#### src/utils/dateUtils.ts

	export const formatSessionTime = (date: Date): string => {
	  return date.toLocaleTimeString('en-US', { 
		hour: '2-digit', 
		minute: '2-digit' 
	  });
	};

	export const getSessionEndTime = (startTime: Date): Date => {
	  return new Date(startTime.getTime() + 20 * 60000); // 20 minutes
	};
	
	
#### src/utils/validation.ts

	export const isValidEmail = (email: string): boolean => {
	  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	
	export const isValidPassword = (password: string): boolean => {
	  return password.length >= 8;
	};

### 3.1.13 Exception Handling

#### src/error/exceptionHandler.ts

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


#### src/utils/mathUtils.ts

	export const calculateSessionCost = (baseRate: number, duration: number = 20): number => {
	  const hourlyRate = baseRate;
	  const minuteRate = hourlyRate / 60;
	  return Math.round(minuteRate * duration * 100) / 100; // Round to 2 decimal places
	};
	
	export const calculateCoachEarnings = (
	  sessionRate: number, 
	  platformFee: number = 0.2 // 20% platform fee
	): { coachEarnings: number; platformFee: number } => {
	  const platformFeeAmount = sessionRate * platformFee;
	  const coachEarnings = sessionRate - platformFeeAmount;
	  
	  return {
	    coachEarnings: Math.round(coachEarnings * 100) / 100,
	    platformFee: Math.round(platformFeeAmount * 100) / 100
	  };
	};
	
	export const calculateAverageRating = (ratings: number[]): number => {
	  if (ratings.length === 0) return 0;
	  
	  const sum = ratings.reduce((total, rating) => total + rating, 0);
	  return Math.round((sum / ratings.length) * 10) / 10; // Round to 1 decimal
	};
	
	export const calculateDiscount = (
	  originalPrice: number, 
	  discountPercentage: number
	): number => {
	  const discountAmount = originalPrice * (discountPercentage / 100);
	  return Math.round(discountAmount * 100) / 100;
	};

### 3.1.14 Logging

#### src/logging/logger.ts

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

### 3.1.15 Security

#### src/security/authManager.ts

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
};


### 3.1.16 Linter Configuration

#### ESLint config: .eslintrc.cjs

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

#### Prettier config: .prettierrc

	{
	  "semi": true,
	  "singleQuote": true,
	  "tabWidth": 2,
	  "trailingComma": "es5",
	  "printWidth": 100,
	  "bracketSpacing": true
	}

### 3.1.17 Build and Deployment Pipelining

#### Vite config: vite.config.ts

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

#### Enviroment files:

.env.development:

	VITE_API_URL=http://localhost:3001
	VITE_AUTH0_DOMAIN=dev-dwut2n5nvuu4bl0n.us.auth0.com
	VITE_AUTH0_CLIENT_ID=h5wipav5LmusIRE1kBUFUu4VNxbHTlD7
	
.env.production:

	VITE_API_URL=https://api.20mincoach.com
	VITE_AUTH0_DOMAIN=prod-dwut2n5nvuu4bl0n.us.auth0.com
	VITE_AUTH0_CLIENT_ID=prod-client-id-here

---

## 3.2 Communication Patterns and Data Flow



![Diagrama de layers](images/Darquitectura3.jpeg)


---

## 3.3 Separation of Concerns & Maintainability Rationale

This architecture was chosen explicitly to achieve the following goals:
 - Testability: Each layer can be tested in isolation.
 - Services/API Client: Can be tested with unit tests mocking network requests.
 - Controller Hooks: Can be tested with React Testing Library by mocking the State and Services layers.
 - Presentation: Can be tested with visual snapshot tests or component tests with mocked props.
 - Replaceability: External technologies can be swapped with minimal impact.

---

---

# 4 Visual Components Strategy


## 4.1 Component Organization Strategy 

For the core strategy, combine:

 - Atomic Design (tecnical consistency)

 - Domain-Driven Design (business alignment)

Strategic Decisions:

 - Component Architecture

 - Foundation Layer: Primitive UI components  - buttons, inputs, labels

 - Layout Layer: Structural components that arrange content - headers, grids

 - Domain Layer: Heart of the architecture, business components that combine primitives with business logic

 - Page Layer: Top-level components representing full screens

## 4.1.1 Technology-Driven Organization

- React + TypeScript: All will be function components with interfaces using strict TypeScript

- Tailwind CSS: Utility-first styling approach

- shadcn/ui: Base component library

## 4.1.2 Separation of Concerns

- Presentational Components: Only handle appearance (in ui/ folder)

- Container Components: That handle business logic and data (in domain/ folder)

- Layout Components: Structural components (in layout/ folder)

## 4.1.3 Scalability Approach

- Shared code architecture: Components organized in a way that could be extracted to a separate package

- Progressive: Start simple, add complexity only when needed

- Documentation: Each component folder must include usage examples

## 4.1.4 Organizational Principles:

- Single Responsibility: Each component should do one thing well

- Composition over Inheritance: Build complex components by combining simple ones

- Prop-Based Customization: Configure components through props, not CSS overrides


## 4.1.4 Folder Structure Strategy:


	src/components/
		 ui/           # Presentational components
		 layout/       # Layout  components
		 domain/       # Container components
		 pages/        # Page-level compositions

- This high-level strategy ensures that our component architecture is:

- Scalable, maintainable and consistent.

   
## 4.2 Reusable Component Structure

In order to achieve reusability on the project’s own library structure, the component files and construction must follow the next structure, bigger and more complex components mainly being composed of more detailed or atomic components:

### 4.2.1 Key definitions for the structure:
 - Responsibilities: A responsibility is considered a group of functions, properties, logic or styling that focus on a single specific objective. Major responsibilities are responsibilities that cannot form other responsibilities, but can be grouped together. Minor responsibilities are those that cannot be divided into smaller responsibilities. This concept may be subjective at first, but the closer a responsibility matches those definitions, the more correct it is.

 - Component: A component is a piece of software that fulfills a single responsibility.

 - Composing: A component composes another one if an instance of the composing component is being created, stored and handled within the composed component. Calls, hook connections, imports, or stored references by themselves are not considered composing.

 - Module: A module is a special type of component that fulfills a major responsibility. For example, the logging layer has the logger handler and specialized individual loggers as modules, for their major responsibilities are handling log requests and creating logs respectively (even though both are related to logs, each of them focuses on different specific objectives).

 - Terminal components: A component is terminal if it is not composed of any other component. Terminal components only can have minor responsibilities.

 - Category: The category is an indicator of the level of hierarchy of a component. The category value is equal to the amount of times it is directly or indirectly composing another component. For example, modules are category 0, components for any module are category 1 and further subcomponents will have even greater category values and are considered subcomponents.

### 4.2.2 Structure Organization

 - React components must have a prop-driven design.

 - Tailwind components must be utility-first classes.

 - On the src folder, there has to be a package for each layer. Inside those packages, more packages will be created for each module. For each module, there will be packages for each component that compose the module, and those may also have their own subpackages for higher category components in order to achieve proper separation of concerns. The resulting format for folders, hierarchy and construction would be src/layer/module/category1_component/category2_subcomponents/…

 - If a component would compose two or more components, they must be placed within a package located at the same category level as the composed components and named <parent_package>_components. For example, if component3 composes …/package/component1 and …/package/component2, it would be located as …/package/package_components/component3.
   - Additionally, if a component would compose two or more components from distinct layers, it would be assigned to src/utility/components instead.

 - If a terminal component would fulfill a responsibility that is not minor, it has to be composed of components that fulfill the division of such responsibility instead.

 - All components should strongly consider:
   - Use of design patterns
   - Abstraction
   - Clear documentation
   - General ways to access their responsibilities (as with generics or encapsulated methods)
   - Configurable behaviour or appearance (if used on more than one scenario or at least mildly complex)
   - Easy to understand implementation

   




## 4.3 Component Development Workflow


### 4.3.1 Planning & Analysis
#### 4.3.1.1 Determine Component Type

Decide the component type: Is this basic UI , a layout, or  business?

Choose the correct folder: 

	ui/     ->  reusable basics 
	domain/ ->  business logic
	layout/ ->  structure

#### 4.3.1.2 Define the purpose for the component

- Explain briefly what the component does

- List all the information it needs to receive

- Identify which existing components it will use inside it

#### Step 4.3.1.3 Check Existing Components

- Look in the component library to see if something similar already exists

- If there is something similar, note what needs to be customized

### 4.3.2 Implementation
#### 4.3.2.1 Create Folder Structure

- Create a new folder with the component name

- Create these files inside: the main component, test,export, and documentation.

#### 4.3.2.2 Define Component Interface

-  Specify exactly what data the component expects to receive

-  Include accessibility requirements

#### 4.3.2.3 Build the Component

- Use Tailwind CSS classes for styling according to the design system

- The focus must be one main responsibility for the component

- If possible, compose it from smaller components

#### 4.3.2.4 Set Up Exports

Configure the export file for other components to use it

### 4.3.3 Testing & Quality
#### 4.3.3.1 Write Tests

- Create tests that simulate users using the component

- Test different variations, different steps

- Verify that it works correctly

#### 4.3.3.2 Run Quality Checks

- Verify TypeScript types are correct

- Run the tests to make sure they pass

- Check that the code follows the style guidelines

- Confirm the component builds successfully

### 4.3.4 Integration & Review
#### 4.3.4.1 Use in Application

- Import the component where it's needed

- Test it in different real-world scenarios

#### 4.3.4.2 Submit for Review

- Create a pull request with the new component

- Include: the component code, tests, documentation, and screenshots

- Pending for team review revision

### 4.3.5 Special Cases
 #### 4.3.5.1 For Business Logic Components:

- Create a separate hook to handle data and logic

- Keep the display component clean and focused on UI

#### 4.3.5.2 For Complex Components:

- Break into smaller sub-components

- Each sub-component follows the same workflow

   
## 4.4 Component testing methodology

Testing must be performed on all components, once implemented, until needed quality is reached. The set of steps for testing varies for different components, further below are those sets that rely on the type of component.
Take into account that the component’s functionality, appearance or dependencies may vary from different browsers or devices. All steps must be performed at least once on one device and browser compatible with the component. Also all steps that may be affected by such variation must be tested for all target browsers and devices.
After any step or test, the information of each must be reported on the designated space for the testing process in the project backlog. If use cases were also tested, update their data on the use case repository.

### 4.4.1 Format:
#### 4.4.1.1 Step:
	<Step_performed>
	<Date_of_test>. Performed by <tester_name>
    
	Contextual information:
		(Here goes the information of the device/s and browser/s used, any external factors or relevant configuration on these must be pointed out)
        
	Process:
		(Here goes a detailed description of how the step was tested, including any observations and middle steps).
        
	Result:
		(Here goes a conclusion over the state of the component, including how well it fulfills its responsibility, how well it is integrated into the system and needed or potential changes)

#### 4.4.1.2 Test:
    <Component_name>, <component hierarchy> [the hierarchy, as for example, layer/module/component]. Test No°<number_of_test_over_the_component>
    From <Start_date_of_test> to <Ending_date_of_test>.
    
    Testers:
        List of tester names

	<list of steps>

	Summary:
		(Here goes a summary of all conclusions)

### 4.4.2 Steps to perform:
#### 4.4.2.1 Visual components:

These steps must be helped by the use of Jest and React Testing Library. Cypress is preferably used for testing the components on the full web app. Snapshots may be used for testing components, be sure to follow the test isolation principle.

   1. Revise functionality
       - Test colocation on corresponding interface: Is it shown in the expected position? Is it shown when expected? Does its colocation follow design after interactions, visual updates or processes? Do screen readers access it as expected?
       - If it has available interactions, test all of them based on their responsibility: Do interactions behave as expected? Do they work with different control devices (touch, mice, keyboards)? Do they work the amount of time they should? Do they keep working after interactions, visual updates or processes?
       - If it needs code to be executed on another layer, make sure that code is already tested and working as intended, then check whether it is being called properly and receiving the correct data: Is the data sent to the controller correct? Is the data received from the controller correct? Is the data being handled as expected on the component?
   3. Revise appearance
       - Confirm its appearance matches the component visual design: Does it render as on the design? Does it stay visually matching after interactions, visual updates or processes?
       - Test if different styles compatible with the system work as intended over the component: Does the shown style match the style applied? Does the component behave functionally the same with the different style?

#### 4.4.2.2 Model components:

   - Internal functions: Do functions over data fulfill their design? Are all expected functions implemented? Do they execute their purpose accordingly?
   - Data types: Does data have the correct data types? Does it include all expected data?
   - Data format: Is data being stored as the expected format? Is data being organized according to design?
   - Access methods: Are access methods working as expected? Are all expected methods implemented?
   - 
#### 4.4.2.3 Other components:

   - Execution: Do its processes, logic and behaviour work as expected? Do they receive and return intended values? Are they stable? Does its construction follow design?
   - Data: If it holds or creates data, does it use the right values and data types? Is its data managed correctly? 
   - Access methods: Are access methods working as expected? Are all expected methods implemented?
   - If it needs code to be executed on another layer, make sure that code is already tested and working as intended, then check whether it is being called properly and receiving the correct data: Is the data sent to the correct? Is the data received correct? Is the data being handled as expected on the component?

