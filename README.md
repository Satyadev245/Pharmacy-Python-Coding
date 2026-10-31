# PharmaPy Learn

A frontend-only Python learning and coding practice platform for B.Pharmacy students. Built with React, Vite, React Router, Monaco Editor and Pyodide.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm
- Internet connection for the first Pyodide runtime download

## Run locally
1. Extract the ZIP file.
2. Open the `pharmacy-python-platform` folder in VS Code.
3. Open the terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown by Vite, normally `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

## Student entry
- Open `/start`.
- Enter the student's name and select **Start Learning**.
- The student name and learning progress are saved in the current browser using the app's local storage service.
- This is a single-browser profile, not a real account. Clearing browser data can remove local progress.

## Separate Admin portal
- Open `/admin`.
- Demo email: `admin@pharmapy.local`
- Demo password: `admin123`
- The admin portal has a separate route and layout, outside the student sidebar.
- This is only a demonstration login gate. The credentials are visible in frontend source code. It is not secure authentication, role-based authorization or a production admin system.
- The current admin dashboard displays curriculum and quiz-bank information. Editing modules/questions and multi-student reporting are not implemented in this frontend-only build.

## Curriculum and quiz coverage
- 30 structured learning modules.
- 113 detailed subtopics.
- 607 mini-topics.
- Each module includes a definition, beginner-friendly explanation, syntax, code example, expected output, line explanation, pharmacy connection, practice questions and a mini assignment.
- 65 quiz questions across Python fundamentals, collections, functions, modules, errors, files, OOP, data libraries, advanced topics and pharmacy-related programming.
- The pharmacy examples use fictional educational data only. They are not clinical dosing instructions or a medicine decision-support system.

## Python runtime
The editor loads Pyodide from its CDN on first run. Python executes in the browser through WebAssembly, not on a server. NumPy and pandas may be loaded where supported by the Pyodide distribution. Some native packages, system integrations and unrestricted file operations are not supported. Browser execution limits are best-effort and do not provide a hardened security sandbox or guaranteed memory quota.

## Local data and limitations
- Lightweight preferences and progress use browser-local storage.
- Saved programs use IndexedDB.
- JSON backup and restore are available in the student workspace.
- No Node.js backend, Python backend, PostgreSQL database, cloud sync, real multi-user authentication or live leaderboard is included.
- Never store passwords, patient information or other sensitive data in this demo.

## Project structure
- `src/data/courses.js`: complete structured curriculum data.
- `src/data/quizzes.js`: curriculum-wide quiz question bank.
- `src/pages/Start.jsx`: student name and start page.
- `src/pages/AdminPortal.jsx`: separate `/admin` demo portal.
- `src/pages/Learning.jsx`: course and expandable topic viewer.
- `src/pages/Quiz.jsx`: topic-filtered quiz and score review.
- `src/context/AppContext.jsx`: centralized local student state.
- `src/services/`: runtime and local storage services.
