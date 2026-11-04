export const personalInfo = {
  name: "Ousseynou Boubacar Cissé",
  //avatar: "/public/profile.jpeg",  //photo
  title: "Développeur Full-Stack & Superviseur IT",
  subtitle: "Passionné par l'architecture logicielle, l'automatisation et le maintien d'une haute disponibilité des systèmes.",
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
    title: "Stagiaire en supervision d'infrastructure",
    company: "InTouch",
    date: "Juin 2026 - Déc 2026",
    description: "Surveillance proactive avec Zabbix et Grafana, gestion des incidents IT et réseaux TCP/IP.",
  },
  {
    title: "Stagiaire en développement logiciel",
    company: "Techno Futur Group",
    date: "Jan 2025 - Juil 2025",
    description: "Intégration WordPress, développement de modules PHP/MySQL et formation.",
  },
  {
    title: "Développeur Full-Stack Freelance",
    company: "Indépendant",
    date: "Jan 2025 - Présent",
    description: "Conception et développement d'applications web full-stack.",
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
  frontend: ["Next.js", "TypeScript", "React", "PHP", "HTML/CSS"],
  databases: ["Supabase", "PostgreSQL", "MySQL"],
  infrastructure: ["Linux", "Zabbix", "Grafana", "Réseaux TCP/IP", "Git"],
};

export const skillsCategories = [
  { id: "frontend", label: "Front/Back", items: skills.frontend },
  { id: "databases", label: "Base de données & BaaS", items: skills.databases },
  { id: "infrastructure", label: "Infra & Supervision", items: skills.infrastructure },
];

export const projects = [
  // ==========================================================
  // PROJET 1 : DAKAR MOBILITY (Version finale)
  // ==========================================================
  {
    id: 2,
    title: "DAKAR MOBILITY",
    description: "Plateforme multi-modale qui agrège tous les transports de Dakar (BRT, TER, Cars Rapides, Ndiaga Ndiaye, taxis). Elle permet de trouver le meilleur trajet en combinant prix, durée et correspondances.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase", "Mapbox"],
    demo: "https://dakar-mobility-v2.vercel.app/",
    github: "https://github.com/macalouboubaa-lab/dakar-mobility",
    category: "Fullstack",
  },

  // ==========================================================
  // PROJET 2 : TERANGA — Mobilité & Voyages Transrégionaux
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
  {
    id: 4,
    title: "SAMA CV",
    description: "Outil de création de CV permettant de choisir une mise en page, de la modifier dans le navigateur, puis d'imprimer ou d'enregistrer le CV en PDF.",
    image: "",
    tags: ["CV", "Application web"],
    demo: "https://samacv-sigma.vercel.app/",
    github: "",
    category: "Fullstack",
  },
  {
    id: 5,
    title: "NDAR'GO",
    description: "Projet ajouté au portfolio ; sa présentation et ses liens seront renseignés ultérieurement.",
    image: "",
    tags: [],
    demo: "",
    github: "",
    category: "Fullstack",
  },
  {
    id: 6,
    title: "Jump Rope Master",
    description: "Programme de corde à sauter sur huit semaines avec suivi interactif.",
    image: "",
    tags: ["Fitness", "Suivi interactif"],
    demo: "https://app-fitness-puce.vercel.app/",
    github: "",
    category: "Fitness",
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
