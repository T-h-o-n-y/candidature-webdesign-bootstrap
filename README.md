# candidature-webdesign-bootstrap

## 🎯 Project Goal

This repository contains the technical web integration submission for the static showcase website, developed in response to the candidate brief. The project was built using modern front-end development best practices, emphasizing **Mobile-First** architecture and deep customization of the **Bootstrap 5** framework via SCSS.

---

## 🔗 Live Demo

> 💡 The project will be deployed on GitHub Pages.
>
> **Live Demo Link:** 

---

## 🛠️ Technologies & Tools

| Category | Tool | Role in the Project |
| :--- | :--- | :--- |
| **Framework** | Bootstrap 5.3 | Core grid system and component library. |
| **Compiler** | SCSS (Dart Sass) | Framework customization and complex style management. |
| **Bundler/Server** | **Vite.js** | Ultra-fast development environment and optimized build process. |
| **Animation** | SVG & Intersection Observer API | Scroll-triggered path drawing animation. |

--------------

## ⚙️ Local Setup and Launch

To view and modify the project locally, please follow these steps:

### Prerequisites

* Node.js (version 16 or higher)
* npm (included with Node.js)

### 1. Install Dependencies

Open your terminal at the project root and install the dependencies (Bootstrap and Sass):
"npm install"

### 2. Launch Development Server

Start the Vite server. Your SCSS/JS/HTML changes will be instantly reflected (HMR - Hot Module Replacement).
"npm run dev"
The site will be accessible at the address indicated in the terminal (usually http://localhost:5173).

### 3. Production Build

To compile and optimize the final code (minified JS/CSS), use the build command (creates the /dist folder):
"npm run build"

--------------

### 🧐 Mock-up Critical Analysis

#### 1. What Do You Find Good/Bad in This Mock-up?

| Category | Strengths (The Good) | Weaknesses (The Bad) |
| :--- | :--- | :--- |
| **Visual Design** | Excellent **Clarity of Information** with clear hierarchical structure. | **CTA Inconsistency:** Minor lack of consistency in interactive elements, toggling between button and underlined link styles. |
| **Layout & UX** | Strategic and effective use of **Negative Space** to focus visitor attention on key content. | **Awards Layout:** The Awards section could be restructured for faster, more linear visual scanning, which would also enhance **Accessibility**. |
| **Aesthetics** | Adherence to **Flat Design** and **Minimalist** principles, ensuring a clean and modern look. | **Footer Bloat:** The footer is excessively large; the **Documentation** section and related links should potentially be elevated outside of the main footer component. |
| **Technical** | Design facilitates **Easy Bootstrap Integration** and quick development using standard components. | |
| **Engagement** | Effective and **Dynamic Use of Cards** for presenting data and information (e.g., the Hero Card). | |

***

#### 2. What Would You Improve?

To enhance the user experience and brand fidelity:

* **Brand Customization:** If the site is affiliated with Odoo, the typography and color palette must be strictly customized to reflect **Odoo's corporate identity and style guide**, moving beyond generic Bootstrap defaults.
* **Refined Visual Hierarchy:** I would **increase the font size of primary headings** (H2, H3) and subtly **decrease the font size of category badges** to amplify the visual difference and reinforce the content hierarchy.
* **Section Dynamism:** Introduce **vibrant accent colors** (related to the brand) in specific non-critical sections to inject dynamism and help maintain visitor engagement during the scroll.

***

#### 3. What Would You Change? (Alternative Perspective)

This section details structural and visual adjustments to optimize the final product:

* **Action Element Consistency:** I would enforce a unified **visual language** for interactive elements, clearly differentiating between **primary actions** (full background button) and **secondary actions** (outline button or text link) across the entire interface. This provides a more intuitive user path.
* **Prioritize Scanability over Ornamentation:** I would redesign the staggered layout of the **Awards section** into a **linear, vertically aligned component**. This structural change prioritizes **rapid consumption** of social proof and makes the content inherently more accessible.
* **Optimize Information Architecture (IA):** Instead of a monolithic footer, I would **segment the content**. High-value resources like **"Documentation"** should be elevated from the legal/administrative footer links and placed in a more prominent dedicated content block, reflecting its importance to the user's journey.