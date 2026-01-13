# TDesign Miniprogram Snippets - Project Overview

This project is a Visual Studio Code extension designed to enhance the development experience for users working with the TDesign component library within WeChat Mini Program projects.

## Project Purpose

The primary goal of this extension is to streamline and accelerate the development process by providing:

*   **Code Snippets:** A comprehensive collection of pre-defined code snippets for TDesign components in WXML, JavaScript, and JSON files, enabling quick insertion of common component structures.
*   **IntelliSense & Autocompletion:** Intelligent code completion suggestions for WXML, making it easier to discover and use TDesign components and their properties.
*   **Hover Information:** On-hover documentation and details for TDesign components, providing quick access to relevant information without leaving the editor.
*   **Code Generation Commands:** Commands to quickly scaffold new Mini Program pages and components based on predefined templates.
*   **Component Navigation:** Functionality to jump directly to component definitions or related files (e.g., using "Alt + click").
*   **Component Highlighting:** Visual highlighting of TDesign components within WXML files for improved readability and recognition.

## Main Technologies

*   **TypeScript:** The core language used for developing the VS Code extension.
*   **VS Code Extension API:** The framework for integrating with Visual Studio Code.
*   **TDesign Miniprogram:** The specific component library targeted by this extension.
*   **WeChat Mini Program Languages:** WXML (WeiXin Markup Language), WXSS (WeiXin Style Sheets), JavaScript, and JSON are the primary languages and file types the extension supports.

## Architecture

The extension is structured modularly, with different features encapsulated within dedicated modules under the `src` directory. The `src/extension.ts` file serves as the entry point and orchestrator, responsible for activating and deactivating various functionalities based on VS Code lifecycle events and user configurations.

Key modules include:

*   `completionItem/`: Handles WXML autocompletion providers.
*   `hover/`: Manages hover-over information for components.
*   `commands/`: Implements custom VS Code commands (e.g., creating pages/components).
*   `jumpComponent/`: Provides the "jump to component" functionality.
*   `highlightComponent/`: Manages component highlighting.
*   `snippets/`: Contains the JSON files defining the code snippets.

## Building and Running

The project utilizes `npm` for scripting and `tsc` (TypeScript Compiler) for compilation.

### Essential Commands:

*   **`npm install`**: Installs all necessary project dependencies.
*   **`npm run compile`**: Compiles the TypeScript source code (`.ts` files) into JavaScript (`.js` files) in the `out` directory. This command is also run automatically before publishing the extension.
*   **`npm run watch`**: Starts the TypeScript compiler in watch mode, automatically recompiling files upon changes. Useful during active development.
*   **`npm run lint`**: Executes ESLint on the `src` directory to enforce code style and catch potential errors.
*   **`npm test`**: Runs the VS Code extension tests using `vscode-test`.

### Running and Debugging in VS Code:

1.  Open the project folder in VS Code.
2.  Press `F5` to launch an Extension Development Host window. This new window will have the extension loaded and ready for testing.
3.  Any changes made in the main VS Code window will be reflected in the Extension Development Host after a recompile (automatically handled by `npm run watch` if running, or by manually running `npm run compile`).

## Development Conventions

*   **Language:** TypeScript is the primary development language.
*   **Linting:** ESLint is configured to maintain code quality and consistency across the `src` directory. Developers should ensure their code passes ESLint checks.
*   **Modularity:** Features are separated into distinct modules to promote maintainability and organization.
*   **Configuration:** Extension settings are managed through `vscode.workspace.getConfiguration()`, allowing users to enable/disable features.
