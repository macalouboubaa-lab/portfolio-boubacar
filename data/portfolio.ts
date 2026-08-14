export const personalInfo = {
  name: "Ousseynou Boubacar Cissé",
  //avatar: "/public/profile.jpeg",  //photo
  title: "Développeur Full-Stack Junior",
  subtitle: "Génie Logiciel • Développeur Web • Formateur • Entrepreneur",
  email: "macalouboubaa@gmail.com",
  phone: "77 315 04 50",
  location: "Nordfoire, Dakar, Sénégal / Saint-Louis, Ndiolofene",
  github: "https://github.com/macalouboubaa-lab",
  linkedin: "https://linkedin.com/in/boubacar-cisse",
  status: "Disponible pour de nouveaux projets",
};

export const about = {
  description: "Je suis Ousseynou Boubacar Cissé, Technicien Superieur en Informatique, passionné avec une solide formation en génie logiciel.",
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
];

export const education = [
  {
    degree: "Licence Professionnelle en Génie Informatique",
    school: "Université Gaston Berger de Saint-Louis",
    date: "2024 - 2025",
  },
  {
    degree: "Certificat en Gestion de la Relation Client",
    school: "Business Communication Center",
    date: "Octobre 2025",
  },
  {
    degree: "Baccalauréat S2",
    school: "Lycée Didier Marie, Saint-Louis",
    date: "2021",
  },
];

export const skills = {
  languages: ["C", "Java", "JavaScript", "PHP", "HTML/CSS"],
  databases: ["SQL POSTGRES", "Oracle SQL", "MySQL"],
  tools: ["Eclipse", "VS Code", "Linux", "Windows", "Pack Office"],
  soft: ["Communication commerciale", "Empathie et écoute active", "Leadership", "Télévendeur"],
};

export const skillsCategories = [
  { id: "languages", label: "Langages", items: skills.languages },
  { id: "databases", label: "Base de données", items: skills.databases },
  { id: "tools", label: "Outils", items: skills.tools },
  { id: "soft", label: "Soft Skills", items: skills.soft },
];

export const projects = [
  // ==========================================================
  // PROJET 1 : NIU DEIM (Version initiale)
  // ==========================================================
  {
    id: 1,
    title: "NIU DEIM — Mobilité & Transport Urbain",
    description: "Version initiale du concept de mobilité urbaine. Cette application a servi de prototype et de test pour poser les bases de la plateforme DAKAR MOBILITY, en explorant l'agrégation des transports à Dakar.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase"],
    demo: "https://dakar-mobility-seven.vercel.app",
    github: "https://github.com/macalouboubaa-lab/dakar-mobility",
    category: "Prototype & Mobilité",
  },

  // ==========================================================
  // PROJET 2 : DAKAR MOBILITY (Version finale)
  // ==========================================================
  {
    id: 2,
    title: "DAKAR MOBILITY",
    description: "Plateforme multi-modale qui agrège tous les transports de Dakar (BRT, TER, Cars Rapides, Ndiaga Ndiaye, taxis). Elle permet de trouver le meilleur trajet en combinant prix, durée et correspondances.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase", "Mapbox"],
    demo: "https://dakar-mobility-v2-6sclny8ye-macalouboubaa-labs-projects.vercel.app",
    github: "https://github.com/macalouboubaa-lab/dakar-mobility",
    category: "Fullstack",
  },

  // ==========================================================
  // PROJET 3 : TERANGA — Mobilité & Voyages Transrégionaux
  // ==========================================================
  {
    id: 3,
    title: "TERANGA — Taxis & Voyages Transrégionaux",
    description: "Application inspirée de Yango, mais repensée pour le Sénégal. Elle vise à faciliter la réservation de taxis pour les longs trajets (ex : 'wargaidé') et les voyages entre les régions, tout en simplifiant la mobilité locale.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase", "Mapbox"],
    demo: "https://teranga-theta.vercel.app",
    github: "https://github.com/macalouboubaa-lab/teranga",
    category: "Fullstack",
  },
];

export const contact = {
  email: "macalouboubaa@gmail.com",
  phone: "77 315 04 50",
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
