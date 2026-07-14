/**
 * =============================================================
 *  YOUR DETAILS LIVE HERE
 * =============================================================
 *  Edit the values in this file to personalize the entire site.
 *  Every page (Home, About, Projects, Services, Contact) reads
 *  from this single file — no need to touch the components.
 * =============================================================
 */

export const profile = {
  // --- Basic identity ---
  name: 'Rudraaksh Singh',
  title: 'Software & Application Developer',
  tagline:
    'I craft fast, reliable, and beautiful web and software experiences — turning ideas into products that people genuinely enjoy using.',
  location: 'India',
  availability: 'Available for freelance & full-time work',
  profileImage: '/profile.png',
  resumeUrl: '/resume', // dedicated printable resume page with a Download PDF button

  // --- Contact ---
  email: 'singhrudraaksh5@gmail.com',
  phone: '+91 96313 07441',

  // --- Social links (update the handles, or remove any you don't use) ---
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
    { label: 'Email', href: 'mailto:singhrudraaksh5@gmail.com' },
  ],

  // --- Quick stats shown on the home page ---
  stats: [
    { value: '3+', label: 'Years Coding' },
    { value: '20+', label: 'Projects Built' },
    { value: '15+', label: 'Happy Clients' },
    { value: '100%', label: 'Dedication' },
  ],
}

// --- About / detailed bio (supports multiple paragraphs) ---
export const about = {
  headline: 'Turning ideas into software people love to use.',
  paragraphs: [
    "Hi, I'm Rudraaksh Singh — a Software and Application Developer with a passion for building clean, efficient, and user-friendly digital products. I work across the web and application stack, bringing ideas to life from the first concept to a polished, production-ready release.",
    'My focus is on writing maintainable code, designing intuitive interfaces, and delivering software that performs. Whether it is a responsive website, a full-featured web application, or a desktop tool, I enjoy owning the problem end-to-end and shipping solutions that make a real difference.',
    "When I'm not coding, I'm exploring new technologies, sharpening my skills, and looking for the next interesting problem to solve.",
  ],
  interests: ['Web Development', 'Software Engineering', 'Problem Solving', 'New Tech', 'Open Source'],
}

// --- Skills grouped by category ---
export const skills = [
  {
    category: 'Web Development',
    items: ['HTML & CSS', 'JavaScript', 'React', 'Next.js', 'Responsive Design'],
  },
  {
    category: 'Software Development',
    items: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
  },
  {
    category: 'Application Development',
    items: ['Cross-Platform Apps', 'API Integration', 'UI Design', 'Databases', 'Deployment'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git & GitHub', 'VS Code', 'REST APIs', 'Testing', 'Version Control'],
  },
]

// --- Work experience (most recent first) ---
export const experience = [
  {
    role: 'Software & Application Developer',
    company: 'Freelance',
    period: 'Present',
    description:
      'Designing and building web and software applications for clients — delivering clean, scalable, and user-focused solutions from concept to deployment.',
  },
  {
    role: 'Web Developer',
    company: 'Personal & Client Projects',
    period: 'Ongoing',
    description:
      'Developing responsive websites and web apps using modern frameworks, with a focus on performance, accessibility, and great user experience.',
  },
  {
    role: 'Application Developer',
    company: 'Independent Projects',
    period: 'Ongoing',
    description:
      'Building cross-platform applications, integrating APIs, and crafting intuitive interfaces that solve real problems.',
  },
]

// --- Education & certifications ---
export const education = [
  {
    credential: 'Computer Science Studies',
    institution: 'Update with your institution',
    period: 'Update years',
  },
  {
    credential: 'Web & Software Development',
    institution: 'Self-taught & Online Learning',
    period: 'Ongoing',
  },
]

// --- Services offered ---
export const services = [
  {
    title: 'Web Development',
    description:
      'Fast, responsive, and SEO-friendly websites and web apps built with modern frameworks and best practices.',
    features: ['React & Next.js', 'Responsive design', 'SEO optimized', 'Performance first'],
  },
  {
    title: 'Software Development',
    description:
      'Robust, maintainable software solutions tailored to your needs — from small utilities to full applications.',
    features: ['Clean architecture', 'Scalable code', 'API development', 'Testing & QA'],
  },
  {
    title: 'Application Development',
    description:
      'Cross-platform applications with intuitive interfaces that work smoothly and feel great to use.',
    features: ['Cross-platform', 'API integration', 'UI/UX focus', 'Deployment support'],
  },
  {
    title: 'Consulting & Support',
    description:
      'Technical guidance, code reviews, and ongoing support to help your projects ship faster and run better.',
    features: ['Code reviews', 'Bug fixing', 'Tech guidance', 'Maintenance'],
  },
]

// --- Portfolio projects ---
export const projects = [
  {
    title: 'Analytics Dashboard',
    category: 'Web App',
    description:
      'A real-time analytics platform with customizable widgets, role-based access, and export tools.',
    image: '/project-1.png',
    tags: ['Next.js', 'JavaScript', 'Dashboard'],
    link: '#',
  },
  {
    title: 'Mobile Commerce App',
    category: 'Application',
    description:
      'A clean shopping application with a seamless checkout flow and smooth, responsive interactions.',
    image: '/project-2.png',
    tags: ['App', 'UI Design', 'API'],
    link: '#',
  },
  {
    title: 'Brand Identity Kit',
    category: 'Design',
    description:
      'A complete brand identity system including logo, palette, and a reusable UI component library.',
    image: '/project-3.png',
    tags: ['Design', 'Branding', 'UI'],
    link: '#',
  },
]

// --- Testimonials ---
export const testimonials = [
  {
    quote:
      'Rudraaksh delivered exactly what we needed — clean code, on time, and with great attention to detail.',
    author: 'Client Name',
    role: 'Project Owner',
  },
  {
    quote:
      'A talented developer who truly understands both the technical and the user side of building software.',
    author: 'Client Name',
    role: 'Startup Founder',
  },
]
