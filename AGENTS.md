# Règles IA du projet

## Contexte obligatoire

Avant toute génération de code, lire et respecter :

- `docs/ai-context/prd.md`
- `docs/ai-context/architecture.md`
- `docs/ai-context/règles.md`
- `docs/ai-context/design.md`
- `docs/ai-context/tasks.md`
- `docs/ai-context/memory.md`

## Comportement attendu

1. Toujours charger ce contexte avant de répondre.
2. Respecter les règles de codage définies dans `règles.md`.
3. Mettre à jour `tasks.md` et `memory.md` après chaque session importante.
4. Ne jamais introduire de dépendance sans vérifier `architecture.md`.
5. Signaler tout conflit entre la demande et les fichiers de contexte.

## Principes

- Préserver Next.js App Router et les composants de portfolio existants.
- Réutiliser `components/` avant de créer de nouveaux composants.
- Respecter la direction visuelle Roven.
- Ne pas commiter de secrets ni de fichiers générés.
