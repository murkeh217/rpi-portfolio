# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and provides a way for potential clients or employers to get in touch.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Dedicated section to highlight your work
- **Skills Display**: Visual representation of technical skills
- **Smooth Navigation**: Smooth scrolling between sections

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information

1. **Update personal details** in the following files:
   - `src/components/Hero.tsx` - Name and introduction
   - `src/components/About.tsx` - About me section
   - `src/components/Contact.tsx` - Contact information
   - `src/app/layout.tsx` - Meta tags and SEO information

2. **Update projects** in `src/components/Projects.tsx`:
   - Replace the sample projects with your own
   - Add project images, descriptions, and links
   - Update technology stacks

3. **Update skills** in `src/components/Skills.tsx`:
   - Modify skill categories and proficiency levels
   - Add or remove technologies

4. **Social Links**: Update social media links in `src/components/Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.ts`
- Fonts: Modify font settings in `src/app/layout.tsx`
- Components: Each component has its own styling that can be customized

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero/landing section
    ├── About.tsx           # About section
    ├── Projects.tsx        # Projects showcase
    ├── Skills.tsx          # Skills and technologies
    ├── Contact.tsx         # Contact form and info
    └── Footer.tsx          # Site footer
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Connect your Git repository and deploy
- **AWS Amplify**: Use the Amplify console for deployment
- **Static Export**: Run `npm run build` and deploy the `out` directory

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - UI library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

⭐ Star this repository if you found it helpful!
