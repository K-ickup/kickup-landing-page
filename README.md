# Kickup - Studio IA & Dev · Applications sur-mesure

## Kickup - Studio IA & Dev · Applications sur-mesure

Landing page officielle de **Kickup**, partenaire de transformation digitale pour PME et ETI (50-500 personnes).

**Positionnement :** Du développement d'applications sur-mesure au déploiement d'agents IA autonomes.

## 🛠️ Stack Technique

### Frontend & Framework
- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Language** : [TypeScript](https://www.typescriptlang.org/)
- **UI Library** : [Shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Icons** : [Lucide React](https://lucide.dev/)

### Backend & Services
- **Formulaire** : [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email** : [Resend](https://resend.com/)
- **Déploiement** : [Vercel](https://vercel.com/)

## 📄 Structure du Site

### Sections principales
- [x] **Hero** - Hook émotionnel + CTAs audit gratuit
- [x] **Services** - 3 offres (Dev web, IA intégrée, Agents autonomes)
- [x] **Use Cases** - 3 cas clients détaillés (Leads, Support, Workflows)
- [x] **Pourquoi Kickup** - Différenciation vs no-code
- [x] **Stack Technique** - Technologies utilisées
- [x] **Processus** - Méthodologie en 3 étapes
- [x] **FAQ** - 10 questions optimisées conversion
- [x] **Contact** - Formulaire avec Resend

## ✨ Fonctionnalités

### UI/UX
- [x] Design responsive mobile-first
- [x] Animations fluides et professionnelles
- [x] Navigation sticky avec smooth scroll
- [x] Gradient signature Kickup (cyan → violet)

### SEO & Performance
- [x] Metadata optimisées (OpenGraph, Twitter Cards)
- [x] Sitemap.xml dynamique
- [x] Structure HTML sémantique
- [x] Next.js Image optimization
- [x] Lighthouse score 90+

### Conversion
- [x] Formulaire de contact opérationnel
- [x] CTAs stratégiques (Audit gratuit 30min)
- [x] FAQ gestion d'objections (10 questions)
- [x] Trust badges (Production-ready, 3 semaines, Support inclus)

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+
- npm ou yarn
- Compte [Resend](https://resend.com) (gratuit)

### Installation
```bash
# Cloner le repository
git clone https://github.com/[username]/kickup-lp-v2.git
cd kickup-lp-v2

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Ajouter votre RESEND_API_KEY dans .env.local

# Lancer en développement
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

### Variables d'environnement

Créer un fichier `.env.local` à la racine :
```bash
# Resend API (https://resend.com/api-keys)
RESEND_API_KEY=re_votre_cle_ici
```

### Commandes disponibles
```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Linter
npm run lint

# Type check
npm run type-check
```

## 🎨 Personnalisation

### Identité visuelle

**Couleurs de marque** (définies dans `app/globals.css`) :
```css
--accent: #00d4ff
--accent2: #7c3aed
```

**Logos** (dans `/public/`) :
- `kickup-logo.png` - Logo principal (navbar, footer)

### Contenu

**Sections :** `components/layout/sections/`
- `hero.tsx` - Hero avec hook émotionnel
- `services.tsx` - 3 services principaux
- `use-cases.tsx` - Cas clients avec ROI
- `benefits.tsx` - Différenciation
- `tech-stack.tsx` - Technologies
- `clients-band.tsx` - Bandeau logos clients
- `testimonials.tsx` - Témoignages
- `about.tsx` - Présentation équipe
- `process.tsx` - Méthodologie
- `cta-banner.tsx` - Bannière CTA intermédiaire
- `faq.tsx` - 10 questions
- `contact.tsx` - Formulaire Resend

**Configuration :**
- Tarifs FAQ : `components/layout/sections/faq.tsx`
- Email destination : `app/api/contact/route.ts`
- Metadata SEO : `app/layout.tsx` et `app/page.tsx`

## 📧 Configuration Email (Resend)

### Setup basique (gratuit, 3000 emails/mois)

1. Créer un compte sur [resend.com](https://resend.com)
2. Récupérer l'API Key (Dashboard → API Keys)
3. Ajouter dans `.env.local` : `RESEND_API_KEY=re_...`
4. Emails envoyés depuis `onboarding@resend.dev`

### Setup avancé (domaine vérifié)

Pour envoyer depuis `contact@kickup.studio` :

1. Resend → Domains → Add Domain (`kickup.studio`)
2. Ajouter les DNS records chez votre hébergeur (OVH, Gandi, etc.)
3. Attendre validation (5-30 min)
4. Modifier `app/api/contact/route.ts` :
```typescript
   from: 'contact@kickup.studio',
```

**Documentation :** [resend.com/docs/send-with-nextjs](https://resend.com/docs/send-with-nextjs)

## 🎯 Roadmap

### v2.1 (Prochainement)
- [ ] Analytics (Vercel Analytics ou Plausible)
- [ ] Image OpenGraph personnalisée (1200x630px)
- [ ] Blog/Articles (SEO longue traîne)

### v3.0 (Futur)
- [ ] Portfolio/Case studies détaillés
- [ ] Espace client (dashboard)
- [ ] Multi-langue (EN/FR)
- [ ] A/B testing (Hero variants)

## 📊 Performance

**Lighthouse Score (cibles) :**
- Performance : 95+
- Accessibility : 100
- Best Practices : 100
- SEO : 100

**Optimisations :**
- Server Components (Next.js 14)
- Image optimization (next/image)
- Font optimization (next/font)
- Code splitting automatique
- CSS minification

## 🔒 Sécurité & RGPD

- [x] Validation formulaire côté client (Zod)
- [x] Validation côté serveur (API route)
- [x] Rate limiting Resend (protection spam)
- [x] Pas de cookies tiers
- [x] Hébergement EU (Vercel Frankfurt)
- [x] Conformité RGPD native

## 📞 Contact & Support

**Email** : contact@kickup.studio
**Site** : [https://kickup.studio](https://kickup.studio)
**LinkedIn** : [linkedin.com/company/kickup](https://linkedin.com/company/kickup)

## 🤝 Contribution

Ce projet est privé et maintenu par l'équipe Kickup.

Pour toute suggestion ou bug report, contactez-nous à dev@kickup.studio

## 📝 License

© 2026 Kickup (2MS-IT EURL). Tous droits réservés.

**Structure juridique :** EURL - Siren 949 256 762
**Domiciliation :** Paris, France

---

**Built with ❤️ by Kickup** - Transformons vos processus métiers avec l'IA
