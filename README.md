# 🌐 Mael Federo - Portfolio

> A modern, responsive portfolio website showcasing my journey as a Software Engineer and User Researcher.

[![Live Site](https://img.shields.io/badge/Live-maelfedero.dev-blue)](https://www.maelfedero.dev)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with responsive layout
- **📧 Contact Form**: Functional contact form powered by Resend API
- **💼 Projects Showcase**: Dynamic display of academic and technical projects
- **🚀 Serverless Architecture**: API functions deployed on Vercel
- **📱 Mobile-First**: Fully responsive across all devices
- **🔍 SEO Optimized**: Meta descriptions and clean URLs for better discoverability

## 🛠️ Tech Stack

**Frontend:**

- HTML5, CSS3, JavaScript (Vanilla)
- Bootstrap 5.3.0
- Bootstrap Icons

**Backend:**

- Vercel Serverless Functions (Node.js)
- Resend API for email delivery

**Deployment:**

- Vercel (Automatic deployments from GitHub)
- Custom domain: [www.maelfedero.dev](https://www.maelfedero.dev)

## 📁 Project Structure

```
MaelFedero/
├── api/                    # Serverless API functions
│   ├── contact.js         # Contact form handler
│   └── projects.js        # Projects data endpoint
├── assets/                # Images, icons, and media
│   ├── favicon.svg        # Custom </> logo favicon
│   ├── image.jpg          # Profile picture
│   └── icon/              # Social media icons
├── scripts/               # JavaScript modules
│   ├── components/        # Reusable UI components
│   ├── core/             # Core framework code
│   ├── data/             # Static data modules
│   ├── modules/          # Feature modules
│   └── utils/            # Utility functions
├── styles/                # CSS stylesheets
│   ├── modern.css         # Homepage styles
│   ├── projects.css       # Projects page styles
│   └── components.css     # Component styles
├── index.html            # Homepage
├── contact.html          # Contact page
├── projects.html         # Projects page
├── vercel.json           # Vercel configuration
└── package.json          # Project metadata
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Git
- Vercel CLI (optional, for local development)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/MaelPorts/MaelFedero.git
   cd MaelFedero
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run locally with Vercel CLI**

   ```bash
   npm install -g vercel
   vercel dev
   ```

5. **Open in browser**

   Visit `http://localhost:3000`

### Alternative: Simple Static Server

For basic viewing without API functionality:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add `RESEND_API_KEY` to Vercel environment variables
4. Update recipient email in `api/contact.js` if needed

**Note:** Resend's free tier requires emails to be sent to your verified account email address.

## 🌟 Key Pages

### Home (`/`)

- Introduction and professional summary
- Academic performance metrics
- Certifications showcase
- Quick links to projects and contact

### Projects (`/projects`)

- Dynamic project cards
- Categories: University Projects & Technical Projects
- Project details with technologies used

### Contact (`/contact`)

- Contact form with validation
- Fields: Name, Email, Message
- Real-time feedback on submission

## 📝 Content Management

### Updating Projects

Projects are defined in `scripts/data/` as JavaScript modules:

- `universityProjects.js`: Academic projects
- `technicalProjects.js`: Personal/professional projects

To add a new project:

1. Edit the appropriate file
2. Add a new object with project details
3. Commit and push - Vercel auto-deploys

### Updating Personal Info

- **Profile**: Edit `index.html` sections
- **Contact Email**: Update in `api/contact.js`
- **Social Links**: Modify navigation in HTML files

## 🔧 Configuration

### Vercel Settings

The `vercel.json` file configures:

- Clean URLs (removes `.html` extensions)
- Output directory set to root

### API Functions

Located in `/api` directory:

- `contact.js`: POST endpoint for contact form
- `projects.js`: GET endpoint serving project data

## 🎨 Styling

- Custom CSS in `styles/` directory
- Bootstrap 5.3.0 for responsive grid and components
- Color scheme: Black (#212529), Dark Grey (#474a4d), Blue (#0d6efd)
- Custom favicon with `</>` logo

## 🚢 Deployment

### Automatic Deployment

1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Live at [www.maelfedero.dev](https://www.maelfedero.dev)

### Environment Variables (Vercel)

Set in Project Settings → Environment Variables:

- `RESEND_API_KEY`: Your Resend API key

### Custom Domain

Domain configured in Vercel dashboard pointing to `maelfedero.dev`.

## 🐛 Troubleshooting

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set in Vercel
- Check recipient email matches your Resend account
- Review function logs in Vercel dashboard

### 404 Errors

- Ensure `vercel.json` has `cleanUrls: true`
- Check file names are lowercase
- Verify files are in root directory

### API Functions Not Deploying

- Confirm `/api` folder is in root
- Check functions use CommonJS (`module.exports`)
- Review build logs in Vercel

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

## 🤝 Connect

- **Website**: [www.maelfedero.dev](https://www.maelfedero.dev)
- **GitHub**: [@MaelPorts](https://github.com/MaelPorts)
- **LinkedIn**: [Mael Federo](https://www.linkedin.com/in/mael-federo-38629429a/)

---

Built with ❤️ by Mael Federo © 2025
