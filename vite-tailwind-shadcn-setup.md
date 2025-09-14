# Vite + React + TypeScript + Tailwind CSS + shadcn/ui Setup Guide

## Step 1: Create Vite Project

Ensure Vite is installed and create a new React TypeScript project:

```bash
yarn create vite@latest . --template react-ts
```

## Step 2: Add Tailwind CSS

Install Tailwind CSS with Vite integration:

```bash
yarn add tailwindcss @tailwindcss/vite
```

## Step 3: Configure Tailwind in CSS

Replace everything in `src/index.css` with:

```css
@import "tailwindcss";
```

## Step 4: Configure TypeScript Paths (tsconfig.json)

Edit your `tsconfig.json` file:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Step 5: Configure App TypeScript Paths (tsconfig.app.json)

Edit your `tsconfig.app.json` file to add path mapping:

```json
{
  "compilerOptions": {
    // ... existing config
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ... rest of config
  }
}
```

## Step 6: Update Vite Configuration

Update your `vite.config.ts`:

```typescript
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## Step 7: Upgrade Yarn to Modern Version

Upgrade to the latest version to enable `dlx` command (Yarn v2+):

```bash
yarn set version stable
yarn install
```

> **Note:** `dlx` is the Yarn equivalent of `npx` and was introduced in Yarn v2 as part of the Plug'n'Play architecture. If you're using Yarn v1.x, you'll get a "dlx not found" error and need to upgrade.

## Step 8: Initialize shadcn/ui

Initialize shadcn/ui in your project:

```bash
yarn dlx shadcn@latest init
```

Follow the prompts to configure shadcn/ui for your project.

## Step 9: Add Components

Add your first shadcn/ui component:

```bash
yarn dlx shadcn@latest add card
```

You can add more components as needed:

```bash
yarn dlx shadcn@latest add button
yarn dlx shadcn@latest add dialog
yarn dlx shadcn@latest add input
```

## Troubleshooting

### If you're still on Yarn v1 and can't upgrade:

Use `npx` instead of `yarn dlx`:

```bash
npx shadcn@latest init
npx shadcn@latest add card
```

### Check your Yarn version:

```bash
yarn --version
```

### Clear cache if needed:

```bash
yarn cache clean
```

### if error when u run the yarn test again you can:

#Clear cache and reinstall

```bash
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
yarn test
```

## Final Project Structure

After setup, your project should look like:

```
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts      # utility functions
│   ├── index.css         # Tailwind imports
│   └── ...
├── tsconfig.json         # TypeScript config
├── tsconfig.app.json     # App-specific TS config
├── vite.config.ts        # Vite configuration
└── components.json       # shadcn/ui config
```

Now you're ready to start building with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui!
