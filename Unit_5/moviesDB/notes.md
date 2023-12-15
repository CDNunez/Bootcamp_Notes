# Traditional Databases

Database:
- Types: 
  - Relational 
    - SQL, PostgreSql, MySQL
  - Non-Relational
    - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
- Tables:
  - Primary Keys (ID)
  - Records: Data within rows of table
- Mongo
  - Database = Database
  - Collections = Tables
  - Documents = Records
    - stored as JSON
  - Is a **Document Data Store**

# MERN
- M: Mongo
  - database
- E: Express
  - server
- R: React
  - frontend/client
- N: Node
  - everything in between

# Express
- Need a `package.json` file
  - run `npm init` or `npm init -y`
- Install Dependencies:
  - Express: `npm i express`
  - Mongoose: `npm i mongoose`
    - package that connects to MongoDB
  - dotenv: `npm i dotenv`
  - **NOTE**:
    - We can install multiple dependencies at once
    - ex: `npm i express mongoose dotenv`
- Entry point within `package.json`
  - `index.js` or `app.js`
- `.gitignore`
  - ignore files/folders that shouldn't be in a repo.

# .env
- Contains constants that are specific for our environment
- Stores items that we don't want published
  - passwords, port numbers / deployment routes, keys
- Should be added to `.gitignore`
- Should have a sample version to communicate with team.
  - `example.env`

## Mongo & Mongoose
- Need to connect to our database
  - Using **MongoDBCompass**
  - Stateful connection

```js
const mongoose = require('mongoose');
const MONGO = process.env.MONGODB;

mongoose.connect(`${MONGO}/moviedb`);

const db = mongoose.connection;

db.once("open", () => log(`Connected: ${MONGO}`));
```

## Bcrypt
`npm i bcrypt`
- dependency that handles encryption of data
  - mostly commonly for passwords (but not limited)

## Encryption
- Plain text passwords are not secure when stored within the database.
  - Allows another lever of security for both user and application
    - If the database never knows it, less desired to "hack".

## Hashing
- An algorithm to change plain text into various characters.
  - transformed as a **one-way value**. 
  - practically impossible to turn hashed value back to original string.
- Encrypted prior to storing in DB
- No matter length of string (password), hash value is the same length.
  - Like strings will result in the same hashed input.
  - **needs `salting`**

## Salting
- includes random strings within the plain text being hashed.
- Makes for unpredictability for the hashed value.
- We can denote the number of "salts"
  - Good value is 10-13 iterations.

example code:
```js
bcrypt.hashSync("abc123", 10);
```
- first param = password
- second param = number of times the password will be salted.

## JWT
- JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user.

example code:
```js
const token = jwt.sign({id: user._id}, "secret message", {expiresIn: 60 * 60 * 24});
```
- `sign(payload, message, options)` 
  - 3 arguments:
    - payload
      - In the sample we are using an object that details the id of the user.
    - encrypt/decrypt message
      - passed in as a string in the sample
      - Typically stored as a `.env` variable.
    - Options sets (expiration)
      -  represents seconds or a string time span
         -  ex: `"2 days"` or `"10h"`

```js
/* 
! Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
```