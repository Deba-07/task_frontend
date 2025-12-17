# Task Manager – MERN Stack

A simple, modern **Task Manager web application** built using the **MERN stack**. The app allows users to create, view, and delete tasks with a clean UI, smooth animations, and a production-ready architecture.

This project was built as part of a technical assignment and focuses on **code quality, UX, and real-world best practices**.

---

#URL

 frontend URL : https://admirable-beignet-11c47a.netlify.app/
 
 backend URL : https://task-backend-8zx5.onrender.com

---

## ✨ Features

* Create a new task
* View all created tasks
* Delete tasks
* Loading and success states
* Responsive design (mobile → desktop)
* Smooth animations using Framer Motion

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* Lucide React (icons)
* Lottie (hero animation)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

### Backend

```
backend/
 ├── config/
 │    └── db.js
 ├── models/
 │    └── Task.js
 ├── controllers/
 │    └── taskController.js
 ├── routes/
 │    └── taskRoutes.js
 ├── server.js
 └── .env
```

### Frontend

```
frontend/
 ├── src/
 │    ├── components/
 │    ├── pages/
 │    ├── api/
 │    ├── App.jsx
 │    └── main.jsx
 └── .env
```

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /api/tasks     | Create a new task |
| GET    | /api/tasks     | Get all tasks     |
| DELETE | /api/tasks/:id | Delete a task     |

### Task Schema

```
{
  title: String (required),
  createdAt: Date
}
```

---

## 🌍 Deployment Details

### Frontend (Vercel)

* Uses environment variable for API base URL
* `.env.production`

```
VITE_API_BASE_URL=https://dashboard.render.com/web/srv-d513vhl6ubrc73db17eg
```

### Backend (Render)

* Uses environment variables for DB and frontend origin

```
MONGO_URI=...
FRONTEND_URL=https://admirable-beignet-11c47a.netlify.app/
```

CORS is configured to allow only trusted frontend origins.

---

## 🧠 Design & Development Decisions

* Used **separation of concerns** (routes, controllers, models)
* Environment-based configuration for dev & production
* Reusable components for scalability
* Simple, gradient-based UI for better UX
* Added animations carefully to enhance, not distract

---

## 🚀 Possible Improvements

* Edit task functionality
* Task completion status
* Authentication
* Pagination or filtering

---

## 👤 Author

**Debasis Das**
Frontend / Full Stack Developer

---

⭐ If you liked this project, feel free to star the repository!
