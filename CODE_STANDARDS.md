# Code Standards

## General Guidelines

- Use meaningful variable and function names.
- Write comments for complex logic.
- Follow DRY (Don't Repeat Yourself) principles.

## Project Structure

- Components: Place common components in the `app/components` directory. Use subdirectories for logically grouped components.
- Containers: Place page-specific components in the `app/containers` directory.
- Routes: Place Remix routes in the `app/routes` directory.
- Hooks: Place custom hooks in the `app/hooks` directory.
- Libs: Place utility functions in the `app/libs` directory.
- Styles: Place global styles in the `app/styles` directory and component-specific styles within the component's directory.
- Constants: Place global constants in the `app/consts` directory.
- Data: Place static JSON data in the `app/data` directory.
- Icon: Place svg icon components in the `app/icons` directory.

## Naming Convention

- Try to name files and folders using pascal case and camel case.

## JavaScript

- Use const and let instead of var.
- Prefer arrow functions for anonymous functions.
- Use index.js for barrel exports within folders.
- Use template literals for string concatenation.
- Always use strict equality (=== and !==).

## React Specific

- Use functional components and hooks.
- Organize components by feature or type.
- Prefer destructuring props in function parameters.
- Use named exports for all jsx components except for routes.
- Use the custom hook - useResponsive for JS-responsive approach.
- Keep component files small and focused. Split large components into smaller subcomponents.

## Remix Specific

- Organize routes and components in the `routes` directory.
- Use `useLoaderData` for fetching data in routes.
- Utilize flat routes to compose layouts and components.
- Use the custom hook - useSubmitPromise for fetching & posting.

## UI Building

- Design Systems: Adhere to the design system or style guide provided by the design team. Ensure consistency in design patterns, spacing, colors, and typography.
- Responsive Design: Ensure the UI is responsive and works across various screen sizes. Use Tailwind media query directives.
- Alignment and Spacing: Pay attention to alignment, margins, and paddings. Use grid or flex for layout alignment.
- Pixel Perfection: Match the Figma design pixel by pixel.
- Cross-Browser Compatibility: Test the UI on different browsers to ensure consistency. Use tools like BrowserStack for testing.

## CSS - Tailwind

- Use primarily tailwind classes or at least @apply directive in css.
- Avoid using traditional css.

## Testing

- Simply run `npm run lint` before making every new PR.

## Linting and Formatting

- Use ESLint for JavaScript/React linting.
- Use Prettier for code formatting.
- Use VSCode and enable VSCode `autoformat on save`.

## Git Practices

- Write clear and concise commit messages.
- Use a consistent commit message format (e.g., conventional commits).
- Make small, atomic commits focused on single tasks.
- Avoid committing large, unrelated changes in a single commit.
- Don't use the same, old PR for other tasks.

## Code Reviews

- Conduct regular code reviews for all pull requests.
- Provide constructive feedback.
- Focus on code quality, readability, and maintainability.
- Encourage discussions and knowledge sharing during reviews.
