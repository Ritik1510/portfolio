## Process of making the web-apps 
  frameworkSetUp/nextjs ---> securitySetUp/clerk ---> anotherSecuritySetUp/arcjet ---> integrate zod ---> setupOfENVs using @t3-oss/env-nextjs ---> addUiLib/shadcn ---> themeSetUp/light-dark-modes ---> dbSetUp/Drizzle-orm-&-pg with docker --->  

## Clerk 
  - Clerk is a full-stack user management and authentication platform for web applications, providing developers with tools to easily integrate secure login, user profiles, and multi-factor authentication into their apps without extensive backend code. It offers frontend components, JavaScript SDKs, and APIs to handle user journeys, session management, and security features like bot detection and fraud prevention. Clerk aims to simplify the complexities of user identity management, making it a modern, scalable solution for developers.
## ARCJET
  - `Arcjet` is a security platform for web applications and APIs that provides bot protection, rate limiting, email validation, and other defenses against common attacks, often integrated with a few lines of code. It helps protect against issues like fake account sign-ups by combining these features to secure various points in an application. 
## npm i @t3-oss/env-nextjs
  - `@t3-oss/env-nextjs` is a package designed to provide a robust and type-safe way to manage environment variables in Next.js applications. It is part of the T3 Stack ecosystem and leverages Zod for schema validation.
## npm i next-themes
  - The next-themes package is a JavaScript library designed to simplify the implementation of theme switching, particularly dark mode, in Next.js applications and other React frameworks like Gatsby or Create React App.
## zod 
  - Zod is a TypeScript-first schema validation library for defining and validating data structures, offering features like type safety, data integrity, and runtime validation for complex or simple data. Developers create schemas using Zod's API, which then infer static TypeScript types, eliminating redundant declarations and ensuring data conforms to the expected shape and type. It works well with TypeScript and plain JavaScript, is small and has no dependencies, and is widely used for various applications, though a CVE (CVE-2023-4316) was discovered for older versions related to email validation.
## SHADCN
 - Shadcn/ui is an open-source code distribution platform for reusable, accessible, and customizable UI components, rather than a traditional component library. It functions as a code-sharing tool and design system that delivers styled, unopinionated components directly into your project's codebase using a CLI, giving you full ownership and control over the code. Built on Tailwind CSS for styling and Radix UI for accessibility and behavior, Shadcn/ui provides the components and tools to help developers build accessible, scalable, and highly customizable user interfaces efficiently. 
## TWEAKCN
  - Tweakcn is a free, web-based visual theme editor for designing custom themes for shadcn/ui components using Tailwind CSS, allowing users to visually adjust colors, fonts, and other aspects of their UI in real-time. It provides theme presets for quick starts, offers an AI-powered generator for custom themes based on text prompts, and allows users to export the generated CSS and Tailwind configuration files for use in their projects. 

## AG GRID 
  - `AG Grid` is a high-performance, feature-rich JavaScript data grid library for building interactive tables and spreadsheets in web applications. It is widely used in enterprise applications for its ability to handle large datasets efficiently. AG Grid is framework-agnostic, with seamless integrations for React, Angular, Vue, and plain JavaScript. 
  
## STORYBOOK
  - `Storybook` provides a robust environment for testing React components in isolation. It enables the creation of "stories" that represent different states and variations of a component, offering a visual and interactive way to develop and test UI. 

