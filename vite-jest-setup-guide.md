# Vite + React + TypeScript + Jest Setup Guide

A complete step-by-step guide to set up Jest testing in a Vite React TypeScript project.

## Step 1: Create Vite Application

Create a new React TypeScript application using Vite:

```bash
yarn create vite . --template react-ts
```

This will create a React application with TypeScript support.

## Step 2: Install Testing Dependencies

Install all necessary packages for Jest with TypeScript support:

```bash
yarn add -D jest @types/jest @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest identity-obj-proxy jest-environment-jsdom ts-node
```

### Package explanations:

- `jest` - Testing framework
- `@types/jest` - TypeScript definitions for Jest
- `@testing-library/*` - React testing utilities
- `@babel/*` - Babel presets for transpiling JSX/TSX
- `identity-obj-proxy` - Mock styling files (CSS, SASS, etc.)
- `jest-environment-jsdom` - DOM environment for browser-like testing
- `ts-node` - TypeScript execution engine

## Step 3: Create File Mock

Create a global mocker for images and other file extensions.

**Create directory and file:**

```
test/__mocks__/fileMock.js
```

**Add to `fileMock.js`:**

```javascript
module.exports = "test-file-stub";
```

## Step 4: Update TypeScript Configuration (Optional)

To avoid TypeScript issues in test files, update your `tsconfig.app.json`:

```json
{
  "include": ["src", "./jest.setup.ts"]
}
```

## Step 5: Configure Babel

Create a `.babelrc` file in the project root to transpile JSX/TSX syntax:

**Create `.babelrc`:**

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}
```

## Step 6: Update Package.json Scripts

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "jest --watchAll",
    "cov": "jest --coverage --collectCoverageFrom='src/**/*.{js,jsx,ts,tsx}'"
  }
}
```

### Script explanations:

- `test` - Runs tests in watch mode
- `cov` - Generates coverage report for source files

## Step 7: Create Jest Configuration (Optional)

Create `jest.config.js` for additional configuration:

```javascript
export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
```

## Step 8: Create Setup File (Optional)

Create `jest.setup.ts` in the project root:

```typescript
import "@testing-library/jest-dom";
```

## Step 9: Create Your First Test

Create a simple test file to verify the setup works:

**Example: `src/utils/myHelper.test.ts`**

```typescript
import { add } from "./myHelper";

describe("myHelper", () => {
  test("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## Step 10: Run Tests

Execute your tests:

```bash
# Run tests in watch mode
yarn test

# Run tests with coverage
yarn cov
```

## Troubleshooting

### Common Issues:

- **"Your test suite must contain at least one test"** - Ensure test files have actual `test()` or `it()` blocks
- **Module import errors** - Check your `moduleNameMapping` in Jest config
- **TypeScript errors** - Ensure `@types/jest` is installed and `jest.setup.ts` is included in tsconfig

### Project Structure:

```
project-root/
├── src/
│   ├── components/
│   │   └── MyComponent.test.tsx
│   └── utils/
│       ├── myHelper.ts
│       └── myHelper.test.ts
├── test/
│   └── __mocks__/
│       └── fileMock.js
├── .babelrc
├── jest.config.js (optional)
├── jest.setup.ts (optional)
├── tsconfig.app.json
└── package.json
```

## Success Indicators

When everything is working correctly, you should see:

- ✅ Tests running without errors
- ✅ TypeScript compilation working
- ✅ React components rendering in tests
- ✅ Coverage reports generating (if using `yarn cov`)

---

**Note:** This configuration has been tested and verified to work with Vite + React + TypeScript projects.
