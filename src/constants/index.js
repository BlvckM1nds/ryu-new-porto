import projectCM from "../assets/projects/centralmedica.webp";
import projectDSW from "../assets/projects/dapoersariwangi.webp";
import projectHI from "../assets/projects/hematindonesia.webp";
import projectSOI from "../assets/projects/soindustri.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications and data solutions. With ${new Date().getFullYear() - 2022}+ years of hands-on experience, I have honed my skills in front-end technologies, as well as back-end technologies, cloud technologies, and data-driven technologies. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Aug 2025 - Present",
    role: "Software Engineer Level 1",
    company: "Dexa Group",
    description: `Involved on Manufacturing squad, developed Product Lifecycle Management system integrated with several external SaaS (e.g. Labware, Oracle, etc.).`,
    technologies: ["React", "Redux", "Zustand", "Node.js", "NestJS", "Express", "TypeORM", "DBeaver", "Shadcn UI", "Ant Design", "Framer Motion"],
  },
  {
    year: "Jul 2024 - Aug 2025",
    role: "Junior Software Engineer",
    company: "Dexa Group",
    description: `Developed and maintained a scalable micro front-end PWA, engineered RESTful APIs, optimized logging and database queries, and contributed to the Consumer Health Dexa (CHD) project by building solutions for marketing data collection, call plan scheduling, sellout tracking, and event location analysis for fieldforce teams.`,
    technologies: ["React", "Redux", "Zustand", "Node.js", "NestJS", "Express", "TypeORM", "DBeaver", "Shadcn UI", "Ant Design", "Framer Motion"],
  },
  {
    year: "Apr 2024 - Jul 2024",
    role: "Data Governance Intern",
    company: "Sinar Mas Land",
    description: `Developed and deployed APIs using Flask, Docker, and Azure Container Apps for real-time data transfer from SAP (CX & S/4HANA) to an SQL Server MDM database. Automated sequential execution of Informatica jobs with APIs achieving 50-200ms response times. Built and managed frontend and backend operations for MDM web-app development while overseeing Git branch management and team updates to ensure seamless integration and collaboration.`,
    technologies: ["Flask", "React", "Informatica", "Docker", "Azure", "SQL Server"],
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Data Management & Reporting Intern",
    company: "Sinar Mas Land",
    description: `Contributed to creating end-year vendor performance evaluation reports using Microsoft Excel, developed real-time interactive dashboards for daily vendor performance with Power BI, and assisted with monthly construction progress data entry.`,
    technologies: ["Power BI", "Microsoft Excel", "Adobe Photoshop"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    description: `Gained knowledge of Google Cloud Platform and cloud service cost structures, and served as a backend engineer on a Capstone Project, leveraging Node.js, Cloud SQL, Docker, and Cloud Run for scalable API development and deployment.`,
    technologies: ["Docker", "GCP", "Node.js", "Express", "MySQL"],
  },
  {
    year: "Feb 2023 - Jul 2023",
    role: "Data Analyst Intern",
    company: "Astra Credit Companies",
    description: `Developed interactive dashboards for Daihatsu's accounts receivable and weekly B2B performance using Looker Studio and Tableau connected to SQL Server views, streamlined daily data preparation with SQL procedures and triggers to eliminate 2-3 manual workflows, and analyzed direct and indirect selling data using Microsoft Excel.`,
    technologies: ["SQL Server", "Looker Studio", "Tableau", "Microsoft Excel"],
  },
  {
    year: "Nov 2022 - Dec 2022",
    role: "Frontend Web Developer Intern",
    company: "Seeds",
    description: `Fixed bugs on the user login and OTP authorization page, translated UI designs from Figma into structured React JSX and Tailwind CSS code, and maintained web functionality by synchronizing local branches with the production Git branch.`,
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Office Administrative Management",
    company: "Central Medica",
    image: projectCM,
    description: "Developing and managing back-office administrative processes for Central Medica, focusing on streamlining internal operations. Key responsibilities included overseeing inventory management, handling order processing, and maintaining accurate records to support overall business efficiency.",
    technologies: ["Next.js", "React", "NestJS", "TypeORM", "PostgreSQL", "MongoDB", "Jenkins"],
  },
  {
    title: "Shipment Tracking System",
    company: "Hemat Indonesia",
    image: projectHI,
    description: "Developing an admin page with a module focused on tracking evidence for shipment processes, featuring barcode scanner integration, webcam-triggered evidence capture, and duplicate airwaybill validation. The system optimizes operational efficiency by limiting evidence submissions per airwaybill to prevent duplicate shipments and reduce company losses.",
    technologies: ["Next.js", "React", "Fiber", "GCP", "Docker", "GORM", "PostgreSQL", "Jenkins", "Shadcn UI"],
  },
  {
    title: "Marketing Channel",
    company: "Dapoer Sariwangi",
    image: projectDSW,
    description: "Developing a reservation web application to improve customer experience and operational efficiency, with features including restaurant profiles, web-based menu information, and room reservation functionality.",
    technologies: ["Next.js", "NestJS", "Prisma ORM", "PostgreSQL", "Cloudinary"],
  },
  {
    title: "E-Commerce Website",
    company: "PT Sinar Ogan Industri",
    image: projectSOI,
    description: "Developed an end-to-end e-commerce platform using the MERN stack for the web application and Flask for an item-based collaborative filtering machine learning model. Key features included a stock tracker for inventory management, targeted item-based recommendations, and role-based user pages.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Flask"],
  },
];

export const CONTACT = {
  address: "BSD City, Tangerang, Banten 15339",
  phoneNo: "+62 895 2307 7397",
  email: "ryu.alvano@outlook.com",
};
