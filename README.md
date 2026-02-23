# NRELabs Website

Welcome to the NRELabs website repository! This is the official website for NRELabs, built with Docusaurus and deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.0 or above
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/nrelab/nrelab.github.io.git
cd nrelab.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `build` directory.

## 📁 Project Structure

```
nrelab.github.io/
├── docs/                    # Documentation content
│   ├── intro.md            # Introduction page
│   ├── security-tools.md   # Security tools documentation
│   └── research-papers.md  # Research papers section
├── src/
│   ├── components/         # React components
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css      # Custom styling
│   └── pages/              # Additional pages
│       ├── projects.tsx    # Projects page with GitHub API
│       └── resources.tsx   # Resources page
├── static/                 # Static assets
├── blog/                   # Blog posts
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts            # Documentation sidebar
└── package.json           # Dependencies and scripts
```

## 🎨 Features

### Main Sections
- **Home**: Introduction to NRELabs with focus areas
- **Projects**: Dynamic repository listing from GitHub API
- **Documentation**: Comprehensive guides and documentation
- **Blog**: News, updates, and research notes
- **Resources**: Curated links and external resources

### Technical Features
- **GitHub API Integration**: Automatically fetches and displays repositories
- **Responsive Design**: Mobile-friendly layout
- **Dark Mode**: Automatic theme switching
- **Search**: Built-in documentation search
- **SEO Optimized**: Meta tags and structured data

## 🔧 Configuration

### GitHub API Integration
The projects page (`src/pages/projects.tsx`) automatically fetches repositories from the NRELabs GitHub organization. No configuration is required.

### Customization
- **Styling**: Modify `src/css/custom.css` for visual changes
- **Navigation**: Update `docusaurus.config.ts` for menu items
- **Content**: Add new pages in `src/pages/` and docs in `docs/`

## 🚀 Deployment

### Automatic Deployment
The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment
```bash
npm run deploy
```

### GitHub Actions
The deployment workflow is defined in `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Builds the site using Node.js 20
- Deploys to GitHub Pages

## 📝 Content Management

### Adding Documentation
1. Create new `.md` files in the `docs/` directory
2. Update `sidebars.ts` to include them in the navigation
3. Add frontmatter with `sidebar_position` for ordering

### Adding Blog Posts
1. Create new `.md` files in the `blog/` directory
2. Include frontmatter with title, date, and authors
3. Blog posts are automatically listed in reverse chronological order

### Updating Projects
Projects are automatically fetched from GitHub. To improve visibility:
- Add detailed descriptions to your repositories
- Use relevant topics/tags
- Keep repositories updated

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature description'`
5. Push to the branch: `git push origin feature-name`
6. Open a Pull Request

### Content Guidelines
- Use clear, concise language
- Follow the existing style and formatting
- Test changes locally before submitting
- Ensure all links work correctly

## 📊 Analytics and SEO

- Google Analytics can be configured in `docusaurus.config.ts`
- Meta tags are automatically generated
- Sitemap is generated for search engines
- Social media cards are configured

## 🛠️ Technologies Used

- **Docusaurus**: Static site generator
- **React**: UI framework
- **TypeScript**: Type safety
- **Infima**: CSS framework
- **GitHub API**: Repository data
- **GitHub Pages**: Hosting platform

## 📄 License

This website is open source and available under the MIT License.

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact the NRELabs team
- Check the [documentation](/docs/intro) for guidance

---

*Built with ❤️ by the NRELabs team*
