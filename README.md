# bookshelf

## Setup

With the latest version of node & npm, run the following:

```sh
npm i #installs dependencies
npm i -g json-server jest #install CLI dependencies
```

### To run development build:

```sh
npm start #starts client server at localhost:5000
npm run server #starts json-server at localhost:3000
```

To view the app go to localhost:5000

### Running tests & generating coverage

```sh
npm test 
```
### To get production build:

```sh
npm run clean #cleans up old coverage & build 
npm run build #creates public folder
npm run server
```
To view the app go to localhost:3000
