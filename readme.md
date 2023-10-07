# MoonQuakers


- When they explored the Moon, NASA’s Apollo astronauts left behind several instruments to collect geophysical data near each Apollo landing site.

- Moonquakers is a webapp for the public that simulates and plots the seismic data these instruments transmitted back to Earth on an interactive 3-D digital moon globe.

- In-Browser Moonquake Simulation


**Production Website:** https://moonquakes.netlify.app/

### Technologies And Frameworks Used

1. React For Frontend
2. React-Three-Fiber for 3D Rendering
3. Javascript as primary programming language



## Getting Started - How to Setup Locally

Follow below steps to run the project locally in your system
1. Clone this github repository to your local system
2. Enter the cloned folder, run the following command

    ```
        cd MoonQuakers
    ```

3. Install the necessary packages and dependencies with your package manager. Run the following command for npm package manager 

    ```
        npm install
    ```

4. Run the following command to run the project in development mode

    ```
        npm start
    ```

5. Make the necessary changes you wish

7. Run the following command for building the project into a optimized production build

    ```
        npm run build
    ```
### Getting Started - How To Navigate The Project

The file structure of the project is described here:

```
├── build
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── assets
│   │   ├── height.jpg
│   │   ├── moonTexture.jpg
│   │   ├── moon.tif
│   │   ├── skyBg.jpg
│   │   └── wave.glb
│   ├── index.html
│   └── manifest.json
├── readme.md
└── src
    ├── App.js
    ├── assets
    │   ├── height.jpg
    │   └── moon.jpg
    ├── Context.js
    ├── ControlPanel.js
    ├── data
    │   └── QuakeDB.json
    ├── Experience.js
    ├── index.js
    ├── QuakeInfoBar.js
    ├── QuakeWave.js
    ├── Store.js
    ├── styles.css
    └── __tests__
        ├── App.test.js
        ├── ControlPanel.test.js
        ├── Experience.test.js
        ├── QuakeInfoBar.test.js
        └── QuakeWave.test.js
```

Brief Breakdown of components is given below:

**build**: Contains the output of the build process. Include the bundled and optimized JavaScript, CSS, and other assets.

**node_modules**: This directory holds the dependencies installed via npm or another package manager. It's excluded from version control.

**public**: Contains static assets that are served as-is. The index.html file is the entry point for the web application.

**public/assets**: Additional static assets, such as images and 3D models.

**src**: This is where the source code of your application resides.

**src/assets**: Project-specific assets that are used in the application.

**src/__tests__**: This directory contains test files for each components. 

**Individual Component Files:** (App.js, ControlPanel.js, Experience.js, etc.): These files contain the React components that make up the Moonquake visualization.

**Context.js**: File defining a React context for managing global state.

**Store.js**: File defining a state management store using Zustand library

**styles.css**: Global styles for the application

**package.json:** The file that includes metadata about the project and its dependencies. It also contains scripts for running various tasks.

**pnpm-lock.yaml**: This file is specific to pnpm, a package manager for JavaScript projects.

**readme.md**: Documentation for your project.ie, this file

