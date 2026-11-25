# MyPeptideMatch

MyPeptideMatch is a React web application for exploring peptide information, comparing peptides, finding clinics, and using peptide-related tools. It also includes educational content and site information pages.

## Requirements

- Node.js and npm

## Getting started

Install the project dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Vite prints the local URL in the terminal when the server is ready.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Run Oxlint against the project. |

## Application areas

- **Clinics:** browse clinic listings, telehealth options, and treatment categories.
- **Peptides:** explore peptide information, categories, vendors, and comparisons. The comparison page is available at `/peptides/compare`.
- **Protocols:** browse protocol and treatment information.
- **Tools:** use peptide calculators, unit converters, and related calculators.
- **Content and site information:** visit the blog, About page, contact page, and legal or disclosure pages.

The site uses React Router for client-side navigation. Shared navigation and footer elements are provided by the layout.

## Project structure

```text
src/
  component/
    footerpages/     Informational, legal, and disclosure pages
    layout/          Shared navigation, footer, and page layout
    navpages/         Clinic, peptide, protocol, and tool pages
    pages/            Blog, home, and authentication pages
  routes/             Application route configuration
  assets/             Images, icons, and other static assets
  constants/           Shared application data
  utils/               Shared utilities
public/                Public static assets and fonts
```

## Production build

Build the app and then serve the generated files with the local preview server:

```sh
npm run build
npm run preview
```
