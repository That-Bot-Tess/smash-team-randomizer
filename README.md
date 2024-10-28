# Smash Team Randomizer
Created with TypeScript + React + Vite. Press a button to randomly select from a list of teams provided in `data/`.
Transpiled using Babel to work in older browsers.

## `src/` files
* `App.css` - Contains all the major styling of the page.
* `App.tsx` - Contains 1 function: `App()`. This returns the HTML page and the contents specified. Also has preset teams that aren't pulled from the JSON. React's `useState()` replaces them with randomly loaded teams when the button is pressed via an `onclick()` event.
* `Character.tsx` - React component containing the character's name, render, and the home franchise icon.
* `Team.tsx` - React component with 3 character components, a customized team name, and a button to randomize the team.
* `index.css` - Auxiliary page styling. Better to put custom styling in `App.css`.
* `index.js` - Unknown, likely needed for compilation purposes. Best not to touch it.
* `main.tsx` - Renders the HTML onto the page. You should not edit this.
* `utils.tsx` - Contains utility functions exported to other `.tsx` files, such as string formatting and randomization. Put any helper functions here.
* `xhr.tsx` - Uses XHR to obtain the team list from `data/`. Entry can be specified.

## Other folders
* `data/` - Contains all JSON data for character teams. Each series entry has a JSON file. Note that teams always have set members, so singular characters are not randomized, but the whole team is.
* `dist/` - Output from compiling with the `build` script. See **Download and Compilation** for more information.
* `images/` - Contains all renders and franchise icons of characters, based on the game chosen. Images taken from https://www.ssbwiki.com/.

## Other notable files
* `index.html` - The HTML page where everything comes together. The github.io page requires this to be in the root and use a JS file, so the `<script>` tag links to the js file in `dist/` to ensure the website works. Link it to `src/main.tsx` if you want to test the code before building it.
* `package.json` - Has all the modules required to run the app. Run `npm i` when cloning to install them.

## Download and Compilation
When cloning the project, run `npm i` in the root directory using the command line to install the modules. The primary way to execute it is by running `npm start`, which runs the tsx files in `src/`. However, the website doesn't use this folder, but instead uses a transpiled js file in `dist/`. To transpile, type `npm run build` in the command line. The resulting JS file will be in `dist/` and have the same functionality with less efficiency. 
