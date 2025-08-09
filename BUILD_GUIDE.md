# Multi-Domain Build Configuration

This project is configured to build for multiple domains with different default languages:

- **Serbian** (backpackwander.rs) - Default language: `sr`
- **German** (backpackwander.de) - Default language: `de`
- **English** (backpackwander.com) - Default language: `en`

## Build Commands

### Individual Builds

```bash
# Build for Serbian domain (default language: Serbian)
npm run build:sr

# Build for German domain (default language: German)
npm run build:de

# Build for English domain (default language: English)
npm run build:en
```

### Build All Domains

```bash
# Build all three versions at once
npm run build:all
```

### Using Build Scripts

For convenience, you can use the provided build scripts:

**Windows (PowerShell):**

```powershell
.\build-all.ps1
```

**Linux/Mac (Bash):**

```bash
./build-all.sh
```

## Output Structure

After building, you'll get three separate distribution folders:

```
├── dist-sr/     # Serbian version (for backpackwander.rs)
├── dist-de/     # German version (for backpackwander.de)
└── dist-en/     # English version (for backpackwander.com)
```

Each folder contains a complete, optimized build with:

- Default language set correctly
- Proper HTML lang attribute
- Localized meta tags and SEO content
- Language-specific asset naming

## How It Works

1. **HTML Templates**: Each language has its own HTML template (`index-sr.html`, `index-de.html`, `index-en.html`) with proper:

   - `lang` attribute
   - Localized meta tags
   - SEO content in the respective language

2. **Build Configuration**: Vite config reads the `VITE_DEFAULT_LANG` environment variable and:

   - Uses the appropriate HTML template
   - Injects the default language as a global variable
   - Creates language-specific output directories
   - Generates unique asset names for each build

3. **i18n Configuration**: The i18n system detects the default language from:

   - Global variable injected during build
   - Document's `lang` attribute
   - Fallback to Serbian

4. **Language Context**: The React context adapts to use the build-time default language instead of hardcoded Serbian.

## Deployment

Deploy each `dist-*` folder to its respective domain:

- Upload `dist-sr/` contents to `backpackwander.rs`
- Upload `dist-de/` contents to `backpackwander.de`
- Upload `dist-en/` contents to `backpackwander.com`

## Development

For development, the app still works normally with `npm run dev`. The default language detection will fall back to Serbian if no specific configuration is found.

## Preview Builds

You can preview each build locally:

```bash
# Preview Serbian build
npm run preview:sr

# Preview German build
npm run preview:de

# Preview English build
npm run preview:en
```
