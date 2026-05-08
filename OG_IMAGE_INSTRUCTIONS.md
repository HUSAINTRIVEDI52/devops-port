# OG Image Creation Instructions

## Critical: Create og-image.png

You need to create an Open Graph image for social media sharing. This image appears when someone shares your portfolio on Facebook, LinkedIn, Twitter, etc.

## Specifications

- **Dimensions:** 1200px × 630px
- **Format:** PNG
- **Location:** `public/og-image.png`
- **File size:** Keep under 1MB for fast loading

## Design Recommendations

### Option 1: Use Canva (Easiest)
1. Go to [Canva.com](https://canva.com)
2. Create custom size: 1200 × 630 px
3. Use dark background (#000000 or #0E0E14)
4. Add your name in large text: "HUSAIN TRIVEDI"
5. Add subtitle: "Freelance DevOps Engineer | AWS, Kubernetes, CI/CD"
6. Add tech icons: AWS, Docker, Kubernetes, Jenkins
7. Add gradient accents (cyan #06B6D4, purple #A855F7)
8. Download as PNG and save to `public/og-image.png`

### Option 2: Use Figma
1. Create 1200×630 frame
2. Dark background with gradient
3. Your name + title
4. Tech stack icons
5. Export as PNG

### Option 3: Use Online OG Image Generator
- [og-image.vercel.app](https://og-image.vercel.app/)
- [ogimage.gallery](https://www.ogimage.gallery/)

### Option 4: Quick Placeholder (Temporary)
If you need something immediately, use this simple design:
- Black background
- White text: "Husain Trivedi"
- Cyan text: "DevOps Engineer"
- Your GitHub profile picture

## Content to Include

**Must have:**
- Your name: "HUSAIN TRIVEDI"
- Your role: "Freelance DevOps Engineer"

**Nice to have:**
- Key skills: AWS, Kubernetes, Docker, CI/CD
- Location: Ahmedabad, India
- Status: "Available for Projects"
- Your photo/avatar
- Tech icons/logos

## Color Scheme (Match your portfolio)

- Background: `#000000` (black)
- Primary text: `#FFFFFF` (white)
- Accent 1: `#06B6D4` (cyan)
- Accent 2: `#A855F7` (purple)
- Accent 3: `#EC4899` (pink)

## Example Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Your Photo]    HUSAIN TRIVEDI                │
│                  Freelance DevOps Engineer      │
│                                                 │
│  ☁️ AWS  🐳 Docker  ☸️ Kubernetes  🔄 CI/CD    │
│                                                 │
│  📍 Ahmedabad, India                           │
│  ✅ Available for Projects                     │
│                                                 │
│  husaintrivedi.site                            │
└─────────────────────────────────────────────────┘
```

## Testing

After creating the image:

1. Save it as `public/og-image.png`
2. Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
4. Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Current Status

⚠️ **CRITICAL:** The OG image is currently missing. Social media shares will not show a preview image until this is created.

The metadata is already configured to use: `https://husaintrivedi.site/og-image.png`

Once you create the image and save it to `public/og-image.png`, rebuild and redeploy your site.
