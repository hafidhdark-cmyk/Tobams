# Tobams Group – Frontend Intern Assessment

## Live URL
> 

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide React (icons)

## Setup Instructions
1. Clone the repository
```bash
   git clone <https://github.com/hafidhdark-cmyk/Tobams.git>
   cd <tobams>
```
2. Install dependencies
```bash
   npm install
```
3. Run the development server
```bash
   npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000)

## Figma Design
[View Figma Design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Design Decisions & Assumptions
- Used `next/image` for all images and `next/font` for Nunito & Nunito Sans fonts.
- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) used exclusively — no custom media queries.
- All layout shifts between mobile and desktop handled via Tailwind's responsive utilities.
- Hamburger menu implemented with local state using React `useState`.
- Testimonials section uses a carousel on mobile and a 3-card grid on desktop.
- Minor color approximations were made where exact Figma tokens were not extractable.

## AI Disclosure
This project was built with the assistance of Claude (Anthropic) as a coding assistant for component scaffolding and Tailwind styling. All code was reviewed, understood, and manually integrated by the developer.

## Known Issues
- None at time of submission.