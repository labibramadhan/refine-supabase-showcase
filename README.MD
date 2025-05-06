# Book Borrowing Application

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img alt="refine logo" src="https://refine.ams3.cdn.digitaloceanspaces.com/readme/refine-readme-banner.png">
    </a>
</div>
<br/>

This [Refine](https://github.com/refinedev/refine) project was generated with [create refine-app](https://github.com/refinedev/refine/tree/master/packages/create-refine-app) and enhanced to create a book borrowing application that allows users to borrow books from the library.

## Project Overview

This application manages book borrowing with the following features:
- Book management (create, read, update, delete)
- Member management (create, read, update, delete)
- Borrowing transaction management
- Access control integrated with Supabase authentication

## Architecture and Design Patterns

### Container Pattern

This project implements a robust container pattern that separates concerns and promotes maintainability:

- **Containers**: Handle business logic, data fetching, and state management
- **Components**: Focus purely on UI rendering with props passed from containers
- **Hooks**: Encapsulate all data fetching and API calls
- **Utils**: Provide shared utility functions

This separation provides several key benefits:

- **Backend Agnosticism**: All Supabase interactions are isolated in hooks, making it straightforward to replace with another service in the future
- **Testability**: UI components can be tested in isolation from business logic
- **Code Reusability**: Components can be shared across different contexts
- **Maintenance**: Changes to data sources only require updates to hooks, not to UI components

For example, if the application needs to move away from Supabase in the future, only the hooks layer would need significant changes while containers and UI components would remain largely untouched.

## Project Structure

The project follows a modular structure organized by feature domains:

```
src/
├── components/         # Reusable UI components
│   ├── base-pages/     # Base page layouts (create, edit, list, show)
│   ├── error-page/     # Common error page component
│   └── ...
├── modules/            # Feature modules
│   ├── book/           # Book module
│   │   ├── components/ # UI components for books
│   │   ├── container/  # Main logic containers for different views
│   │   ├── hooks/      # Custom hooks for data fetching
│   │   └── utils/      # Utility functions
│   ├── borrowing/      # Borrowing module (similar structure)
│   ├── genre/          # Genre module (similar structure)
│   └── member/         # Member module (similar structure)
├── models/             # Entity data models
├── providers/          # Provider configurations (Auth, etc.)
└── utils/
    └── supabase/       # Supabase client utilities
        ├── client.ts   # Anon client for browser use
        └── server.ts   # Server-side client for secure operations
```

## React Query and Suspense Usage

This project leverages React Query through Refine's data hooks for efficient data fetching and caching:

- **React Query**: Implemented via Refine's hooks:
  - `useOne` - For fetching single records
  - `useMany` - For fetching multiple records by ID
  - `useList` - For paginated data fetching
  - `useTable` - For table data with sorting, filtering, and pagination
  - `useForm` - For form data handling with validation

- **Suspense**: Used for loading states throughout the application to provide a smoother user experience. The application implements:
  - Fallback UI components during data loading
  - Error boundaries to handle loading failures
  - Base page components that handle loading states consistently

## State Management

- **Form State**: Managed through Refine's form hooks
- **Server State**: Handled by React Query's caching layer

### Zustand for State Management

The application uses [Zustand](https://github.com/pmndrs/zustand) for managing complex application state. Zustand provides a lightweight, unopinionated approach to state management with these benefits:

- **Minimal boilerplate** compared to other state management solutions
- **Component-agnostic** - state can be accessed outside of React components
- **Optimized performance** with automatic selective re-rendering

Zustand is implemented in the following ways:

- **Multi-step form state** - Used in the borrowing module to manage state across multiple form steps
  ```typescript
  // Example from src/modules/borrowing/stores/useBorrowingFormStore.ts
  export const useBorrowingFormStore = create<BorrowingFormState>()(...);
  ```

- **Filter state persistence** - Used to persist filter selections across component re-renders
- **UI state coordination** - Used for coordinating UI states that need to be shared across multiple components

## Code Quality and Standards

### ESLint Configuration

This project uses ESLint for code quality enforcement with a comprehensive rule set that follows industry best practices:

- TypeScript strict type checking
- React hooks rules enforcement
- Import sorting and organization
- Unused variable and import detection
- Consistent code formatting aligned with Prettier

### Husky and Commit Standards

Git hooks are managed via [Husky](https://typicode.github.io/husky/) to enforce quality checks before code is committed:

- **Pre-commit hooks**: Run ESLint, TypeScript type checking, and Prettier formatting
- **Commit message standards**: Enforces conventional commit format (feat, fix, docs, etc.)
- **Pre-push validation**: Ensures all tests pass before code can be pushed

This approach ensures consistent code quality across the codebase and streamlines collaboration between team members.

## Available Scripts

### Running the development server.

```bash
    pnpm dev
```

### Building for production.

```bash
    pnpm build
```

### Running the production server.

```bash
    pnpm start
```

## Learn More

- **Refine Framework** [Documentation](https://refine.dev/docs)
- **Supabase Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)

## License

MIT
