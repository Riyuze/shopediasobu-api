# Shopediasobu-api
API for a live streaming & live shopping platform. Inspired by Tokopedia Play. Built using expressJS, mongoDB, and nodeJS.

## Database Diagram
![ERD](https://github.com/Riyuze/shopediasobu-api/blob/main/ERD%20Diagram.png)

A NoSQL database is used with the name **shopediasobu-db** and consists of 3 collections namely **videos**, **products**, and **comments**.

As shown in the picture above, the **videos** collection consists of 3 attributes which are **_id**, **thumbnail**, and **url**. This colection is referenced by both **products** and **comments** collection. 

The **products** collection consists of 5 attributes which are **_id**, **title**, **price**, **url**, and **videoId**. 

The **comments** collection consists of 5 attributes which are **_id**, **username**, **comment**, and **videoId**. 

## API Structure
API is built using clean architecture and is divided into 3 categories or layers, the **Controller** layer, the **Use Case** layer, and the **Repository** layer.

The **Controller** layer is responsible for handling user input and presenting data to the user. It is the outermost layer in Clean Architecture, representing the interface between the application and the external world, such as the user interface or API endpoints. Its primary goal is to receive user requests, delegate tasks to the **Use Case** layer, and then send back the appropriate response to the user.

The **Use Case** layer, also known as the Interactor layer, contains the application-specific business rules and represents the core functionality of the application. It contains the application's business logic, defines the various use cases, and coordinates the interaction between the Presentation and Domain layers. Each use case in the **Use Case** layer corresponds to a specific action or user intent that the application can perform. 

The **Repository** layer is responsible for abstracting the data access and storage mechanisms from the rest of the application. It provides an interface to access and manipulate data without exposing the underlying data storage details, such as databases or APIs. This layer defines a set of interfaces or protocols that represent the data operations required by the **Use Case** layer. 

## API Requests and Responses

### GET {{url}}/video
Returns all videos in the system.

- **URL Params**\
  None

- **Data Params**\
  None

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": [
        {
            <video_object>
        },
        {
            <video_object>
        },
        {
            <video_object>
        }
    ]
  }
  ```

### GET {{url}}/video/:id
Returns a Video with a specific ID in the system.

- **URL Params**\
  _Required:_ ```id=[integer]```

- **Data Params**\
  None

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": { <video_object> }
  }
  ```
- **Error Response**\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 400,
    "error": "Param cannot be empty."
  }
  ```
  OR\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 404,
    "error": "Video not found."
  }
  ```

### POST {{url}}/video
Creates a new Video and returns the new object.

- **URL Params**\
  None

- **Data Params**\
  ```
  {
    "thumbnail": string,
    "url": string
  }
  ```

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": { <video_object> } 
  }
  ```

### GET {{url}}/product/:id
Returns all products with a specific Video ID in the system.

- **URL Params**\
  _Required:_ ```id=[integer]```

- **Data Params**\
  None

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": [
        {
            <product_object>
        },
        {
            <product_object>
        },
        {
            <product_object>
        }
    ]
  }
  ```
- **Error Response**\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 400,
    "error": "Param cannot be empty."
  }
  ```
  OR\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 404,
    "error": "Products not found."
  }
  ```

### POST {{url}}/product/:id
Creates a new Product with reference to Video and returns the new object.

- **URL Params**\
  _Required:_ ```id=[integer]```

- **Data Params**\
  ```
  {
    "title": string,
    "price": number,
    "url": string
  }
  ```

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": { <product_object> } 
  }
  ```

### GET {{url}}/comment/:id
Returns all comments with a specific Video ID in the system.

- **URL Params**\
  _Required:_ ```id=[integer]```

- **Data Params**\
  None

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": [
        {
            <comment_object>
        },
        {
            <comment_object>
        },
        {
            <comment_object>
        }
    ]
  }
  ```
- **Error Response**\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 400,
    "error": "Param cannot be empty."
  }
  ```
  OR\
  **Code**: 400\
  **Content**:
  ```
  {
    "status": 404,
    "error": "Comments not found."
  }
  ```

### POST {{url}}/comment/:id
Creates a new Comment with reference to Video and returns the new object.

- **URL Params**\
  _Required:_ ```id=[integer]```

- **Data Params**\
  ```
  {
    "username": string,
    "comment": string
  }
  ```

- **Headers**\
  Content-Type: application/json

- **Success Response**\
  **Code**: 200\
  **Content**:
  ```
  {
    "status": 200,
    "data": { <comment_object> } 
  }
  ```

## How to Run
1. Fork the code.
2. In the root directory do ```npm install``` or ```yarn install```.
3. Create a .env file and insert the values:\
   ```
   PORT=8080 || <your_preferred_port>
   MONGO_USERNAME="<your_mongodb_username>"
   MONGO_PASSWORD="<your_mongodb_password>"
   ```
4. Do ```npm run dev``` to start the server in developer mode.\
   *Note: If there is an error in connecting to the mongoDB make sure your IP is whitelisted.
5. You can test the APIs using Postman and the Postman collection can be found inside   the **misc** folder.\
   *Note: Make sure to make a new variable in your environment with the name **url-shopediasobu** with the value **localhost:8080/api**.