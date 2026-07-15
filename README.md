# Personal Task Manager

A simple full-stack MERN (MongoDB, Express, React, Node.js) application for managing personal tasks.


### Backend Setup
1. Open a terminal and navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Copy the `.env.example` file to `.env`: `cp .env.example .env` (Update the `MONGO_URI` if needed).
4. Start the backend server: `npm run dev`
   - The server will run on `http://localhost:3000`.

### Frontend Setup
1. Open a new terminal and navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm run dev`
   - The React app will run (usually on `http://localhost:5173`).

---

## Short Write-Up

**1. What would you change about your data model or API design if this needed to support multiple users, each with their own private task list?**
I would add a `User` model (with authentication credentials like email/password) and add a `userId` field to the `Task` model, referencing the `User`. The API would require an authentication token (like JWT) in the headers, and the controller would filter tasks by `userId` extracted from the token, ensuring users can only read, update, or delete their own tasks.

**2. If the task list could grow to thousands of items, what's the first performance concern you'd address, and how?**
The first concern would be fetching all tasks at once, which could lead to slow network responses and poor frontend rendering performance. I would address this by implementing **pagination** or **infinite scrolling** on the backend API (using `limit` and `skip` in Mongoose) and the frontend, so we only load a small chunk of tasks (e.g., 20 at a time) initially. Adding indexes to frequently queried fields like `status` and `userId` in MongoDB would also speed up database queries.


