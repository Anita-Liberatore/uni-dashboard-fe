# UniDashboard FE

UniDashboard FE is a modern university dashboard built with Angular, designed to provide an intuitive overview and advanced features for students and administrators. The project implements reusable components, student profile management, academic data visualization, and supports server-side rendering (SSR).

## Main Features
- **Student Dashboard**: View personal, academic, and document data
- **Profile Management**: Edit and view student details
- **Reusable Components**: Card, Tab, Navbar, and more
- **SSR Support**: Server-side rendering for performance and SEO
- **Modern UI**: TailwindCSS for responsive design and dark mode

## Quick Start
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd uni-dashboard-fe
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```
   The app will be available at [http://localhost:4200](http://localhost:4200)

4. **Production build**
   ```bash
   ng build
   ```
   Artifacts will be in `dist/uni-dashboard-fe/`

5. **SSR (Server Side Rendering)**
   ```bash
   npm run serve:ssr:uni-dashboard-fe
   ```

## Running Tests
- **Unit tests**: `ng test`
- **End-to-end**: `ng e2e` (configure your preferred e2e framework)

## Main Folder Structure
```
src/
  app/
    components/        # Reusable UI components (card, navbar, tab)
    custom/            # Custom components (academic-card, profile-tab)
    models/            # TypeScript models (e.g., student.model.ts)
    pages/             # Main pages (home, profile)
  public/              # Public assets
  styles.css           # Global styles (TailwindCSS)
```

## Main Dependencies
- **Angular** ^19.2.x
- **TailwindCSS** ^4.x
- **Express** ^4.x (for SSR)
- **RxJS**, **zone.js**, **PostCSS**
- **Karma/Jasmine** (testing)

## Contribution Guidelines
- Use branch naming convention: `feature/<name>`, `fix/<name>`, `chore/<name>`
- Open a Pull Request with a clear description of your changes
- Follow consistent code style (Angular Style Guide)
- Write tests for new features

## Useful Resources
- [Angular CLI Docs](https://angular.dev/tools/cli)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

## License
This project is licensed under the MIT License.

---
For questions or support, contact the project maintainer.
