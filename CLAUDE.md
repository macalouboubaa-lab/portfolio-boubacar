# CLAUDE.md - Règles du projet Portfolio

## Contexte

Portfolio personnel de Ousseynou Boubacar Cissé. Site vitrine et galerie.
Stack : Next.js (App Router), TypeScript, Tailwind CSS, déployé sur Vercel.

## Règles absolues (NE JAMAIS ENFREINDRE)

- **NE JAMAIS** modifier la structure des dossiers (`app/`, `components/`, `public/`) sans autorisation explicite.
- **NE JAMAIS** supprimer ou renommer un fichier existant sans vérifier son utilisation dans tout le projet.
- **NE JAMAIS** ajouter de nouvelles dépendances (`npm install`) sans validation humaine.
- **TOUJOURS** vérifier la sensibilité à la casse des chemins d'images (les fichiers dans `public/` doivent être en minuscules et le code doit correspondre exactement).
- **TOUJOURS** exécuter `npm run build` localement après une modification majeure pour vérifier qu'il n'y a pas d'erreur.

## Commandes utiles

- `npm run dev` : serveur de développement
- `npm run build` : build de production (à lancer avant de commit)
- `npm run lint` : vérification du code
