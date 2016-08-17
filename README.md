# Portfolio — The AngularJS project with NodeJS and ExpressJS on Backend

This project is my Portfolio application in [AngularJS](http://angularjs.org/) with [NodeJS](https://nodejs.org/) and [ExpressJS](https://expressjs.com/) on backend.

## Getting Started

To get you started you can simply clone the Portfolio repository and install the dependencies:

### Prerequisites

You need git. You can get/install git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of bower packages and node.js tools to initialize and run Portfolio application. 
You must have node.js, its package manager (npm) and bower installed.  You can get them from 
[http://nodejs.org/](http://nodejs.org/) and [https://bower.io/](https://bower.io/).

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the required angular frameworks via `bower`, a [client-side code package manager][bower].

Tools used can be installed via `npm` by running

```
npm install
```

Angular frameworks can be installed via `bower` by running

```
bower install
```

You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
this project changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a Node.js web server along with ExpressJS on Backend.  The simplest way to start
this server is:

```
node server.js
```

Now browse to the app at `http://localhost:3300`.