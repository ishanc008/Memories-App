<h1 align="center">
Memories-App
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

> Memories app is a website where people can share their memories in the form of a post and others can view and react to their post.


## Clone or Download
```terminal
$ git clone https://github.com/ishanc008/Memories-App.git
$ npm i
```

## Project Structure
```terminal
.gitignore
Backend/
   package.json
   server.js
   ...
   ...
Frontend/
   package.json
   index.html
   index.js
   App.js
   ...
   ...
 ```

# Usage (run fullstack app on your machine)

## Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

Notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd Frontend   // go to client folder
$ npm i         // npm install pacakges
$ npm start     // run it locally
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "SECRET=YOUR_JWT_SECRET" >> ./Backend/.env
```

### Start

```terminal
$ cd Backend   // go to server folder
$ npm i       // npm install pacakges
$ node server.js // run it locally
```

# Dependencies(tech-stacks)
Frontend | Backend
--- | ---
axios: ^0.21.1 | bcryptjs: ^2.4.3
redux-thunk: ^2.3.0|express: ^4.17.1
redux: ^4.1.0 | cors: ^2.8.5
react: ^17.0.2 | dotenv: ^8.2.0
react-dom: ^17.0.2 | mongoose: ^5.12.5
react-redux: ^7.2.4 | jsonwebtoken: ^8.5.1
react-router-dom: ^5.2.0 | 

# Screenshots of this project

## Home Page 
![User visit public and Home page](https://i.imgur.com/PdG5Lqcl.png)

## Sign In / Sign Up page
![User can sign in or sign up](https://i.imgur.com/Axk07Fdl.png)

## After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account](https://i.imgur.com/3gLZCgsl.png)

## Edit your post
![Edit](https://i.imgur.com/CSjRJQvl.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/ishanc008/Memories-App/issues) (preferred)

Email Me: ishanc008@gmail.com 

## Author
[Ishan Chopra](https://github.com/ishanc008)

### License
[MIT](https://github.com/ishanc008/Memories-App/blob/master/LICENSE)
