<div align="center">
  <br><br>
  <h1>Quizfy Web Application</h1>
  <p>Quizfy is a interactive web quiz application for kids</p>
  <br>
</div>

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
  - [Getting Started](#getting-started)
- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Endpoints](#api-endpoints)

## Description

[`^ back to top ^`](#table-of-contents)

**Quizfy** is a platform interactive quiz application web for kids especially 1st grade and 2nd grade of elementary school.This is  built for the final project of Generasi GIGIH 3.0 Independent Capstone Project. This repo is the API of the app. The API is built with [Express](https://expressjs.com). The data is stored in [MongoDB](https://www.mongodb.com) database.


## Features

[`^ back to top ^`](#table-of-contents)

These are the features of the API. 

- [Get list of questions](#get-apiquestions)
- [Get questions details](#get-apiquestionsid) 
- [Add a questions](#post-apiquestions) 
- [Update a questions](#put-apiquestionsid) 
- [Delete a questions](#delete-apiquestionsid) 

## Tech Stack

[`^ back to top ^`](#table-of-contents)

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- JavaScript Runtime Environment: [Node.js](https://nodejs.org)
- Web Framework: [Express](https://expressjs.com)
- Database: [MongoDB](https://www.mongodb.com)
- ODM: [Mongoose](https://mongoosejs.com)
- Linter: [ESLint](https://eslint.org)
- Code Formatter: [Prettier](https://prettier.io)
  
## Run Locally

[`^ back to top ^`](#table-of-contents)

### Getting Started

- Make sure you have [Node.js](https://nodejs.org) & [NPM] installed on your computer.

- Create a MongoDB database. You can create the database on your local, but make sure you have [MongoDB Community Server](https://www.mongodb.com/docs/manual/administration/install-community) & [MongoDB Shell](https://www.mongodb.com/try/download/shell) installed on your computer. You can also create the database in the cloud through [MongoDB Atlas](https://www.mongodb.com/atlas/database).

- Clone the repo.

  ```bash
  git clone https://github.com/Astrayesa/quiz-app.git
  ```

  ```bash
  cd quiz_app
  ```

- Make a copy of `env.example` file & rename it to `.env`.

  Write a MongoDB URI to connect the API to a database. Make sure the MongoDB is ready to use. I use MongoDB database, named `quiz_apps`.

  ```bash
  # example

  MONGODB_URI=mongodb://localhost:27017/quiz_apps
  ```

- Install the dependencies.

  ```bash
  npm install
  ```

### Development

Run the development server. The API will run on port 8080, but you can change the port by specifying the `PORT` variable in `.env` file.

```bash
npm start
```

**2. By importing directly through [MongoDB Atlas](https://www.mongodb.com/atlas/database) or [MongoDB Compass](https://www.mongodb.com/products/compass).**


## Database Structure

### Database Implemented in MongoDB

This is the implementation of the database design in MongoDB.

**questionArray**

```
{
  title : String,
  answer : String,
  options : [{ option : String, isCorrect : Boolean, id: String}],
  correctAnswer :  String,
}
```

**postQuiz**

```
{
  title : String,
  questionArr : [questionArray]
}
```



## API Structure

[`^ back to top ^`](#table-of-contents)

I use N-layer architecture for the API, which includes a controller, service, & model. N-layer architecture is a pattern used to organize & separate concerns in software development, making the code more modular & maintainable.

- **Model Layer**: This layer contains the data model. Models represent the data structures & interactions with the database.
- **Service Layer**: This layer contains core business logic of the API.
- **Controller Layer**: This layer is responsible for handling the requests, process them, & send back responses.

```
.
├── app              # contains main source code
│   ├── controller  # stores the controllers
│   ├── models       # stores the models
│   ├── routes       # contains route files        
│   ├── services     # contains business logic
│   └── index.js     # the entry point
├── ...
├── package.json     # contains information about the project, dependencies, scripts, configs
├── README.md        # documentation
.
```

## API Endpoints

[`^ back to top ^`](#table-of-contents)

**Questions**

- Question object

```
{
  title : String,
  answer : String,
  options : [{ option : String, isCorrect : Boolean, id: String}],
  correctAnswer :  String,
}
```

### GET /questions


[`^ back to top ^`](#features)

Returns all questions.

- **URL Params**

  None

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response**

  - **Code: 200**

    Content:

    ```
    {
      "status" : 200,
      "message" : "success",
      "data" : {
        "_id" : 0000123,
        "title" : "example-title",
        "questionArr" : [
          "title" : "example question title",
          "answer" : "example answer",
          "options" : [
            {
            "option" : "A. Example answer option",
            "isCorrect" : true,
            "id" : "A",
            "_id" : 00003133
            },
            {
            "option" : "B. Example answer option",
            "isCorrect" : true,
            "id" : "B",
            "_id" : 00003134
            },
            {
            "option" : "C. Example answer option",
            "isCorrect" : true,
            "id" : "B",
            "_id" : 00003135
            },
          ]
        ]
      }
    }
    ```

- **Error Response**

  - **Code: 400**

    Content:

    ```
    {
      error : "Bad Request"
    }
    ```


### GET /questions/:id
[`^ back to top ^`](#features)

Returns a question specified by id.

- **URL Params**

  _Required:_ `questionsId=[string]`

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response**

  - **Code: 200**

    Content:

    ```
    {
      "status" : 200,
      "message" : "success",
      "data" : {
        "_id" : 0000123,
        "title" : "example-title",
        "questionArr" : [
          "title" : "example question title",
          "answer" : "example answer",
          "options" : [
            {
            "option" : "A. Example answer option",
            "isCorrect" : true,
            "id" : "A",
            "_id" : 00003133
            },
            {
            "option" : "B. Example answer option",
            "isCorrect" : true,
            "id" : "B",
            "_id" : 00003134
            },
            {
            "option" : "C. Example answer option",
            "isCorrect" : true,
            "id" : "B",
            "_id" : 00003135
            },
          ]
        ]
      }
    }
    ```

- **Error Response**


  - **Code: 400**

    Content:

    ```
    {
      "error" : "Bad Request"
    }
    ```

### POST /questions

[`^ back to top ^`](#features)

Creates a new questions & returns the new object.

- **URL Params**

  None

- **Data Params**

  ```
  {
    "title": string,
    "thumbnailUrl": string,
    "videoUrl": string
  }
  ```

- **Headers**

  Content-Type: application/json

- **Success Response**

  - **Code: 201**

    Content:

    ```
    {
      "status": "success",
      "message": "Question created successfully",
      "data": {<video_object>}
    }
    ```

- **Error Response**

  - **Code: 400**

    Content:

    ```
    {
      "status": "error",
      "message": "Invalid request body"
    }
    ```

    OR

  - **Code: 500**

    Content:

    ```
    {
      "status": "error",
      "message": <error_message>
    }
    ```


### PUT /questions/:id

[`^ back to top ^`](#features)

Updates fields on the specified questions & returns the updated object.

- **URL Params**

  _Required:_ `questionsId=[string]`

- **Data Params**

  ```
  {
    "title": string,
    "thumbnailUrl": string,
    "videoUrl": string
  }
  ```

- **Headers**

  Content-Type: application/json

- **Success Response**

  - **Code: 200**

    Content:

    ```
    {
      "status": "success",
      "message": "Question updated successfully",
      "data": {<video_object>}
    }
    ```

- **Error Response**

  - **Code: 400**

    Content:

    ```
    {
      "status": "error",
      "message": "Question ID is not valid"
    }
    ```

    OR

  - **Code: 404**

    Content:

    ```
    {
      "status": "error",
      "message": "Question not found"
    }
    ```

    OR

  - **Code: 500**

    Content:

    ```
    {
      "status": "error",
      "message": <error_message>
    }
    ```

### DELETE /questions/:id

[`^ back to top ^`](#features)

Deletes the specified questions.

- **URL Params**

  _Required:_ `questionsId=[string]`

- **Data Params**

  None

- **Headers**

  Content-Type: application/json

- **Success Response**

  - **Code: 200**

  Content:

  ```
  {
    "status": "success",
    "message": "Question deleted successfully"
  }
  ```

- **Error Response**

  - **Code: 400**

    Content:

    ```
    {
      "status": "error",
      "message": "Question ID is not valid"
    }
    ```

    OR

  - **Code: 404**

    Content:

    ```
    {
      "status": "error",
      "message": "Question not found"
    }
    ```

    OR

  - **Code: 500**

    Content:

    ```
    {
      "status": "error",
      "message": <error_message>
    }
    ```


