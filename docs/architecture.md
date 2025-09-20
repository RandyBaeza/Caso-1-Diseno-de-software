

##20minCoach: Frontend Architecture Design


##N-Layer Architecture

This document outlines a clean, maintainable layered architecture 
for the 20minCoach frontend.

## Layer 1: Models 
Responsibilities: Define the structure  of all data moving 
throughout the application.

Contents:

TypeScript Interfaces/Types: Define the core entities (User, Coach, Session, BookingRequest).

Data Transfer Object (DTO) Interfaces: Define the structure of data sent to and received from the API. 

Enums: For fixed sets of values (SessionStatus, UserRole).

Communication: All other layers import and use these types. They act as a foundation.



##Layer 2: API Client Layer
Responsibilities: Provide a 1 configured HTTP client for all communication with the backend REST API. 
Handles cross-cutting concerns like parsing errors.

Contents:

A configured Axios instance.

Request Interceptor: Automatically adds the user's authentication token (from Auth0) to the Authorization header. This for every outgoing request.

Response Interceptor: Globally handles common API errors.

Communication: Injected into the Services Layer. The API client calls the backend and returns raw data.


##Layer 3: Services Layer
Responsibilities: Keeps together all the logic for interaction with external systems, like the backend API.

Contents:

API Services: Classes or modules using API Client with methods for each endpoint (getUserData, registerCoach...). 

Real-Time Services: Modules for initializing and managing the connections of Socket.IO and PeerJS.

Auth Service: A module that wraps the Auth0 SDK, providing a clean interface for login, logout, and getting user info.

Communication:

Called by: Hooks, Zustand stores, or components directly for simpler cases.

Calls: The API Client Layer and external SDKs.

Returns: Promises with Models.


##Layer 4: State Layer
Responsibilities: Manage the application's state reactively.

Contents:

Zustand Stores: For global UI state that needs to be shared across the app (e.g. light/dark mode, general colors, general search filters).

React Query Cache : The primary state manager for data fetched from the API. It handles caching, background updates, and stale data out of the box.

Communication:

Zustand: Stores can call Services to perform actions.

React Query: Hooks call query functions (which are in the Services Layer) to fetch data.

Provides state to: Components and Hooks.



##Layer 5: Controller Layer
Responsibilities: Contain the complex logic for components. They act as the glue between the presentation layer and the state and services layer).

Contents:

Custom Hooks: Reusable hooks that compose multiple state operations, handle form state.

This is where the majority of your application's behavior lives.

Communication:

Uses: State Layer hooks (React Query, Zustand) and Services.

Provides: Data and functions to Components.



##Layer 6: Presentation Layer
Responsibilities: Define what the user sees on the screen. 

Contents:

Pages: Top-level components that act as routers for specific views.

Components: Reusable UI components (buttons, cards, modals). 

Layouts: Components that define the common structure of pages (header, footer, sidebar).

Communication:

Imports and uses: Hooks from the Controller Layer.

Receives data and callbacks via props from parent components or hooks.

Should not contain direct calls to services or state management logic. These are provided by hooks.