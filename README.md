# Flummox Demo App

The app uses `Flummox` as a Flux implementation and `React` in conjunction with `react-router`.


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

To run a simple http server (runs on port `8123` and be configured in webpack.config.js) 
run: 

```bash
$ npm run dev
```

Then go to `http://localhost:8123` in your browser


## App

The app shows how stores and actions works along with the react-router component. For the
purpose of the demo, we implement a rooms store. Which show a list of chat rooms.



## TODOs

* Show how to use Ajax requests in Flux
* Show how to use WebSockets in Flux