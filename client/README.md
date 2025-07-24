# 📝 QuickBlog Frontend

This is the frontend application for QuickBlog, a modern, feature-rich blogging platform. Built with React and Vite, it offers a sleek, responsive UI for readers and a powerful admin dashboard for content management.

---

## ✨ Frontend Features

- **Responsive UI**: Works on all devices
- **Blog Feed & Reading**: Browse and read blog posts
- **Comment System**: Readers can add/view comments (frontend only)
- **Newsletter Signup**: Simple signup for updates (frontend only)
- **Social Sharing**: Share posts on Facebook, Twitter, Google+
- **Admin Dashboard**: Analytics, blog management, comment moderation
- **Blog CRUD (Admin)**: Create, edit, and delete blogs (UI only; backend required for persistence)
- **Rich Text Editor**: Quill editor for blog creation
- **Analytics Overview**: View blog stats (dummy data)

---

## 🏗️ Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **React Router v7**
- **Quill** (rich text editor)

---

## 🚀 Getting Started (Frontend Only)

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation & Running

1. **Navigate to the client directory:**
    ```sh
    cd QuickBlog/client
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Run the development server:**
    ```sh
    npm run dev
    ```
    The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Accessing the Admin Panel
- Go to `http://localhost:5173/admin` to access the admin dashboard.
- *Note: Admin features require backend API for full functionality.*

---

## 📂 Project Structure (Frontend)

- `src/` — Main source code
  - `components/` — Reusable UI components
  - `pages/` — Page components (Home, Blog, Admin, etc.)
  - `assets/` — Images and static assets
  - `index.css` — Global styles
  - `main.jsx` — App entry point

---

## 🤝 Contributing
Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
