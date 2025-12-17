// src/api/taskApi.js
import axios from "axios";
const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";


const API = axios.create({
  baseURL,
});

export const createTask = (title) =>
  API.post("/tasks", { title });

export const getTasks = () => API.get("/tasks");
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
