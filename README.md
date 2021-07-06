# Reactron-express

## What this project is

Built over the previous Reactron template, this version has an embedded express server instance, that can be started and stopped inside React

## TODO:
[ ] Configure babel to generate js file from es6 and Typescript files 

## How to build the application

First, just `npm install` to import and install the needed packages.

To create the executable application, just run `npm run make`. This will build the React application to the folder `/build` first and then pack it to the Electron executable, which will be built in the folder `/out`.

## Debugging

### On browser

In order to run the application on browser, the command is still the default `npm start`

### On a Electron executable

The command to run the debug React server on the electron executable is `npm run dev`. It starts the React server and when ready, opens `localhost:3000` on the Electron exe. No browser opens when starting React server (option BROWSER=none in .env).
