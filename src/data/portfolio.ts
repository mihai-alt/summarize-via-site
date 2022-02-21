export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    mobile: string[];
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "ゆみたかな",
  role: "DESIGNER & FULL STACK Developer",
  about:
    "I'm a Full Stack Developer and UI/UX Designer with 4+ years of experience delivering modern, scalable, and user-focused web solutions. I combine clean code, intuitive design, and reliable communication to build products that meet business goals.",
  profileImage: "/images/profile.png",
  blogUrl: "",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/mihai-alt",
      icon: "Github",
    },
    {
      platform: "Email",
      url: "mailto:mihaideclane@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    mobile: [
      "Figma",
      "Adobe XD",
      "Canva",
      "Adobe Illustrator",
      "UI/UX Skills",
      "Adobe Photoshop",
    ],
    libraries: [
      "Hilt",
      "Retrofit",
      "Room",
      "Coroutines",
      "Flow",
      "Bloc",
      "GetIt",
    ],
    web: [
      "REST APIs",
      "Vue.js",
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "PHP",
      "Cloudflare",
      "Node",
      "JavaScript",
      "React",
      "Python",
    ],
    tools: ["Git", "Android Studio", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  experience: [
    {
      company: "Indusat Hutchison Indonesia",
      role: "Senior Full stack developer",
      period: "May, 2022 - Present",
      description: [
        "Built e-commerce platforms and custom management systems.",
        "Developed backend logic, APIs, and database structures.",
        "Integrated third-party services for payments, email, and authentication.",
        "Fixed bugs, optimized performance, and ensured cross-browser compatibility.",
        "Delivered high-quality solutions with ongoing maintenance and support.",
      ],
    },
    {
      company: "Indusat Hutchison Indonesia",
      role: "Web Designer",
      period: "Sep, 2020 - May, 2022",
      description: [
        "Designed responsive and user-friendly website layouts.",
        "Created wireframes, mockups, and interactive prototypes using Figma",
        "Developed modern UI designs focused on usability, accessibility.",
        "Collaborated with developers to ensure perfect implementation across devices.",
        "Improved website performance and user experience through design optimization."
      ],
    },
  ],
  projects: [
    {
      title: "Shopify Store",
      description:
        "A custom Shopify store built for a client in the fashion industry, featuring a modern design, seamless user experience, and integrated payment solutions.",
      techStack: ["JavaScript", "React", "Shopify Liquid", "CSS"],
      link: "/images/projects/wordpress.png",
      github: "",
      thumbnail: "/images/projects/wordpress.png",
    },
    {
      title: "ATS Resume Checker",
      description:
        "An intelligent resume analysis tool that evaluates resumes against job descriptions using AI-powered semantic matching and provides actionable improvement suggestions.",
      techStack: ["React", "Tailwind CSS", "Open AI", "Framer"],
      link: "https://ats-resume-checker-frontend.onrender.com",
      github: "",
      thumbnail: "/images/projects/ATS-Resume-SS.png",
    },
    {
      title: "brand for product",
      description:
        "The first project focused on creating a responsive website design based on the client's requirements. The goal was to demonstrate understanding of UI/UX principles, proper layout structure, typography, color selection, spacing, and responsive design. The project required designing pages that were visually appealing, easy to navigate, and suitable for desktop and mobile devices while maintaining consistency throughout the website.",
      techStack: ["Open AI", "Adobe Photoshop", "UI/UX Skills", "Adobe XD"],
      link: "./images/projects/project(1).png",
      github: "",
      thumbnail: "/images/projects/project(1).png",
    },    
    {
      title: "BookHive- Share Your Thoughts",
      description:
        "A revolutionary platform for book lovers to connect, share, and discover new literary adventures through seamless borrowing and real-time communication.",
      techStack: ["React", "MongoDB", "Google Cloud", "Render", "Socket.io"],
      link: "https://book-hive-frontend.onrender.com/",
      github: "",
      thumbnail: "/images/projects/BookHive-Homepage.png",
    },
    {
      title: "Wordpress Design",
      description:
        "The project focused on troubleshooting a WordPress website after a fatal error occurred due to editing the functions.php file. The task involved researching reliable resources, identifying the likely cause of the error, explaining the recovery process in simple language, and suggesting preventive measures to avoid similar issues in the future. The project emphasized research skills, technical problem-solving, clear communication, and risk management.",
      techStack: ["OpenAI", "Adobe Photoshop", "UI/UX Skills", "Adobe XD"],
      link: "/images/projects/project(2).png",
      github: "",
      thumbnail: "/images/projects/project(2).png",
    },
    {
      title: "Boost AI",
      description:
        "An AI productivity tool using Google Gemini for content generation and task automation. Includes real-time chat and document analysis. Fast, simple, and secure.",
      techStack: ["React", "MongoDB", "Node.js", "Google Gemini", "Express.js"],
      link: "https://boost-ai-chat.vercel.app/",
      github: "",
      thumbnail: "/images/projects/Boost_AI SS.png",
    },
  ],
};
