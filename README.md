# Pizza Shop System

This project is a web application using Node.js on the backend and Next.js on the frontend. Prisma is used for database modeling and interaction with a PostgreSQL database. The application implements authentication and authorization using JWT tokens and password hashing for security.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Next.js**: React framework for building user interfaces.
- **Prisma**: ORM for database modeling and queries.
- **PostgreSQL**: Relational database system used for data storage.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **Password Hashing**: For secure password storage.
- **Express**: Framework for building RESTful APIs.
- **Multer**: Middleware for handling file uploads.

## Main Features

- **User Authentication**: Registration, login, and retrieval of authenticated user details.
- **Category Management**: Creation and listing of product categories.
- **Product Management**: Creation and listing of products associated with categories.
- **Order Management**: Creation, updating, listing, and deletion of orders.
- **Order Item Management**: Adding and removing items in a specific order.
- **Order Completion**: Marking orders as completed.

## Installation and Configuration

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. **Install dependencies**:

   ```bash
   cd your-project
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root of the project and add the following variables:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   JWT_SECRET="your_jwt_secret_key"
   ```

4. **Run Prisma migrations**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the application**:

   ```bash
   npm run dev
   ```

## API Routes

### Authentication

- **POST `/users`**: Registers a new user.

  - **Request Body**:

    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "secure_password"
    }
    ```

- **POST `/session`**: Authenticates an existing user.

  - **Request Body**:

    ```json
    {
      "email": "user@example.com",
      "password": "secure_password"
    }
    ```

- **GET `/me`**: Retrieves the details of the authenticated user.

  - **Headers**:

    ```
    Authorization: Bearer <jwt_token>
    ```

### Categories

- **POST `/category`**: Creates a new category.

  - **Request Body**:

    ```json
    {
      "name": "Category Name"
    }
    ```

- **GET `/listCategory`**: Lists all available categories.

### Products

- **POST `/product`**: Creates a new product.

  - **Headers**:

    ```
    Content-Type: multipart/form-data
    ```

  - **Request Body** (Form Data):

    - `file`: Product image.
    - `name`: Product name.
    - `price`: Product price.
    - `description`: Detailed description.
    - `category_id`: Associated category ID.

- **GET `/category/product`**: Lists products filtered by category.

  - **Query Params**:

    ```
    categoryId=<category_id>
    ```

### Orders

- **POST `/order`**: Creates a new order.

  - **Request Body**:

    ```json
    {
      "table": 5,
      "name": "Customer Name"
    }
    ```

- **DELETE `/delete`**: Removes an existing order.

  - **Request Body**:

    ```json
    {
      "order_id": "order_id"
    }
    ```

- **PUT `/order/send`**: Updates the order status to "Sent".

  - **Request Body**:

    ```json
    {
      "order_id": "order_id"
    }
    ```

- **GET `/ListOrder`**: Lists all open orders.

- **GET `/order/detail`**: Retrieves details of a specific order.

  - **Query Params**:

    ```
    order_id=<order_id>
    ```

- **PUT `/order/completed`**: Marks an order as completed.

  - **Request Body**:

    ```json
    {
      "order_id": "order_id"
    }
    ```

### Order Items

- **POST `/order/add`**: Adds an item to an order.

  - **Request Body**:

    ```json
    {
      "order_id": "order_id",
      "product_id": "product_id",
      "amount": 2
    }
    ```

- **DELETE `/order/remove`**: Removes an item from an order.

  - **Request Body**:

    ```json
    {
      "item_id": "item_id"
    }
    ```

## Summary of Routes and Their Functions

- **`POST /users`**: User registration.
- **`POST /session`**: User login and authentication.
- **`GET /me`**: Retrieves information of the logged-in user.
- **`POST /category`**: Creates a new product category.
- **`GET /listCategory`**: Lists all categories.
- **`POST /product`**: Adds a new product.
- **`GET /category/product`**: Lists products by category.
- **`POST /order`**: Creates a new order.
- **`DELETE /delete`**: Deletes an existing order.
- **`PUT /order/send`**: Sends the order (updates status).
- **`GET /ListOrder`**: Lists all orders.
- **`GET /order/detail`**: Details of a specific order.
- **`PUT /order/completed`**: Completes an order.
- **`POST /order/add`**: Adds an item to the order.
- **`DELETE /order/remove`**: Removes an item from the order.

## Project Structure

- **controllers/**: Contains route controllers.
- **services/**: Contains business logic.
- **prisma/**: Database configurations and schemas.
- **config/**: General configurations, such as Multer.
- **routes/**: API route definitions.
- **middlewares/**: Middlewares, including authentication.
- **assets/**: Static files, such as images.

## Database

The application uses **PostgreSQL** as its relational database system. Prisma ORM is configured to interact with the PostgreSQL database, providing a type-safe and efficient way to perform database operations.

## Authentication Middleware

Protected routes use a middleware that verifies the presence and validity of the JWT token. The token must be sent in the `Authorization` header in the following format:

```
Authorization: Bearer <your_jwt_token>
```

## Example Usage of Routes

### Creating a User

```bash
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Authenticating a User

```bash
POST /session
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "your_jwt_token"
}
```

### Accessing a Protected Route

```bash
GET /me
Authorization: Bearer your_jwt_token
```

**Response:**

```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

