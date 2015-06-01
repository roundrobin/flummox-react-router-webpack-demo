# Flummox Demo App


## Install dependencies

Install the two following global node modules for ease.

```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
```

Next install the local dependencies:
```bash
$ npm install -d
```

And finally build the app assets (bundle.js and main.css) 

```bash
$ npm run dev
```



## Run demo server

To run a simple Http server running on port `8123` (configured in webpack.config.js) 
run: 

```bash
$ npm run dev
```

Then go to `http://localhost:8123` in your browser


## App

The app show how stores and actions along with react-router work together. For the
purpose of the demo, we implement a room store.
