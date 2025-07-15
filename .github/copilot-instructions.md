<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Funeral Programmes Website - Copilot Instructions

## Project Overview
This is a compassionate, elegant marketing website for a funeral programmes design service built with Next.js 15, TypeScript, and Tailwind CSS.

## Design Principles
- **Tone**: Warm, respectful, and reassuring
- **Colors**: Soft ivory (#FAF9F7), navy (#1F2A44), lavender accent (#8D7BA7)
- **Typography**: Playfair Display for headings, Inter for body text
- **Accessibility**: WCAG 2.2 AA compliance required

## Key Terms to Use
- "personalized tribute"
- "lasting keepsake" 
- "compassionate design"
- "ease your burden"
- "honor your loved one's memory"

## Technical Guidelines
- Use TypeScript strictly
- Follow Next.js 15 App Router patterns
- Implement proper SEO with next-seo
- Use framer-motion for subtle animations
- Ensure mobile-first responsive design
- Include proper aria-labels and accessibility features

## Content Guidelines
- Always maintain respectful, empathetic tone
- Include calls-to-action like "Contact us today for a compassionate consultation"
- Reference "24-hour response time" promise
- Emphasize "unlimited revisions" and "personalized service"

## File Structure
- Components in `/src/components/`
- Pages use App Router in `/src/app/`
- Styles use Tailwind with custom theme
- Images in `/public/gallery/` and `/public/`

## Testing
- Use Playwright for e2e testing
- Jest for unit tests
- Focus on accessibility and form functionality
