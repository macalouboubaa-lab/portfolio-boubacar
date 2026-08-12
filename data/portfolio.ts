// ============================================================
// DONNÉES CENTRALISÉES — Portfolio Boubacar Cissé
// ============================================================

export const personalInfo = {
  name: "Boubacar Cissé",
  title: "Développeur Full-Stack Junior",
  subtitle: "Génie Logiciel • Développeur Web • Formateur • Entrepreneur",
  email: "macalouboubaa@gmail.com",
  phone: "77 315 04 50 / 77 544 77 48",
  location: "Nordfoire, Dakar, Sénégal",
  github: "https://github.com/macalouboubaa-lab",
  linkedin: "https://linkedin.com/in/boubacar-cisse",
  status: "Disponible pour de nouveaux projets",
};

export const about = {
  description: `
    Je suis Boubacar Cissé, développeur web passionné et créatif avec une solide formation en génie logiciel. 
    Fort d'une expérience en conception de sites web, en formation et en entrepreneuriat, 
    je mets mon expertise au service de projets innovants et impactants.
  `,
  mission: "Créer des expériences numériques qui allient performance, esthétique et simplicité.",
};

export const experiences = [
  {
    title: "Développeur Web",
    company: "Conception et création de sites web avec WordPress",
    date: "2023 - Présent",
    description: "Création de sites vitrines et e-commerce sur mesure.",
  },
  {
    title: "Entrepreneur & Commercial",
    company: "Vente de vêtements, parfums et équipements sportifs",
    date: "2021 - Présent",
    description: "Gestion de la relation client et développement commercial.",
  },
  {
    title: "Freelance Informatique",
    company: "Cours et services numériques",
    date: "2020 - Présent",
    description: "Formation à l'informatique, création de CV et design graphique.",
  },
];

export const education = [
  {
    degree: "Licence Professionnelle en Génie Informatique",
    school: "Université Gaston Berger de Saint-Louis",
    date: "2024 - 2025",
  },
  {
    degree: "Certificat en Gestion de la Relation Client & Techniques de vente",
    school: "Business Communication Center",
    date: "2025",
  },
  {
    degree: "Baccalauréat S2",
    school: "Lycée Didier Marie, Saint-Louis",
    date: "2021",
  },
];

export const skills = {
  languages: ["C", "Java", "JavaScript", "PHP", "HTML/CSS"],
  databases: ["SQL POSTGRES", "Oracle SQL", "MySQL", "PHPMyAdmin"],
  tools: ["Eclipse", "VS Code", "Linux", "Windows", "Pack Office"],
  soft: [
    "Communication commerciale",
    "Empathie et écoute active",
    "Leadership éducatif",
    "Télévendeur et Téléconseiller",
  ],
};

export const skillsCategories = [
  {
    id: "languages",
    label: "Langages",
    items: skills.languages,
  },
  {
    id: "databases",
    label: "Base de données",
    items: skills.databases,
  },
  {
    id: "tools",
    label: "Outils & Systèmes",
    items: skills.tools,
  },
  {
    id: "soft",
    label: "Soft Skills",
    items: skills.soft,
  },
];

export const projects = [
  {
    id: 1,
    title: "TERANGA — VTC & Livraison",
    description: "Application de VTC et livraison pour le Sénégal avec Next.js, Supabase et Mapbox.",
    image: "/images/projects/teranga.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Mapbox", "Tailwind"],
    demo: "https://teranga.vercel.app",
    github: "https://github.com/macalouboubaa-lab/teranga",
    category: "Fullstack",
  },
  {
    id: 2,
    title: "DAKAR MOBILITY",
    description: "Plateforme multi-modale de mobilité urbaine pour Dakar, agrégant tous les transports publics.",
    image: "/images/projects/dakar-mobility.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Mapbox", "Tailwind"],
    demo: "https://dakar-mobility.vercel.app",
    github: "https://github.com/macalouboubaa-lab/dakar_mobility",
    category: "Fullstack",
  },
  // Ajoutez vos autres projets ici
];

export const contact = {
  email: "macalouboubaa@gmail.com",
  phone: "77 315 04 50",
  socials: [
    { name: "GitHub", url: "https://github.com/macalouboubaa-lab", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/boubacar-cisse", icon: "Linkedin" },
    { name: "Email", url: "mailto:macalouboubaa@gmail.com", icon: "Mail" },
  ],
};

export const languages = [
  { name: "Français", level: "Bilingue" },
  { name: "Anglais", level: "Intermédiaire" },
];

export const interests = [
  "Basketball (12 ans d'expérience)",
  "American Football",
  "Natation",
  "Nouvelles technologies",
  "Aviation & Aéronautique",
  "Arts créatifs",
  "Cuisine",
  "Cultures étrangères",
];