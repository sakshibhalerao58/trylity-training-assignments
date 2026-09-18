# Vite React Project Setup & Basic Folder Structure

## 📌 Project Overview

This project is created as part of the Trylity training assignment **“Vite React Project Setup & Basic Folder Structure.”**

The project demonstrates a clean and reusable React application structure using **Vite, React, and TypeScript**.

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* React Router
* CSS
* npm

## 📂 Project Structure

```text
trylity-vite-react-assignment1/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── cards/
│   │   └── Card.tsx
│   ├── components/
│   ├── elements/
│   │   └── Button.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sakshibhalerao58/trylity-training-assignments.git
```

### 2. Navigate to the Assignment Folder

```bash
cd trylity-training-assignments/trylity-vite-react-assignment1
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will run on a local URL provided by Vite, usually:

```text
http://localhost:5173/
```

If port 5173 is already in use, Vite automatically uses another available port such as `5174`.

## 🔍 TypeScript Check

To check the project for TypeScript errors:

```bash
npx tsc --noEmit
```

The command should complete without TypeScript errors.

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The build generates the `dist/` folder.

## ▶️ Preview Production Build

```bash
npm run preview
```

## ✨ Features

* Vite + React + TypeScript setup
* Reusable Header and Footer components
* Reusable Button component
* Reusable Card component
* Type-safe component props using TypeScript
* Home and About pages
* React Router navigation
* Responsive CSS styling
* Clean and organized folder structure

## 🧩 Reusable Components

### Button

The Button component accepts typed props such as:

* `label`
* `onClick`
* `type`

### Card

The Card component accepts:

* `title`
* `description`
* `buttonText`
* `onButtonClick`

This makes the components reusable across different pages.

## 🧪 Project Verification

The project was verified using:

```bash
npx tsc --noEmit
```

and

```bash
npm run build
```

Both commands completed successfully without errors.

## 👩‍💻 Author

**Sakshi Bhalerao**

IT Engineering Student | MERN Stack Developer
