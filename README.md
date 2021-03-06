# Codeaux

[![Build Status] (https://travis-ci.org/Codeaux/codeaux.svg?branch=master)](https://travis-ci.org/Codeaux/codeaux)
[![Code Climate](https://codeclimate.com/github/Codeaux/Codeaux/badges/gpa.svg)](https://codeclimate.com/github/Codeaux/Codeaux)
[![Dependencies Status] (https://david-dm.org/Codeaux/codeaux.svg)](https://david-dm.org/Codeaux/codeaux)
[![devDependency Status](https://david-dm.org/Codeaux/codeaux/dev-status.svg)](https://david-dm.org/Codeaux/codeaux#info=devDependencies)

Codeaux aims to provide people with a community-driven and interactive web application to receive assistance for any coding issues they faced and also allows the community to host code discussion to promote best practices and approaches to certain coding aspects.

## Installation & Development

Ensure that you have installed the following prerequisities on your machine.

1. Download & install [Node.js](http://www.nodejs.org/download/) together with the npm package manager.
   If you encounter any problem, you can refer to this [GitHub Gist](https://gist.github.com/isaacs/579814) on how to install node and npm.

2. Download & install [MongoDB](http://www.mongodb.org/downloads), it should be running on the default port: 27017.
   (In the future, we might be considering to use [mongolab](https://mongolab.com/) as our main database host)

3. We are using [Bower Package Manager](http://bower.io/) to manage our front-end packages.
   Install Bower globally into your machine using npm:

   ```
   $ npm install -g bower
   ```

4. We are using [Grunt JavaScript Task Runner](http://gruntjs.com/) to automate development.
   Install Grunt globally into your machine using npm:

   ```
   $ npm install -g grunt-cli
   ```

### Application Setup

After installing all the prerequisities, follow the steps below to complete the application setup.

1. To install the modules (dependencies) required for the application, run the following command in the application root:

   ```
   $ npm install
   ```

   This command will install all the dependencies needed for the application to run. It will also install any development dependencies needed for testing and running the application.
   When the dependencies installation process is over, the command will initiate a Bower install command to install all the front-end modules needed for the application.

### Running the Application

After finishing the application setup, simply use grunt to run the application. run the following command in the application root:

   ```
   $ grunt
   ```

The application should be running on port 3000, on [http://localhost:3000](http://localhost:3000).

## NUS Orbital Docs

Following are the documentations and presentation videos created for NUS Orbital.

 Scope             | Presentation             | Documentation
 :---------------: | -------------------------| -------------------
 Ignition          | [Presentation Video](https://www.youtube.com/watch?v=osQjStOAci0&t=3240) <br>[Presentation Slides](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/CODEAUX%20IGNITION%20SLIDES.pdf)</br>                                                       |
 Milestone #1      | [Presentation Video](https://www.youtube.com/watch?v=gPGL7t-Ka-0) <br>[Presentation Slides](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/MILESTONE%20%231/MILESTONE%20%231%20PRESENTATION%20SLIDES.pdf)</br>                        | [Project LOG #1](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/MILESTONE%20%231/PROJECT%20LOG%20%231.pdf) <br>[Project README #1](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/MILESTONE%20%231/PROJECT%20README%20%231.pdf)</br>
 Milestone #2      |                          | [Project LOG #2](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/MILESTONE%20%232/PROJECT%20LOG%20%232.pdf)<br>[Project README #2](https://dl.dropboxusercontent.com/u/8448840/orbital/MILESTONES%20PDF%20VERSION/MILESTONE%20%232/PROJECT%20README%20%232.pdf)
 Milestone #3      |
 Splashdown        |
