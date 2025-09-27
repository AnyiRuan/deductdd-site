# DeductDD Marketing Site (Next.js + Tailwind)

Production-ready marketing website for **DeductDD**.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Deploy to Netlify
1. Create a new site from Git or drag & drop the project folder in Netlify UI.
2. Build command: `npm run build`
3. Publish directory: `.next` (Netlify will auto-detect Next.js; on newer plans use Next.js runtime plugin if prompted).

## Deploy to Vercel
- Click **New Project** → import repo → Framework: Next.js → Deploy.

## Customize
- Edit texts in `app/(marketing)` pages.
- Replace `/public/app-icon.svg` with your logo.
- Update address in `components/Footer.tsx`.
- Replace App Store / Google Play links in `components/DownloadButtons.tsx`.
```

