# angular2rc-webpack-workshop

This project is build using latest version of angular i.e Angular2(https://angular.io/).

Basic setup include following steps.

1> Creating two independent folder client and server
2> For setting any config option we will use config folder.
3> All the application specific typings will be stored in typings folder.

Before we start developing angular application, we need to setup webpack for building client.

1> Run below commonds to install webpack.
> npm Install webpack --save-dev

2> Create files in config folder
   webpack.common.js
   webpack.dev.js
   webpack.prod.js
   webpack.test.js

3> Add below lines in package.json script's object
    "build": "webpack --config config/webpack.dev.js --progress",


4> Install dependencies for client side.

    "@angular/common": "2.0.0-rc.4",
    "@angular/compiler": "2.0.0-rc.4",
    "@angular/core": "2.0.0-rc.4",
    "@angular/forms": "0.2.0",
    "@angular/http": "2.0.0-rc.4",
    "@angular/platform-browser": "2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "2.0.0-rc.4",
    "@angular/router": "3.0.0-beta.1",
    "@angular/router-deprecated": "2.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.4",
    "systemjs": "0.19.27",
    "core-js": "^2.4.0",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "^0.6.12",
    "angular2-in-memory-web-api": "0.0.14",
    "bootstrap": "^4.0.0-alpha.3"

5> Add client side angular code.

6> Now run belwo cmd to build
> npm run build

This is start webpack and start compiling angular sample client code.

Now we need to write code for server which will have below folders including boot.ts(starting file)

1> controllers
2> models
3> routes
4> services
5> schemas
6> data

We need to install all the depenencies by running below code

    "angular2-template-loader": "^0.4.0",
    "body-parser": "^1.15.2",
    "concurrently": "^2.0.0",
    "cookie-parser": "^1.4.3",
    "css-loader": "^0.23.1",
    "express": "^4.14.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.8.5",
    "html-loader": "^0.4.3",
    "html-webpack-plugin": "^2.15.0",
    "http": "0.0.0",
    "imdb-api": "^1.3.3",
    "imdb-node": "0.0.4",
    "jasmine-core": "^2.4.1",
    "karma": "^0.13.22",
    "karma-babel-preprocessor": "^6.0.1",
    "karma-chrome-launcher": "^1.0.1",
    "karma-jasmine": "^0.3.8",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^1.8.0",
    "less": "^2.7.1",
    "less-loader": "^2.2.3",
    "lite-server": "^2.2.0",
    "mongoose": "^4.5.8",
    "null-loader": "^0.1.1",
    "omdb": "^0.7.0",
    "phantomjs-prebuilt": "^2.1.7",
    "raw-loader": "^0.5.1",
    "rimraf": "^2.5.2",
    "style-loader": "^0.13.1",
    "swig": "^1.4.2",
    "ts-loader": "^0.8.1",
    "typescript": "^1.8.10",
    "typings": "^1.0.4",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1",
    "webpack-merge": "^0.14.0",
    "webpack-node-externals": "^1.3.3",
    "winston": "^2.2.0"

Once we install above we are ready to complile and run server.

Before starting server make sure MONGODB server is running on local machine.

Open Mongo shell C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe

Execute following command in order to create moviesdb on local machine.
> use moviesdb

Now Test by inserting some data
> db.movies.insert({name : test})

Retrive data
>db.movies.find({})

We are ready to run application.
Now execute following cmd to run server.
> npm run server.

This will start express server and connect to mongodb

Now browse http://localhost:8000 to access application.
