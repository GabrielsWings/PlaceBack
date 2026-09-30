# PlaceBack

PlaceBack is a memory system for physical objects. It helps users remember where they put their belongings and why they put them there.

## Project Structure

```text
PlaceBack/
├── frontend/    # React + Vite frontend
├── backend/     # Node.js + Express backend
├── README.md
└── .gitignore
```

## Technologies

- React
- Vite
- Node.js
- Express
- PostgreSQL (planned)

## Getting Started

### Prerequisites

Before running PlaceBack, make sure you have the following installed:

- Node.js
- npm
- Git

You can check that they are installed by opening a terminal and running:

```bash
node --version
npm --version
git --version
```

Each command should return a version number.

---

## 1. Clone the Repository

Open a terminal and navigate to the location where you want to store the project.

Clone the repository:

```bash
git clone https://github.com/GabrielsWings/PlaceBack.git
```

Enter the project folder:

```bash
cd PlaceBack
```

---

## 2. Set Up the Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend should be available at:

```text
http://localhost:5173
```

Keep this terminal running while working on the frontend.

---

## 3. Set Up the Backend

Open a **second terminal**.

From the PlaceBack project folder, navigate to the backend:

```bash
cd PlaceBack/backend
```

Install the backend dependencies:

```bash
npm install
```

Start the Express server:

```bash
node server.js
```

The backend should be available at:

```text
http://localhost:3000
```

You should see:

```text
PlaceBack backend running at http://localhost:3000
```

Keep this terminal running while working on the backend.

---

## Running PlaceBack

During development, you will normally have two terminals running.

### Terminal 1 - Frontend

```bash
cd PlaceBack/frontend
npm run dev
```

Frontend:

```text
http://localhost:5173
```

### Terminal 2 - Backend

```bash
cd PlaceBack/backend
node server.js
```

Backend:

```text
http://localhost:3000
```

---

## Current Progress

- React/Vite frontend set up
- Basic PlaceBack dashboard
- Add Object page prototype
- Node/Express backend set up
- Basic Express server running
- GitHub repository set up
- Initial project structure established

## Planned Features

- PostgreSQL database
- Saving and retrieving objects
- Object search
- Image uploads
- User authentication
- Reminders
- Editing and deleting objects
- Additional UI improvements

## Sprint 1 Goal

The initial goal is to create the foundation of PlaceBack and begin implementing the core functionality for adding and tracking physical objects.