
# Web Development Assignment 2

This project is Assignment 2 for the Web Development course. It consists of a web application built using React for the frontend and Spring Boot for the backend.

## Directory Structure

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

## Project Description

- **Frontend (React)**: The `src` directory contains the source code for the frontend React application. Key components include `App.js`, `Nav.js`, `footer.js`, etc. Images used in the frontend are stored in the `public` directory.

- **Backend (Spring Boot)**: The `springbootapp` directory contains the backend Spring Boot application. The `src/main` directory contains Java classes and resources, including controllers (`Controllers.java`), the main application class (`NasaApodApiApplication.java`), and configuration files.

## Usage

### Frontend (React)

1. Navigate to the `src` directory.
2. Install dependencies: `npm install`.
3. Run the development server: `npm start` to test frontend.
4. Run build into static of springboot  : `npm run build`.
5. Access the application in your web browser.

### Backend (Spring Boot)

1. Navigate to the `springbootapp` directory.
2. Build the Spring Boot project: `./gradlew build`.
3. Run the Spring Boot application: `./gradlew bootRun`.
4. Access the application in your web browser.

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
