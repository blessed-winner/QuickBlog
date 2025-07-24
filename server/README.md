# 📝 QuickBlog Backend

This is the backend API for QuickBlog, providing authentication, blog management, and integration with MongoDB and ImageKit. Built with Node.js, Express, and Mongoose.

---

## ✨ Backend Features

- **Express API**: RESTful API for blog and admin features
- **MongoDB Integration**: Persistent storage for blogs and (future) comments
- **Admin Authentication**: JWT-based login for admin
- **Image Uploads**: ImageKit integration (setup required)
- **Environment-based Config**: Uses dotenv for secrets and config

---

## 🏗️ Tech Stack

- **Node.js**
- **Express**
- **Mongoose (MongoDB)**
- **JWT**
- **ImageKit**
- **Multer** (for file uploads)

---

## 🚀 Getting Started (Backend Only)

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation & Running

1. **Navigate to the server directory:**
    ```sh
    cd QuickBlog/server
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Set up environment variables:**
    - Create a `.env` file in `server/` with the following:
      ```env
      MONGODB_URI=your_mongodb_connection_string
      ADMIN_EMAIL=your_admin_email
      ADMIN_PASSWORD=your_admin_password
      JWT_SECRET=your_jwt_secret
      IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
      IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
      IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
      ```
4. **Run the backend server:**
    ```sh
    npm start
    ```
    The API will be available at `http://localhost:3000` (or the port set in your environment).

---

## 📂 Project Structure (Backend)

- `server.js` — Entry point
- `controllers/` — Route logic (admin, blog)
- `models/` — Mongoose schemas
- `routes/` — Express routers
- `Configs/` — Database and image config

---

## 🔑 API Endpoints

- `POST /api/admin/login` — Admin login (returns JWT)
- (More blog CRUD endpoints coming soon)

---

## 🤝 Contributing
Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information. 