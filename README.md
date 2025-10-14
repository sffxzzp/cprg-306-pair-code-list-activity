# Pair Programming Lab: Card Components in Next.js with Git & Tailwind

## Objective

Work in teams of 2-3 using the driver-navigator method to build a reusable card component system that renders product data (coffee beans and teas) from a JavaScript array. You'll practice collaborative coding, component extraction, visual design with Tailwind CSS, and version control with Git.

---

## Overview & Timeline

- **Setup Phase:** 10 minutes (fork, add collaborators, clone locally)
- **Planning Phase:** 15 minutes (review data structure, sketch component hierarchy, plan Tailwind styling)
- **Coding Cycles:** 2-3 cycles (12-15 minutes each cycle + 3-5 minutes transition)
- **Debrief:** 10 minutes
- **Total Time:** ~70-90 minutes

---

## Roles & Responsibilities

### Driver

- Controls the keyboard and types the code
- Focuses on implementation details (writing JSX, Tailwind classes, component props)
- Asks clarifying questions if implementation details are unclear
- Does NOT plan ahead—focuses on the current task
- **Pushes the commit** when the cycle is complete

### Navigator

- Guides the driver through the current task
- Provides specific, step-by-step instructions ("Extract the card structure into a new file called CardItem.jsx")
- Explains the "why" behind decisions ("We're extracting this into its own component so we can reuse it in the map")
- Watches for logic errors, accessibility issues, and coding patterns
- Stays present and engaged—ask the driver clarifying questions to deepen understanding

### Next Navigator (Team of 3 only)

- Plans the high-level next steps after the current cycle
- Reviews the data structure and sketches out what JSX structure will be needed
- Researches Tailwind utilities if needed (e.g., "How do I center content with Tailwind?")
- Prepares a 2-3 minute briefing on the next implementation step
- Asks clarifying questions to refine the team's approach

---

## Setup Phase (10 minutes)

### One team member (the **Repo Owner**):

1. Fork the provided starter repo to their GitHub account
2. Add all other team members as **Collaborators** (Settings → Collaborators → Add people)
3. Share the fork URL in your team chat
4. All team members clone the repo locally: `git clone <repo-url>`

### All team members:

- Verify that the starter Next.js project runs: `npm run dev`
- Confirm that the project structure is ready (Prettier and ESLint are pre-configured)

---

## Phase 1: Planning (15 minutes)

**All team members participate.**

Before you write any code, plan your approach at a high level.

### Step 1: Review the Product Data Structure (5 minutes)

The starter repo contains a file `/app/data/products.js` with an array of 9 coffee and tea products. Each object has this structure:

```javascript
{
  id: 1,
  title: "Ethiopian Yirgacheffe",
  subtitle: "Light Roast Single-Origin",
  description: "Bright, fruity notes with hints of blueberry and citrus. Perfect for pour-over or espresso.",
  price: 14.99,
  category: "coffee",
  imagePath: "path-to-img.png",
  cta: "Add to Cart"
}
```

**Familiarize yourselves with the data.** Open `/src/data/products.js` and read through all 9 products.

### Step 2: Sketch Your Component Hierarchy (5 minutes)

Discuss as a team and document the following:

1. **Component Structure:** You will create at least two components:
   - `CardItem.jsx` – renders a single card (receives product data as props)
   - `CardLayout.jsx` – renders the grid of cards (maps over the products array and renders multiple CardItem components)

2. **Component Props:** What data will `CardItem` need to receive?
   - title, subtitle, description, imageUrl, price, cta?
   - Any other data?

3. **Grid Layout:** How will the cards be laid out on the page?
   - How many columns on desktop? On mobile?
   - What spacing between cards?
   - Should the cards have equal heights?

4. **Visual Hierarchy:** Looking at the card structure, what visual emphasis do you want?
   - The title (h3) should stand out
   - The subtitle should be secondary but visible
   - The description should be readable but not shout
   - The buttons/links should be distinct

5. **Color & Typography Decisions:**
   - Will you use a color palette? (e.g., neutral background, accent color for buttons)
   - Font choices for headings, body text, labels?
   - Will cards have shadows? Borders? Hover effects?

### Step 3: Plan Your Implementation Order (5 minutes)

Decide on the order of your coding cycles. For example:

- **Cycle 1:** Import products data into a page component, render the data in a simple list (no styling yet). Extract into CardLayout and CardItem components.
- **Cycle 2:** Add Tailwind styling to CardLayout (grid, spacing, responsive design). Style the basic card structure.
- **Cycle 3:** Add detailed styling to CardItem (typography, colors, button styling, hover effects, shadows).

**Document your plan** in a comment at the top of your main page file (e.g., `/src/app/page.jsx`):

```javascript
/*
TEAM PLAN:
Cycle 1 (Driver: [name]): Extract components, import data, render unstyled cards
Cycle 2 (Driver: [name]): Build responsive grid layout with Tailwind
Cycle 3 (Driver: [name]): Style card details, buttons, typography, and add hover effects

Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
Colors: Dark bg (#1a1a1a), white cards, accent green (#10b981) for buttons
*/
```

**Designate a note-taker** to capture this plan and share it with the team.

---

## Phase 2: Coding Cycles (2-3 cycles of 12-15 minutes each)

### General Structure of Each Cycle

- 12-15 minutes: Driver + Navigator actively code
- 3-5 minutes: Transition, commit, and Next Navigator briefing
- Roles rotate

### Cycle Structure & Role Rotation

**Example for a team of 3:**

- Cycle 1: Alice (driver), Bob (navigator), Carol (next navigator)
- Cycle 2: Bob (driver), Carol (navigator), Alice (next navigator)
- Cycle 3: Carol (driver), Alice (navigator), Bob (next navigator)

**Example for a team of 2:**

- Cycle 1: Alex (driver), Jordan (navigator)
- Cycle 2: Jordan (driver), Alex (navigator)
- Cycle 3: Alex (driver), Jordan (navigator)

### During Each Coding Session

**Navigator:**

- Be specific with instructions. Instead of "style the card," say: "Add `bg-white rounded-lg shadow-md p-6` to the article element"
- Explain the "why": "Tailwind's `rounded-lg` gives us a consistent border radius that matches our design system. `shadow-md` creates the elevation effect we planned"
- Reference the plan and data structure: "Remember, the product object has `title`, `subtitle`, and `description` properties. We need to map over those in the component"
- If something isn't working, troubleshoot together: "Let's check the browser console for errors" or "Did you pass the prop to the component?"
- Point out opportunities to refine the code: "That inline Tailwind class string is getting long. Should we consider using `clsx()` or `cn()` to keep it readable?"

**Driver:**

- Type the code the Navigator is guiding you through
- Ask clarifying questions if you're unsure: "Should we nest this div inside the header or as a sibling?"
- Work at a steady pace—don't rush
- When you get stuck, ask the Navigator: "How do I pass the data to the component?"
- Reference the running `npm run dev` app in your browser to verify your work

**Next Navigator (Team of 3):**

- After the current cycle starts, step back and plan the next phase
- Review what has been accomplished and what remains
- Reference the plan and the data structure
- If the team is moving into styling, research Tailwind utilities: "Let me look up how to create a responsive grid with Tailwind" or "What's a good way to style buttons with hover effects?"
- Prepare a 2-3 minute briefing: "In the next cycle, we're going to add a three-column grid on desktop. We'll use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` on the container, and we'll adjust the gap between cards using `gap-4` or `gap-6`"
- Ask clarifying questions to refine the approach: "Do we want the cards to have a border, or just a shadow for elevation?"

### Transition Between Cycles

1. **Driver:** Stage and commit your work:

   ```bash
   git add .
   git commit -m "Cycle [#]: [Brief description of what was accomplished]"
   git push origin main
   ```

2. **All team members:** Pull the latest changes:

   ```bash
   git pull origin main
   ```

3. **Next Navigator:** Give a 2-3 minute briefing on the next cycle's objectives and approach

4. **Rotate roles** and start the next cycle

### Suggested Implementation Path

**Cycle 1: Component Extraction & Basic Rendering**

Goals:

- Import the products array into `/src/app/page.jsx`
- Create `/src/components/CardLayout.jsx` (maps over products, renders CardItem for each)
- Create `/src/components/CardItem.jsx` (receives product data, renders unstyled but complete structure)
- Verify all 9 products render in the browser

Approach:

- Start with the page component; map over products with a simple `<ul>` and `<li>`
- Extract the single `<li>` structure into CardItem component
- Move the map logic into CardLayout component
- Replace the `<ul>` in the page with `<CardLayout />`
- Verify the structure matches your card design

**Cycle 2: Responsive Grid Layout & Basic Styling**

Goals:

- Build a responsive grid container in CardLayout using Tailwind
- Add basic styling to CardItem (card container, image, layout)
- Implement responsive design (1 column mobile, 2 tablets, 3 desktop)

Approach:

- Add Tailwind classes to the container div in CardLayout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- Add styling to the article in CardItem: `bg-white rounded-lg shadow-md overflow-hidden h-full`
- Style the header: flex layout for image + title/subtitle
- Add spacing, rounded corners, and basic shadows
- Test responsiveness by resizing your browser

**Cycle 3: Typography, Colors, and Polish**

Goals:

- Style all text elements (title, subtitle, description, price, CTA)
- Implement your color palette and visual hierarchy
- Add hover effects and polish

Approach:

- Title: `text-xl font-semibold text-gray-900`
- Subtitle: `text-sm font-medium text-gray-600`
- Description: `text-sm text-gray-700 leading-relaxed`
- Price: `text-lg font-bold text-green-600`
- Button: `bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors`
- Link: `text-green-600 hover:underline`
- Card hover: `hover:shadow-lg transition-shadow`
- Review colors and spacing against your plan; make adjustments

---

## Commit Message Convention

Keep commit messages clear and descriptive. Examples:

- `Cycle 1: Extract CardItem and CardLayout components, import products`
- `Cycle 2: Add responsive grid layout and basic card styling with Tailwind`
- `Cycle 3: Add typography, color palette, and hover effects`

---

## Phase 3: Debrief (10 minutes)

After all coding cycles are complete, discuss as a team:

### Individual Reflection

- Which role did you prefer and why?
- Which role was most challenging?
- Did your role preference align with how you typically work on projects?

### Component Thinking

- Did extracting components feel natural? Why or why not?
- How did passing props to CardItem clarify the data flow?
- If you had to add more features (e.g., a "favorite" button), how would you modify your components?

### Tailwind & Design

- What Tailwind utilities were most useful?
- Did responsive design with Tailwind feel intuitive?
- How did working with a predefined data structure influence your design choices?

### Git & Collaboration

- How did committing after each cycle feel? Did it help track progress?
- Did you encounter any merge conflicts? How did you resolve them?
- What would make the collaboration smoother next time?

### Process Reflection

- What worked well in your workflow?
- What was challenging?
- How did planning at the start help or hinder your progress?
- Did the suggested implementation path fit your team's pace, or would you have structured it differently?

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **MDN Web Docs:** https://developer.mozilla.org/
- **Git Documentation:** https://git-scm.com/doc
- **Your course materials** and instructor notes

---

## Submission

1. **Code Submission:** Push all your final code to your GitHub fork (should happen automatically through your commits)
2. **Reflection:** Summarize your team debrief as a reflection and post with a link to your repo

---

## Tips for Success

- **Stay focused during your role:** If you're the driver, focus on typing. If you're the navigator, focus on guiding. If you're the next navigator, focus on planning.
- **Communicate clearly:** Specific instructions beat vague suggestions.
- **Reference your plan:** If you get stuck, look back at your planning notes.
- **Use your browser:** Open DevTools to inspect elements and debug styling issues.
- **Commit often:** Small, frequent commits are better than one big commit at the end.
- **Ask questions:** If something isn't making sense, speak up.
