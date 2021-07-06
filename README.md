# Reactron

## What this project is

Reactron is a simple template for generating standalone desktop applications running a React web app. This template is intended for my own personal use, but there's no restrictions on this, so anyone can clone/fork and use it.

## How to build the application

First, just `npm install` to import and install the needed packages.

To create the executable application, just run `npm run make`. This will build the React application to the folder `/build` first and then pack it to the Electron executable, which will be built in the folder `/out`.

## Debugging

### On browser

In order to run the application on browser, the command is still the default `npm start`

### On a Electron executable

The command to run the debug React server on the electron executable is `npm run dev`. It starts the React server and when ready, opens `localhost:3000` on the Electron exe. No browser opens when starting React server (option BROWSER=none in .env).
