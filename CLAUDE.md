# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
# Install dependencies
npm install

# Build the extension
npm run compile

# Watch mode (auto-rebuild on file changes)
npm run watch

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test

# Package the extension into a .vsix file
npm run package

# Open extension development host
npm run open
```

## Repository Structure

This is a VSCode extension providing TDesign Mini Program snippets,Auto-completion, hover documentation, and component navigation.

### Key Directories

- **`src/`** - TypeScript source code
  - **`completionItem/`** - Auto-completion providers for WXML, attributes, events, CSS classes, and CSS variables
  - **`hover/`** - Hover documentation provider
  - **`jumpComponent/`** - Jump-to-definition for components
  - **`test/`** - Extension tests
- **`snippets/`** - Component data in JSON format (source of truth for completions)
  - `wxml-snippets.json` - Component names and attributes
  - `wxml-wx-snippets.json` - WeChat-specific WXML snippets
  - `json-snippets.json` - Configuration snippets
  - `js-snippets.json` - JavaScript/TypeScript snippets
  - `js-wx-snippets.json` - WeChat-specific JS snippets
- **`templates/`** - Code templates
- **`syntaxes/`** - Syntax highlighting rules
- **`assets/`** - Static assets

### Extension Entry Point

The main entry is `src/extension.ts:activation` which registers VSCode providers:
- Completions via `wxmlCompletionProvider.ts`
- Hover info via `hoverProvider.ts`
- Component jumping via `jumpComponentProvider.ts`

### Build System

- TypeScript compilation using `tsconfig.json`
- Output goes to `out/` directory
- No webpack/bundling - VSCode extensions use direct tsc compilation
- ESLint for linting with flat config

### Adding New Components

To add new TDesign components:

1. **Update JSON data** - Edit files in `snippets/` directory:
   - Add component metadata to `wxml-snippets.json` (name, attributes, events)
   - Add CSS classes to `itemClassData.ts`
   - Add CSS variables to `itemCssData.ts`

2. **Source files** - Data is read by providers in:
   - `src/completionItem/wxmlData.ts` - Main component definitions
   - `src/completionItem/itemEventData.ts` - Event handlers
   - `src/completionItem/itemClassData.ts` - CSS classes
   - `src/completionItem/itemCssData.ts` - CSS variables

3. **Rebuild** - Run `npm run compile` to rebuild after changes

## Configuration

Extension configuration is in `src/config/index.ts`. Users can customize:
- Snippet search path
- Enabled component types
- Debug logging for troubleshooting

## Testing

- Tests use mocha and vscode-test API
- Test file: `src/test/extension.test.ts`
- Run with `npm test` or use VSCode Testing view with Extension Test Runner
- Debug tests using VSCode debugger with "Extension Tests" configuration

## Publishing

The extension is packaged using `vsce`:
```bash
npm run package  # Creates .vsix file
# Then publish via vsce publish or VSCode Marketplace
```

Current version: 1.1.1 (see package.json and CHANGELOG.md)