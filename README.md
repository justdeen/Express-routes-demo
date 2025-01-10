## 💫 Overview
A simple demonstration of Express.js routing, including shelter, dog, and admin routes.

## 🪄 Features
- Shelter routes for listing, creating, viewing, and editing shelters
- Dog routes for listing, viewing, and editing dogs
- Admin routes with authentication and authorization for accessing top-secret and delete-everything routes

## 🔗 API Endpoints
*Shelter Routes*
- `GET /shelter`: List all shelters
- `POST /shelter`: Create a new shelter
- `GET /shelter/:id`: View a single shelter
- `GET /shelter/:id/edit`: Edit a single shelter

*Dog Routes*
- `GET /dog`: List all dogs
- `GET /dog/:id`: View a single dog
- `GET /dog/:id/edit`: Edit a single dog

*Admin Routes*
- `GET /admin/topsecret`: Access top-secret information (requires `isAdmin` query parameter)
- `GET /admin/deleteeverything`: Delete all data (requires `isAdmin` query parameter)
