
# 🎬 Movie Store API

A complete RESTful Movie Store API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. This API allows clients to perform CRUD operations and advanced queries such as filtering, searching, sorting, and pagination on movie data.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) for movies
- Search movies by title
- Filter movies by:
  - Title
  - Rating
- Sort results by any field
- Pagination support (`page` and `limit`)
- RESTful API structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
movie-store-api/
│
├── models/
│   └── Movie.js
│
├── routes/
│   └── movies.js
│
├── controllers/
│   └── movieController.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
└── package.json
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/movie-store-api.git
cd movie-store-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file in the root with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Run the server**

```bash
npm run dev
```

---

## 🛣️ API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/movies`          | Get all movies (with filters)  |
| GET    | `/movies/:id`      | Get movie by ID                |
| POST   | `/movies`          | Add a new movie                |
| PUT    | `/movies/:id`      | Update a movie                 |
| DELETE | `/movies/:id`      | Delete a movie                 |

---

## 🔍 Query Parameters

- `q`: search by movie title (e.g. `?q=dho`)
- `title`: exact match by title
- `rating`: filter by rating
- `sortBy`: sort by field (e.g. `?sortBy=rating`)
- `page`: page number for pagination
- `limit`: number of results per page

### Example

```http
GET /movies?q=dho&rating=8&sortBy=title&page=1&limit=10
```

---

## 🧪 Future Improvements

- Authentication with JWT
- Genre/category support
- User ratings and reviews
- Upload poster image

---

## 📄 License

MIT © [Niket_sahu] 
