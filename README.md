# Genius-Spectra

This project is built using **React**, **Vite**, **Ant Design**, **Zustand**, and **TypeScript**. It follows a structured folder architecture to maintain scalability and reusability across the codebase.

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Installation](#installation)
3. [Running the Project Locally](#running-the-project-locally)
4. [Technologies Used](#technologies-used)

## Folder Structure

Here's the updated project folder structure:

```
├── public/               # Directory under project root. Assets here will be served at the root path.
├── src/
│   ├── assets/           # Images, icons, fonts, and other static assets
│   ├── components/       # Reusable React UI components (e.g., buttons, forms, modals)
│   ├── hooks/            # Custom React hooks for logic reuse
│   ├── hoc/              # Higher-Order Components (HOC) for extending component functionality
│   ├── i18n/             # Localization files and configuration for internationalization (i18n) to support multiple languages
│   ├── pages/            # Individual pages of the application
│   ├── layout/           # Layout components defining page structure
│   ├── router/           # Application routing logic
│   ├── constants/        # Application-wide constants (e.g., configuration values)
│   ├── store/            # Zustand global state management (e.g., `useUserStore.ts`)
│   ├── styles/           # Global styles (SCSS or CSS), variables, and component-specific styles
│   ├── types/            # TypeScript types, interfaces, and enums used across the project
│   ├── utils/            # Utility functions and helpers (e.g., formatters, validators)
│   ├── App.tsx           # Main React component and app entry point
│   ├── main.tsx          # Vite project entry point
│   ├── config.ts         # Centralized environment variables and configuration with fallback values
│   └── vite-env.d.ts     # Vite TypeScript environment definitions
├── .gitignore            # Files ignored by Git
├── index.html            # Main HTML template
├── .env                  # File stores environment variables
├── sample.env            # Sample .env file
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

### Explanation of Key Folders:

- **assets/**: Stores images, icons, fonts, and other static assets for the app.
- **components/**: Holds all reusable React components such as buttons, forms, and modal dialogs.
- **hooks/**: Contains custom React hooks for shared state or logic.
- **hoc/**: For higher-order components (HOC) that enhance or wrap existing components.
- **pages/**: Contains the different pages of the app like `Home`, `About`, etc.
- **layout/**: Manages layout components, defining consistent page structures across the app.
- **router/**: Defines routes and navigation for the project.
- **constants/**: Holds application-wide constant values, such as API URLs or configuration variables.
- **store/**: Contains files for Zustand-based global state management, such as `useUserStore.ts`.
- **styles/**: Contains global and component-specific styles, including SCSS/CSS files and style variables.
- **types/**: Stores TypeScript types, interfaces, and enums used throughout the app.
- **utils/**: Contains helper functions and utility scripts, such as formatters and validators.

## Installation

To clone and run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ajesh-humblebridge/genius-spectra.git
   cd genius-spectra
   ```

2. **Ensure the required Node.js and npm versions are installed**:

   - Node.js: `v20.17.0` or higher
   - npm: `v10.8.3` or higher

   You can specify the Node.js version using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm). Run the following command to install and use the correct Node version:

   ```bash
   nvm install
   nvm use
   ```

**Note**: The required versions of Node.js and npm are defined in the "engines" field in `package.json`.

3. **Configure Environment Variables**:

   Rename the `sample.env` file to `.env` and provide the required environment variable values.
   Ensure to populate `.env` with all necessary environment variables for the project to run correctly.

4. **Install Dependencies**:

   Make sure you have Node.js installed on your system, then run:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project Locally

After installing the dependencies, you can run the following command to start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server and the project should be available at `http://localhost:5173`.

### Build for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `dist` folder.

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation front-end tooling for blazing-fast builds
- **Ant Design**: UI component library for enterprise-level web applications
- **Zustand**: Small, fast, and scalable state management library
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
