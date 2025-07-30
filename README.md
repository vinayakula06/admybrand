### README.md

#### Task B: Modern SaaS Landing Page & Component System(live demo: https://admybrand-saivinay.netlify.app )

This project is a modern landing page for "ADmyBRAND AI Suite," a fictional AI-powered marketing tool. The page is built to be visually stunning and highly functional, complete with a reusable component library.

#### Project Overview

The core objective was to create a compelling landing page that meets current design trends and technical standards. The project is designed with a focus on a professional, premium user experience, seamless functionality, and mobile-first responsiveness. The component system ensures reusability and maintainability across the application.

#### Features

The landing page is comprised of the following key sections and features:

* **Hero Section**: A dynamic and engaging introduction with a compelling headline, subtext, and a clear call-to-action.
* **Features Section**: Showcases 6+ key features of the AI tool with descriptive text and icons.
* **Pricing Cards**: Presents three distinct pricing tiers with a clear comparison of features to help users make an informed choice.
* **Testimonials**: A section with customer reviews and photos to build trust and credibility.
* **FAQ Section**: A set of collapsible questions and answers to address common user queries.
* **Footer**: Includes essential links, social media icons, and contact information.
* **Interactive Pricing Calculator**: A bonus feature that allows users to customize their plan and see an estimated cost based on their specific needs.
* **Demo Video**: An embedded YouTube video to visually demonstrate the platform's capabilities.
* **Blog/Resources Section**: A knowledge hub with articles, tips, and free resources to keep users informed and engaged.
* **Advanced Animations**: The site uses a variety of advanced animations, such as smooth scrolling, parallax text, and interactive elements, to create a modern and engaging user experience.

#### UI/UX Design

The design of the landing page is heavily influenced by modern web design trends for 2025:
* **Glassmorphism**: Implemented in components like the `GlassCard` to create a clean, layered look.
* **Subtle Animations**: Uses `framer-motion` to create elegant "animate on scroll" effects and other micro-interactions.
* **Modern Typography**: The site uses a clear typographic hierarchy with readable fonts, as defined in `tailwind.config.ts`, to ensure a professional feel.
* **Smooth Scrolling**: Custom utility functions in `utils/scroll.ts` provide a fluid user experience when navigating between sections.
* **Mobile-First Responsive**: The layout and components are designed to be fully responsive and provide a flawless experience on all devices.

#### Technical Implementation

* **Next.js 14+ with App Router and TypeScript**: The project is built on Next.js, leveraging the App Router for modern routing and TypeScript for type safety.
* **Component Library**: Over 8 reusable UI components have been created, such as `Button`, `GlassCard`, `ContactModal`, and `Drawer`, located in the `components/ui` directory.
* **Modern Styling**: The project is styled using Tailwind CSS and `tailwindcss-animate` for efficient and utility-first styling.
* **Form Handling**: A contact form is implemented for user inquiries, utilizing `react-hook-form` and `zod` for robust form validation.
* **Performance Optimized**: The application is optimized for fast loading and image handling, with configurations in `next.config.mjs` to ignore build errors and unoptimized images during development.

#### Deployment

This project is ready for deployment on the following platforms:

* **Netlify**: The project can also be deployed on Netlify. You will need to set the build command to `npm run build` and the publish directory to `out`.
