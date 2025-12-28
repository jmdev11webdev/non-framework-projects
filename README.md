Perfect 👍
Let’s create a **clean, professional `README.md`** for your repo **`non-framework-projects`**, focused on the **new stack you just rebuilt and mastered**.

You can **copy–paste everything below** into a file named `README.md` at the root of your repo.

---

# 🚀 Non-Framework Projects

This repository contains **non-framework, fundamentals-first projects** built to master **backend and frontend integration without modern JS frameworks**.

The goal of this repo is to **deeply understand how things work under the hood** before moving on to frameworks like React, Next.js, or NestJS.

---

## 🧠 Why This Repo Exists

Before using frameworks, I intentionally rebuilt a **full authentication system from scratch** using:

* Plain HTML + Bootstrap (frontend)
* Node.js + Express.js (backend)
* MySQL (database)
* Session-based authentication
* REST APIs
* Manual testing with Postman

This ensures:

* Strong backend fundamentals
* Clear understanding of auth flows
* Confidence debugging without abstractions

---

## 🧰 Tech Stack (Current Standard)

### Backend

* **Node.js**
* **Express.js**
* **MySQL**
* **mysql2**
* **bcrypt**
* **express-session**
* **dotenv**

### Frontend

* **HTML**
* **Bootstrap 5**
* **Vanilla JavaScript (Fetch API)**

### Tools

* **HeidiSQL** – database management
* **Postman** – API testing
* **Git & GitHub**
* **Nodemon** – development server

---

## 📂 Project Structure (Reference Standard)

```
Login-Authentication/
│
├── controllers/              # (optional) business logic
├── db/
│   └── connection.js         # MySQL connection pool
│
├── middleware/
│   └── requireAuth.js        # Protected route middleware
│
├── public/
│   ├── js/
│   │   ├── auth.js           # login/register fetch logic
│   │   └── app.js
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
├── routes/
│   └── auth.js               # register, login, logout, me
│
├── .env                      # environment variables (ignored)
├── .gitignore
├── index.js                  # root server file
├── package.json
└── README.md
```

This structure is the **baseline** for all future non-framework projects in this repo.

---

## 🔐 Authentication Features Implemented

* ✅ User Registration
* ✅ Password Hashing (bcrypt)
* ✅ User Login
* ✅ Session-based Authentication
* ✅ Protected Routes (`/me`)
* ✅ Logout
* ✅ Frontend + Backend communication
* ✅ API testing via Postman

---

## 🌐 API Endpoints

| Method | Route       | Description             |
| ------ | ----------- | ----------------------- |
| POST   | `/register` | Register new user       |
| POST   | `/login`    | Login user              |
| POST   | `/logout`   | Logout user             |
| GET    | `/me`       | Get logged-in user info |

---

## ⚙️ Environment Variables

Create a `.env` file:

```
PORT=3036
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdbname
SESSION_SECRET=supersecretkey
```

> `.env` is intentionally ignored by Git.

---

## 🛠️ How to Run a Project

```bash
npm install
npm run dev
```

Open in browser:

```
http://localhost:3036/login.html
```

---

## 🧪 Testing

* API testing is done using **Postman**
* Session persistence tested via:

  * `/login` → `/me` → `/logout`
* Frontend forms use **Fetch API**

---

## 📈 Learning Focus Going Forward

This repo will continue to include:

* CRUD systems
* Role-based authentication
* Authorization middleware
* File uploads
* Pagination
* Security best practices
* Clean architecture (without frameworks)

---

## 🧑‍💻 Author

**JM Dev**
Backend-first developer focused on mastering fundamentals before frameworks.

---

## ✅ Philosophy

> “Frameworks are tools. Fundamentals are power.”
