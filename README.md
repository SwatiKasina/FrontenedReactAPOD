
# Web Development Assignment 2

This project is Assignment 2 for the Web Development course. It consists of a web application built using React for the frontend and Spring Boot for the backend.

## Project Structure

```
.
├── image-1.png
├── image-2.png
├── image-3.png
├── image-4.png
├── image.png
├── log.txt
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── springbootapp
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── HELP.md
│   ├── image-1.png
│   ├── image-2.png
│   ├── image-3.png
│   ├── image-4.png
│   ├── image-5.png
│   ├── image-6.png
│   ├── image-7.png
│   ├── image.png
│   ├── readme.md
│   ├── README.md
│   ├── settings.gradle
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── com
│       │   │       └── example
│       │   │           └── demo
│       │   │               ├── Controllers.java
│       │   │               ├── NasaApodApiApplication.java
│       │   │               └── Restcontrollers.java
│       │   └── resources
│       │       ├── application.properties
│       │       ├── static
│       │       │   └── built
│       │       │       ├── bundle.js
│       │       │       └── node_modules_web-vitals_dist_web-vitals_js.bundle.js
│       │       └── templates
│       │           └── index.html
│       └── test
│           └── java
│               └── com
│                   └── example
│                       └── demo
│                           └── NasaApodApiApplicationTests.java
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Bycountdate.js
│   ├── ByDateForm.js
│   ├── footer.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── Nav.js
│   ├── reportWebVitals.js
│   └── setupTests.js
└── webpack.config.js
```

## Features

- **Frontend (React)**: The frontend is built using React, a JavaScript library for building user interfaces. It includes components for displaying home page, forms, and other features.

- **Backend (Spring Boot)**: The backend is built using Spring Boot, a Java-based framework for building web applications. It provides RESTful APIs to interact with the frontend and serves static resources.

## Setup and Usage

1. **Frontend Setup**:
   - Navigate to the `Assignment2FrontEnd` directory.
   - Install dependencies: `npm install`.
   - Run the development server: `npm start`.

2. **Backend Setup**:
   - Navigate to the `springbootapp` directory.
   - Build the Spring Boot project: `./gradlew build`.
   - Run the Spring Boot application: `./gradlew bootRun`.

3. **Accessing the Application**:
   - Once both frontend and backend are running, access the application in your web browser.

## Credits

- Developed by Swati K

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-4.png)
![alt text](image-2.png)
![alt text](image-3.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
