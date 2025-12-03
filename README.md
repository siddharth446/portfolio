# Siddharth Khanna - Portfolio Website

> **Flutter Full-Stack Engineer | Cross-Platform Expert | Building Netflix-Grade Apps**

A modern, responsive portfolio website showcasing the skills, projects, and achievements of Siddharth Khanna, a self-taught Flutter expert specializing in cross-platform application development.

---

## 🌐 Live Website

**Portfolio URL:** [To be deployed - Use the Publish tab to make it live]

---

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme** with vibrant gradient accents (Purple, Pink, Green, Orange)
- **Fully Responsive** - Perfect display on mobile, tablet, desktop, and large screens
- **Smooth Animations** - Fade-in effects, parallax scrolling, and interactive hover states
- **Professional Typography** - Google Fonts (Inter & Fira Code) for clean, readable text
- **Accessibility First** - Semantic HTML, ARIA labels, and keyboard navigation support

### 📱 Sections & Content

#### 1. **Hero Section**
- Eye-catching gradient background with animated orbs
- Professional headline and tagline
- Quick statistics (12+ apps, 7 platforms, Top 5 hackathon winner)
- Call-to-action buttons (View Projects, Contact, Download Resume)
- Smooth scroll indicator

#### 2. **About Section**
- Personal introduction highlighting rapid learning journey (8 months to Netflix-clone mastery)
- Four key highlights:
  - Cross-Platform Mastery (7 platforms)
  - Clean Architecture Advocate
  - Rapid Delivery Expert
  - Full-Stack Capabilities
- Inspirational quote

#### 3. **Featured Project - MoviesHub Netflix Clone**
- Detailed showcase of the flagship project
- Key features listed with icons
- Technology stack badges
- Project metrics (10 days, 7 platforms, 50,000+ movies)
- Visual mockup with feature highlights

#### 4. **Other Major Projects**
- **PicShine AI** - AI-powered photo enhancement (Google Gemini + Cloudinary)
- **IndiaStream** - OTT platform with live TV (React + Node.js + Socket.io)
- **AutoDrop** - Automated dropshipping system (Alibaba API + Selenium)
- **MooseHub** - Campus social network (50k+ potential users)
- **E-commerce Clone** - Amazon-style app with payment gateway

Each project card includes:
- Icon and title
- Description
- Technology badges
- Key features with checkmarks

#### 5. **Technical Skills**
Organized into 7 categories:
- **Flutter & Cross-Platform** - Progress bars showing expertise levels
- **State Management** - Riverpod, Bloc, Provider, GetX
- **Backend & Cloud Services** - Appwrite, Firebase, Supabase, APIs
- **Architecture & Patterns** - Clean Architecture, MVVM, Repository Pattern
- **Other Technologies** - Python, Node.js, C++, Java, React
- **Tools & DevOps** - Git, Figma, Postman, Docker, CI/CD
- **APIs & Integrations** - TMDB, Payment Gateways, Google Gemini

Skills displayed with:
- Color-coded tags (Expert: Blue, Advanced: Green, Intermediate: Orange)
- Hover effects for interactivity

#### 6. **Key Achievements**
Six achievement cards showcasing:
- 🏆 Hackathon Winner (Top 5 out of 800+)
- ⚡ Rapid Development (Netflix clone in 10 days)
- 🚀 Production Apps (12+ deployed)
- 📚 Self-Taught Expert (8 months mastery)
- ☁️ Cloud Deployment (Appwrite Cloud)
- 🎓 Bootcamp Graduate (Masai x10x Cohort)

#### 7. **Experience & Education Timeline**
Visual timeline with:
- **Software Development Intern** at Windows Software (Jun-Jul 2025)
- **Masai School** Full Stack Bootcamp (Graduated 2025)
- **B.Sc Information Technology** (2022-2025)

#### 8. **Contact Section**
- Contact methods (Email, Phone, Location)
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Functional contact form with validation
- Real-time notification system

#### 9. **Footer**
- Brand logo and tagline
- Quick navigation links
- Social media connections
- Copyright notice with animated heart

### 🚀 Interactive Features

- **Sticky Navigation** - Smooth scrolling with active link highlighting
- **Mobile Menu** - Hamburger menu for responsive navigation
- **Scroll-to-Top Button** - Appears after scrolling down
- **Animated Progress Bars** - Triggered when skills section comes into view
- **Counter Animation** - Stats numbers animate on page load
- **Parallax Effects** - Background orbs move with scroll
- **Card Tilt Effect** - 3D hover effect on project and achievement cards
- **Form Validation** - Client-side validation with helpful error messages
- **Toast Notifications** - Beautiful notification system for user feedback
- **Intersection Observer** - Elements fade in as they enter viewport

### 🛠️ Technical Implementation

- **Pure HTML5, CSS3, JavaScript** - No frameworks, lightweight and fast
- **CSS Custom Properties** - Easy theming and color customization
- **Flexbox & Grid** - Modern layout techniques
- **CSS Animations & Transitions** - Smooth, performant animations
- **Font Awesome 6.5.1** - Comprehensive icon library
- **Google Fonts** - Inter (body) and Fira Code (monospace)
- **Semantic HTML** - Proper structure for SEO and accessibility
- **Mobile-First Design** - Responsive breakpoints at 1024px, 768px, 480px

---

## 📂 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # Complete styling with dark theme
├── js/
│   └── script.js       # Interactive features and animations
└── README.md           # Project documentation (this file)
```

---

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. No build process required - it's a static website!

### Deployment Options

#### Option 1: Using the Publish Tab (Recommended)
1. Go to the **Publish tab** in this platform
2. Click the **Publish** button
3. Your portfolio will be live with a public URL

#### Option 2: Manual Deployment
Deploy to any static hosting service:
- **Netlify** - Drag & drop deployment
- **Vercel** - GitHub integration
- **GitHub Pages** - Free hosting for GitHub repos
- **Cloudflare Pages** - Fast global CDN
- **AWS S3 + CloudFront** - Enterprise-grade hosting

---

## 🎨 Customization Guide

### Updating Personal Information

1. **Contact Details** (in `index.html`):
   - Email: Search for `siddharthkhanna542@gmail.com`
   - Phone: Search for `+91 89683 21566`
   - Location: Search for `Saharanpur, Uttar Pradesh, India`

2. **Social Media Links** (in `index.html`):
   - Replace `href="#"` with actual profile URLs
   - GitHub: `.social-link.github`
   - LinkedIn: `.social-link.linkedin`
   - Twitter: `.social-link.twitter`

3. **Resume Download**:
   - Add your resume PDF to the project
   - Update the `downloadResume` button in `js/script.js` to link to your file

### Customizing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Secondary accent */
    --accent-color: #10b981;       /* Success/highlight */
    --accent-orange: #f59e0b;      /* Warning/info */
    
    --bg-primary: #0a0a0f;         /* Main background */
    --bg-secondary: #111118;       /* Section backgrounds */
    --bg-card: #1e1e2e;           /* Card backgrounds */
}
```

### Adding New Projects

Copy and paste a `.project-card` div in the projects section:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Description here...</p>
    <div class="project-tech">
        <span class="tech-badge">Technology 1</span>
        <span class="tech-badge">Technology 2</span>
    </div>
    <div class="project-features">
        <span><i class="fas fa-check-circle"></i> Feature 1</span>
        <span><i class="fas fa-check-circle"></i> Feature 2</span>
    </div>
</div>
```

---

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Load Time**: Fast initial load with minimal dependencies
- **Mobile-Friendly**: 100% responsive design
- **SEO-Ready**: Semantic HTML with meta tags
- **Accessibility**: WCAG 2.1 compliant

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 To-Do / Future Enhancements

### High Priority
- [ ] Add actual GitHub, LinkedIn, and Twitter profile links
- [ ] Upload resume PDF and link the download button
- [ ] Add project screenshots or demo GIFs
- [ ] Add university name for B.Sc degree

### Medium Priority
- [ ] Add GitHub repo links for each project
- [ ] Include live demo links for deployed projects
- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add testimonials section

### Low Priority
- [ ] Add typing effect for hero subtitle
- [ ] Implement project filtering by technology
- [ ] Add analytics (Google Analytics or similar)
- [ ] Create a service worker for PWA capabilities
- [ ] Add internationalization (multi-language support)

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with detailed description

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to use this template for your own portfolio, but please:
- Update all personal information
- Customize the design to make it your own
- Give credit where appropriate

---

## 📧 Contact

**Siddharth Khanna**

- 📧 Email: siddharthkhanna542@gmail.com
- 📱 Phone: +91 89683 21566
- 📍 Location: Saharanpur, Uttar Pradesh, India
- 💼 GitHub: [Add your link]
- 💼 LinkedIn: [Add your link]

---

## 🙏 Acknowledgments

- **Font Awesome** - Beautiful icons
- **Google Fonts** - Professional typography
- **Inspiration** - Modern portfolio designs from Dribbble and Behance

---

## 📈 Version History

- **v1.0.0** (December 2025)
  - Initial release
  - Complete portfolio with all sections
  - Responsive design
  - Interactive animations
  - Contact form with validation

---

## 🎯 Project Goals

This portfolio website aims to:

1. **Showcase Technical Skills** - Demonstrate Flutter, full-stack, and cross-platform expertise
2. **Highlight Projects** - Present production-ready applications with detailed features
3. **Professional Branding** - Create a strong online presence for job opportunities
4. **User Experience** - Provide an engaging, intuitive browsing experience
5. **SEO Optimization** - Rank well in search engines for relevant keywords

---

## 💡 Tips for Using This Portfolio

1. **Keep It Updated** - Regularly add new projects and skills
2. **Monitor Analytics** - Track visitor behavior to optimize content
3. **Share on Social Media** - Promote your portfolio on LinkedIn, Twitter, etc.
4. **Include in Resume** - Add the portfolio URL to your resume and email signature
5. **Request Feedback** - Ask peers and mentors for improvement suggestions
6. **A/B Testing** - Try different layouts and content to see what works best

---

## 🔍 SEO Keywords

This portfolio is optimized for:
- Flutter Developer
- Cross-Platform Engineer
- Full-Stack Developer
- Mobile App Developer
- Netflix Clone Developer
- Clean Architecture Expert
- Appwrite Developer
- Firebase Developer
- React Developer
- Node.js Developer

---

**Built with ❤️ by Siddharth Khanna**

*Last Updated: December 2025*
