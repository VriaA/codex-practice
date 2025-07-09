This repository contains a practice implementation of a header component for the ``centralnotice-banner-editor`` tool. The goal is to get familiar with Codex, Wikimedia’s Vue-based component library.

## Technologies Used
- **Vue 3**: Core framework for building the UI.
- **Wikimedia Codex**: Official UI component library used by Wikimedia.
- **LESS**: For styling using Wikimedia's design system.
- **TypeScript**: For type safety and catching errors during development.
- **Vue Router**: For routing.
- **Vite**: Fast build tool and dev server.
- **ESLint & Prettier**: To enforce code quality and consistency.
- **Pinia**: Lightweight state management (planned for integration).

## Project Structure
```
├── public/                 # Static assets
├── src/
│   ├── components/         # Vue components
│   ├── composables/        # Reusable Vue composables (e.g., useMenu)
│   ├── router/             # Vue Router setup
│   ├── styles/             # Global and component-specific styles (LESS)
│   ├── views/              # Page-level components
│   ├── App.vue             # Main app layout
└── └── main.ts             # App entry point
```

## Local Setup
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/VriaA/codex-practice.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate:
   ```
   http://localhost:5173
   ```
   
### Linting & Formatting

  #### Lint with [ESLint](https://eslint.org/):
    npm run lint

  #### Auto-format files with [Prettier](https://prettier.io/):
  
  ```
  npm run format
  ```
